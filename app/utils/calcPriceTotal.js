import pricing  from '../configs/pricing';

export default ({ bed=1, bath=1, frequency=0, options={} }) => {

    bed         = Number(bed);
    bath        = Number(bath);
    frequency   = Number(frequency);

    let baths   = pricing.bath;
    let freqs   = pricing.freqs;
    let beds    = pricing.bed[bed];

    let total    = 0;
    let mins     = 0;
    let subtotal = 0;
    let discount = 0;

    // add bed subtotals;
    subtotal += beds.price;
    mins += beds.mins;

    // add bath subtotals;
    subtotal += baths.price * bath;
    mins += baths.mins * bath;

    // add option subtotals;
    for (let option in options) {

        // options { [option]: bool }
        if (options[option]) {

            // an option was selected;
            subtotal += pricing.options[option].price;
            mins += pricing.options[option].mins;
            
        } else {

            // an option was deselected
            subtotal -= pricing.options[option].price;
            mins -= pricing.options[option].mins;
        }
    }

    // apply discount based on recurrence
    discount = Math.round(subtotal * freqs[frequency]);

    // calc diff between subtotal & discount
    total = subtotal - discount;

    return { subtotal, discount, total, mins }
};