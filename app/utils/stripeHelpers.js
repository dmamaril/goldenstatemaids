/**
 * [submit description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
export async function submit (payload) {
    return new Promise((resolve, reject) => {

        let options = {
            method      : 'POST',
            contentType : 'application/json',
            data        : JSON.stringify(payload),
            url         : 'https://goldenstatemaids.herokuapp.com/createCustomer',
        };

        $.ajax(options).then(resolve).catch(reject);
    });
};