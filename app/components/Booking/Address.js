import React from 'react';

const styles = {

    input: {
        height: '60px',
        borderRadius: 0,
        fontSize: '18px',
        border: '1px solid rgba(0, 0, 0, 0.1)'
    },

    inputAddress: {
        borderRight: 'none'
    },

    container: {
        padding: '0'
    }
};

class Address extends React.Component {

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


    render () {
        return (
            <div className="form-group">

                <div className="form-headers">
                    <h2> Service Address </h2>
                    <h6> Where would you like us to clean? </h6>
                </div>

                <div className="col-xs-10" style={ styles.container }>
                    <h5> ADDRESS </h5>
                    <input style={ { ...styles.input, ...styles.inputAddress } } required name="address1" type="text" className="form-control" ref="locationTextField"/>
                </div>
                
                <div className="col-xs-2" style={ styles.container }>
                    <h5> APT # </h5>
                    <input style={ styles.input } onChange={ this.props.onChange } name="address2" type="text" className="form-control"/>
                </div>
            </div>
        );
    }
};

export default Address;