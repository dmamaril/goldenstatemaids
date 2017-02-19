import _ from 'lodash';
import firebase from 'firebase';
import cfgs     from '../configs/firebase';

firebase.initializeApp(cfgs);

const encodeKey = (s) => encodeURIComponent(s).replace('.', '%2E');

const pushRecord = (ref, val) => {
    return new Promise((resolve, reject) => {
        ref.push(val, (err) => err ? reject(err) : resolve(ref.key));
    });
};

/**
 * [setBooking description]
 * @param {[type]} info [description]
 */
export async function setBooking (booking) {

    let key     = encodeKey(booking.email);
    let ref     = firebase.database().ref(`booking/${key}`);
    
    return await pushRecord(ref, booking);
};

let teams = [];

/**
 * [getTeams description]
 * @return {[type]} [description]
 */
export async function getTeams () {

    let ref = firebase.database().ref('teams');

    return new Promise((resolve) => {

        if (teams.length) {
            return resolve(teams);
        }

        ref.once('value', (ss) => {
            ss.forEach((child) => teams.push(child.key));
            resolve(teams);
        });
    });
};

// always initialize;
getTeams();

/**
 * [getAvailability description]
 *
 *
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
export async function getAvailability (date) {

    let ref = firebase.database().ref(`bookings`);

    const START_TIME    = 830;
    const START_TIMES   = [830, 1030, 1230, 1430, 1630];

    const createAvailability = (start_time) => {

        start_time = start_time.toString();

        let min = start_time.slice(-2);
        let hr  = (start_time.length === 3 ? start_time[0] : start_time.slice(0, 2));


        // convert type to int;
        min         = Number(min);
        hr          = Number(hr);
        start_time  = Number(start_time);

        let min_display     = (min ? min : '00');
        let hr_display      = (hr <= 12 ? hr : hr - 12);
        let display_text    = [hr_display, min_display].join(':');

        display_text += (hr < 12 ? ' AM' : ' PM');

        if (hr !== 8) {

            let end_hr          = hr + 2;
            let end_hr_display  = (end_hr <= 12 ? end_hr : end_hr - 12);
            let end_time        = [end_hr_display, min_display].join(':');

            display_text += ' - ' + end_time;
            display_text += (end_hr < 12 ? ' AM' : ' PM');
        }


        return ({ start_time, display_text });
    };

    /**
     * [createAvailabilities description]
     *
     *  where bookings is an array of existing bookings for the given date
     *  keep in mind that you have multiple teams,
     *  therefore if a booking exists only for 1 team, 
     *  the slot should still be available.
     *
     * determine what timeslots are available based on booking start_time & end_time
     * 830-1030 is the default starting time
     * last job should start no later than 430
     *
     * start_times: [830, 1030, 1230, 1430, 1630]
     * 
     * @param  {[type]} bookings [description]
     * @return {[type]}          [description]
     */
    const createAvailabilities = (bookings=[]) => {

        let results = [];

        bookings    = _.values(bookings);
        bookings    = _.groupBy(bookings, 'start_time');

        for (let i = 0 ; i < START_TIMES.length ; i++) {

            let start_time          = START_TIMES[i];
            let current_bookings    = bookings[start_time] || [];
            let n_bookings          = current_bookings.length;

            // check end time; if it overlaps with any of the existing start_times,
            // push a phantom booking for that timeslot;
            for (let booking of current_bookings) {

                let { end_time }    = booking;
                let next_start      = START_TIMES[i+1];

                if (next_start && end_time > next_start) {
                    bookings[next_start] = bookings[next_start] || [];
                    bookings[next_start].push({ start_time, end_time });
                }
            }

            // if all teams are booked
            if (n_bookings >= teams.length) {
                continue;
            }

            // opening exists for timeslot;
            results.push(createAvailability(start_time));
        }


        return results.length ? results : [{ display_text: 'Fully Booked' }];
    };

    return new Promise((resolve) => {
        ref.child(date).on('value', (ss) => {
            resolve(createAvailabilities(ss.val()));
        });
    });
};
