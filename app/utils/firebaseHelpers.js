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

export async function getAvailability (date) {

    let ref                 = firebase.database().ref(`availabilitity`);
    const NO_AVAILABILITY   = { value: null, display_text: 'Fully Booked' };

    return new Promise((resolve) => {
        ref.child(date).on('value', (ss) => resolve(ss.val() || [NO_AVAILABILITY]));
    });
};