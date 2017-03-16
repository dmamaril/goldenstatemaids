import key      from '../configs/stripe';
import image    from '../assets/logo/logo-stripe.png';

let resolve, amt, desc;

const URI = 'http://localhost:3000/charge';

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
            let charge      = await submit({ amount, source, description });

            resolve(charge);
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
    return new Promise((res) => {

        resolve = res;

        handler.open({
            email,
            amount,
            description,
            name: 'Golden State Maids'
        });
    });
};