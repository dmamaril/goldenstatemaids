import key from '../configs/stripe';
import image from '../assets/logo/logo-stripe.png';

const handler = StripeCheckout.configure({
    key,
    image,
    zipCode: true,
    locale: 'auto',
    token: (token) => {}
});

export async function chargeUser(email, amount) {

    // add 2 decimal points for stripe;
    amount = amount * 100;

    // Create a new customer and then a new charge for that customer: 
    return new Promise((resolve, reject) => {


        handler.open({
            email,
            amount,
            // description,
            name: 'Golden State Maids',
        });
    });
};