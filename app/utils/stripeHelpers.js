import cfgs     from '../configs/stripe.js';
import api_key  from '../configs/stripe';

Stripe.setPublishableKey(cfgs.publishable);

export async function chargeUser(email, { number, expiry, cvc }, amount) {

    cvc             = Number(cvc);
    expiry          = expiry.split(' / ');

    let object      = 'card';
    let exp_month   = Number(expiry[0]);
    let exp_year    = Number(expiry[1]);
    let currency    = 'usd'

    debugger;

    /**
     * [createSource description]
     * @param  {[type]} customer [description]
     * @return {[type]}          [description]
     */
    const createSource = function createSource (customer) {
        return stripe.customers.createSource(customer.id, {
            source: { object, number, exp_month, exp_year, cvc }
        });
    }

    /**
     * [description]
     * @param  {[type]} source [description]
     * @return {[type]}        [description]
     */
    const charge = function charge ({ customer }) {
        return stripe.charges.create({ amount, customer, currency });
    }

    // Create a new customer and then a new charge for that customer: 
    return new Promise((resolve, reject) => {
        stripe.customers.create({ email })
            .then(createSource)
            .then(charge)
            .then(resolve)
            .catch(reject);
    });
};