import React            from 'React';
import { Link }         from 'react-router';

import Book             from '../components/Book';
import pricing          from '../configs/pricing';
import { setBooking }   from '../utils/firebaseHelpers';


class BookContainer extends React.Component {

    constructor(props) {

        super(props);

        let { query }           = props.location;
        let { bed, bath, freq } = query;

        let booking = { bed: bed || 1, bath: bath || 1, freq: freq || 2, options: {} };
        this.state  = { booking };

        let totals  = this.updateTotals();
        this.state  = Object.assign(this.state, totals);

        // bind methods
        this.updateTotals   = this.updateTotals.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    updateTotals () {

        let { bed, bath, freq, options } = this.state.booking;

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
        discount = Math.round(subtotal * freqs[freq]);

        // calc diff between subtotal & discount
        total = subtotal - discount;

        return { subtotal, discount, total, mins }
    }

    async handleSubmit (e) {

        e.preventDefault();

        return console.log(this.state);

        try {

            let booking = await setBooking(this.state.booking);

        } catch (err) {

            console.log(err);
            debugger;
        }
    } 

    handleChange ({ target }) {

        let { name, value } = target;

        console.log('changing', name, value);

        name.indexOf('stripe') === -1
            ? this.updateState('booking', name, value)
            : this.updateState('stripe', name.split('.')[1], value);
    }

    updateState (namespace, key, value) {

        let state   = this.state[namespace] || {};
        state[key]  = value;

        this.setState({ [namespace]: state });

        // update totals if any options, beds or baths changed;
        if (key === 'options' || key === 'bed' || key === 'bath') {

            let { total, mins } = this.updateTotals();
            this.setState({ total, mins });
        }
    }

    render () {
        return (
            <Book
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit }

                mins={ this.state.mins }
                total={ this.state.total }
                discount={ this.state.discount }
                subtotal={ this.state.subtotal }

                bed={ this.state.booking.bed }
                bath={ this.state.booking.bath }
                freq={ this.state.booking.freq }
                service_date={ this.state.booking.service_date }
                service_time={ this.state.booking.service_time }/>
        );
    }
};

export default BookContainer;