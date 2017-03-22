import _        from 'lodash';
import firebase from 'firebase';
import cfgs     from '../configs/firebase';

firebase.initializeApp(cfgs);

let _state = {

    teams: {
        length: 0
    },

    timeslots: {}
};

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

    let key     = encodeKey(booking.service_date);
    let ref     = firebase.database().ref(`booking/${key}`);

    let ts = _state.timeslots;

    booking.team_key = _.get(_state.timeslots, [booking.start_time, '0', 'open_teams', '0'], null);

    return await pushRecord(ref, booking);
};

/**
 * [getTeams description]
 *
 *  Retrieve team keys for the sake of assigning bookings to a team
 * 
 * @return {[type]} [description]
 */
export async function getTeams () {

    let ref = firebase.database().ref('teams');

    return new Promise((resolve) => {

        if (_state.teams.length) {
            return resolve(_state.teams);
        }

        ref.once('value', (ss) => {

            ss.forEach(({ key }) => { 
                _state.teams[key] = 1;
                _state.teams.length++;
            });

            resolve(_state.teams);
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

    let ref = firebase.database().ref(`booking`);

    const START_TIME    = 830;
    const START_TIMES   = [830, 1030, 1230, 1430, 1630];

    /**
     * [description]
     * @param  {[type]} start_time [description]
     * @return {[type]}            [description]
     */
    const createAvailability = (start_time, open_teams) => {

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

        return ({ start_time, display_text, open_teams });
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

        bookings = _.values(bookings);
        bookings = _.groupBy(bookings, 'start_time');

        for (let i = 0 ; i < START_TIMES.length ; i++) {

            let start_time          = START_TIMES[i];
            let current_bookings    = bookings[start_time] || [];
            let n_bookings          = current_bookings.length;
            let open_teams          = _.cloneDeep(_state.teams);

            // remove len prop from clone;
            delete open_teams.length;

            // check end time; if it overlaps with any of the existing start_times,
            // push a phantom booking for that timeslot;
            for (let booking of current_bookings) {

                let { end_time, team_key }  = booking;
                let next_start              = START_TIMES[i+1];

                // remove booked team from clone;
                delete open_teams[team_key];

                if (next_start && end_time > next_start) {
                    bookings[next_start] = bookings[next_start] || [];
                    bookings[next_start].push({ start_time, end_time });
                }
            }

            // if all teams are booked
            if (n_bookings >= _state.teams.length) {
                continue;
            }

            open_teams = _.keys(open_teams);
            results.push(createAvailability(start_time, open_teams));
        }


        // reset timeslots cache;
        if (!results.length) {
            _state.timeslots = {};
            return [{ display_text: 'Fully Booked' }];
        }

        _state.timeslots = _.groupBy(results, 'start_time');
        return results;
    };

    return new Promise((resolve) => {
        ref.child(date).on('value', (ss) => {
            resolve(createAvailabilities(ss.val()));
        });
    });
};
