import React            from 'react';
import { findDOMNode }  from 'react-dom';
import DateTimePicker   from './DateTimePicker';
import Frequency        from './Frequency';
import Extras           from './Extras';
import Checkout         from './Checkout';
import HomeInfo         from './HomeInfo';

class BookingForm extends React.Component {

    constructor (props) {

        super(props);
        this.state = {};

        this.handleAddressChange = this.handleAddressChange.bind(this);
    }

    handleAddressChange () {

        let { autocomplete } = this.state;

        let place   = autocomplete.getPlace();
        let bounds  = autocomplete.getBounds();

        let isInServiceArea = bounds.contains(place.geometry.location);

        if (!isInServiceArea) {
            return console.error('Address out of bounds'); // fill;
        }

        // what makes a street address;
        let components = ['street_number', 'route', 'locality', 'postal_code'];

        // pull address components array && proper address;
        let { address_components, formatted_address } = place;

        // break down address_components into its main type of components
        address_components = _.groupBy(address_components, 'types[0]');

        // if a component doesnt exist in address_components, it's invalid;
        for (let component of components) {

            if (!address_components.hasOwnProperty(component)) {
                return console.error('Not a home address.');
            }
        }

        // mock element typically pased in onChange;
        let target = { name: 'address', value: formatted_address };
        this.props.onChange({ target });
    }

    componentDidMount () {

        let { locationTextField } = this.refs;

        // bound found in Wunderlist #Update 0008
        let bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(37.068721216624034, -122.15897290039061),
            new google.maps.LatLng(37.57476033198485, -121.55473120117193),
        );

        let types   = ['geocode'];
        let options = { bounds, types };

        // attach autocomplete with bounds;
        let autocomplete    = new google.maps.places.Autocomplete(locationTextField, options);
        let handler         = autocomplete.addListener('place_changed', this.handleAddressChange);

        this.setState({ autocomplete, handler });
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

                <div className="form-group">

                    <div className="form-headers">
                        <h2> Contact Information </h2>
                        <h6> This information will be used to contact you about your service </h6>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <input onChange={ this.props.onChange } required name="first_name" type="text" className="form-control" placeholder="First Name"/>
                    </div>
                    
                    <div className="col-md-6 col-sm-12">
                        <input onChange={ this.props.onChange } required name="last_name" type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    
                    <div className="col-md-6 col-sm-12">
                        <input onChange={ this.props.onChange } required name="email" type="email" className="form-control" placeholder="E-Mail"/>
                    </div>
                    
                    <div className="col-md-6 col-sm-12">
                        <input onChange={ this.props.onChange } required name="phone" type="phonenumber" className="form-control" placeholder="Phone Number"/>
                    </div>
                </div>

                <div className="form-group">

                    <div className="form-headers">
                        <h2> Service Address </h2>
                        <h6> Where would you like us to clean? </h6>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <input required name="address1" type="text" className="form-control" placeholder="Street Address" ref="locationTextField"/>
                    </div>
                    
                    <div className="col-md-6 col-sm-12">
                        <input onChange={ this.props.onChange } name="address2" type="text" className="form-control" placeholder="Apt # (optional)"/>
                    </div>
                    
                    { /* <div className="col-md-5 col-sm-12">
                        <input onChange={ this.props.onChange } required name="city" type="text" className="form-control" placeholder="City"/>
                    </div>
                    
                    <div className="col-md-2 col-sm-12">
                        <input onChange={ this.props.onChange } required name="state" type="text" className="form-control" value="CA" disabled/>
                    </div>
                    
                    <div className="col-md-5 col-sm-12">
                        <input onChange={ this.props.onChange } required name="zip" type="text" className="form-control" placeholder="Zip Code"/>
                    </div> */ }
                </div>

                <HomeInfo onChange={ this.props.onChange } bed={ this.props.bed } bath={ this.props.bath }/>

                <Extras onChange={ this.props.onChange } />

                <DateTimePicker onChange={ this.props.onChange } />

                <Frequency onChange={ this.props.onChange } freq={ this.props.freq }/>

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