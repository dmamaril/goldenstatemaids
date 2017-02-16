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
export async function setBooking (info) {

    let key     = encodeKey(info.email);
    let ref     = firebase.database().ref(`booking/${key}`);
    
    return await pushRecord(ref, info);
};