import React            from 'react';
import { findDOMNode }  from 'react-dom';
import DateTimePicker   from './DateTimePicker';
import Frequency        from './Frequency';
import Extras           from './Extras';
import Checkout         from './Checkout';
import HomeInfo         from './HomeInfo';
import Address          from './Address';
import Customer         from './Customer';

class BookingForm extends React.Component {

    constructor (props) {

        super(props);
        this.state = {};
    }

    componentWillUnmount () {
        // Find out how to clear autocomplete listeners;
        // this.state.handler.clearListeners(this.state.autocomplete, 'place_changed');
    }

    render () {
        return (
            <form className="form-horizontal booking-form" role="form" onSubmit={ this.props.onSubmit }>
                <div className="form-group text-center">
                    <h1> Complete Your Booking </h1>
                    <p> Great! Few details and we can complete your booking. </p>
                </div>


                <HomeInfo onChange={ this.props.onChange } bed={ this.props.bed } bath={ this.props.bath }/>


                <Frequency onChange={ this.props.onChange } freq={ this.props.freq }/>

                <DateTimePicker onChange={ this.props.onChange } />

                <Address onChange={ this.props.onChange } />

                <Extras onChange={ this.props.onChange } />

                <Customer onChange={ this.props.onChange } />

                <Checkout 
                    bed={ this.props.bed }
                    bath={ this.props.bath }
                    freq={ this.props.freq }
                    mins={ this.props.mins }
                    total={ this.props.total }
                    discount={ this.props.discount }
                    subtotal={ this.props.subtotal }
                    service_date={ this.props.service_date }
                    service_time={ this.props.service_time }/>
            </form>
        );
    }
};

export default BookingForm;