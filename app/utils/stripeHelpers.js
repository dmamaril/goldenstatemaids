import key      from '../configs/stripe';
import image    from '../assets/logo/logo-stripe.png';

let RESOLVE, REJECT, amt, desc;

const URI = 'https://goldenstatemaids.herokuapp.com/charge';

const handler = StripeCheckout.configure(
    {
        key,
        image,
        zipCode: true,
        locale: 'auto',
        token: async function token ({ id }) {

            let source      = id;
            let amount      = amt;
            let description = desc;

            try {

                let charge = await submit({ amount, source, description });  
                RESOLVE(charge);

            } catch (e) {
                REJECT(e);
            }

        }
    }
);

/**
 * [submit description]
 * @param  {[type]} payload [description]
 * @return {[type]}         [description]
 */
async function submit (payload) {
    return new Promise((resolve, reject) => {

        let options = {
            method      : 'POST',
            url         : URI,
            contentType : 'application/json',
            data        : JSON.stringify(payload),
        };

        $.ajax(options).then(resolve).catch(reject);
    });
}

export async function chargeUser(email, description, amount) {

    // add 2 decimal points for stripe;
    amount = amount * 100;

    // Create a new customer and then a new charge for that customer: 
    return new Promise((res, rej) => {

        RESOLVE = res;
        REJECT  = rej;
        amt     = amount;
        desc    = description;

        handler.open({
            email,
            amount,
            description,
            name: 'Golden State Maids'
        });
    });
};