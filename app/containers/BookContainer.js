import React            from 'react';
import { Link }         from 'react-router';

import Book             from '../components/Booking/Book';
import pricing          from '../configs/pricing';
import { setBooking }   from '../utils/firebaseHelpers';


class BookContainer extends React.Component {

    constructor(props) {

        super(props);

        let { query }           = props.location;
        let { bed, bath, freq } = query;

        let booking = { bed: bed || 1, bath: bath || 1, frequency: freq || 2, options: {} };
        this.state  = { booking };

        let totals  = this.updateTotals();
        this.state  = Object.assign(this.state, totals);

        // bind methods
        this.updateTotals   = this.updateTotals.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    updateTotals () {

        let { bed, bath, frequency, options } = this.state.booking;

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
    }

    /**
     * [handleSubmit description]
     *
     *  attach start_time, end_time & team_id to booking obj;
     *
     * calc end_time
     *  every 60mins is +100 to start time,
     *  every min left over is +1;
     * 
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    async handleSubmit (e) {

        e.preventDefault();

        try {

            let {
                mins,
                booking,
            } = this.state;

            let est_time    = this.state.mins;
            let add_mins    = (est_time % 60);
            let add_hrs     = Math.floor(est_time / 60) * 100;
            
            let start_time  = Number(booking.service_time);
            let end_time    = start_time + add_hrs + add_mins;

            booking.start_time  = start_time;
            booking.end_time    = end_time;

            delete booking.service_time;

            let result = await setBooking(booking);


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
        if (key === 'options' || key === 'bed' || key === 'bath' || key === 'frequency') {

            let { total, mins, discount, subtotal } = this.updateTotals();
            this.setState({ total, mins, discount, subtotal });
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
                freq={ this.state.booking.frequency }
                service_date={ this.state.booking.service_date }
                service_time={ this.state.booking.service_time }/>
        );
    }
};

export default BookContainer;