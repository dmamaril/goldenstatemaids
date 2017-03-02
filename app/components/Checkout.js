import React from 'react';
import styles from '../styles/checkout.js';

class Checkout extends React.Component {

    constructor (props) {

        super(props);

        this.getFreqText    = this.getFreqText.bind(this);
        this.getHomeText    = this.getHomeText.bind(this);
        this.getServiceText = this.getServiceText.bind(this);
        this.getEstTimeText = this.getEstTimeText.bind(this);
    }

    getFreqText () {

        const hash = {
            0: '1 time service',
            1: 'Every month',
            2: 'Every 2 weeks',
            4: 'Every week'
        };

        return hash[this.props.freq];
    }

    getHomeText() {

        let { bed, bath } = this.props;

        let bed_text  = bed > 1 ? bed + ' Beds' : '1 Bed';
        let bath_text = bath > 1 ? bath + ' Baths' : '1 Bath';
    
        return [bed_text, bath_text].join(' & ');
    }

    getServiceText() {

        let { service_date, service_time } = this.props;
        
        if (!service_date || !service_time) {
            return 'Choose a service date';
        }


        let hr          = '';
        let min         = '';
        let time_string = '';
        let suffix      = ' AM';

        service_time = Number(service_time);

        if (service_time >= 1200) {
            suffix = ' PM';
        }

        if (service_time >= 1300) {
            service_time -= 1200;
        }

        service_time = service_time.toString();
        service_time = service_time.split('');

        service_time.splice(-2, 0, ':');
        service_time = service_time.join('');
        time_string  = service_time + suffix;

        return [service_date, time_string].join(' @ ');
    }

    getEstTimeText() {

        let hrs     = Math.floor(this.props.mins / 60);
        let mins    = this.props.mins % 60;

        let h_text  = hrs > 1 ? hrs + ' Hours ' : '1 Hour';
        let m_text  = mins > 0 ? mins + ' Minutes' : '';

        return [h_text, m_text].join(' ');
    }


    render () {
        return (
            <div className="form-group">

                <div className="form-group">
                    <h2> Booking Summary </h2>

                    <hr/>

                    <div className="col-xs-offset-1 col-sm-offset-3 col-md-offset-4" style={ styles.summary }>
                        <p>
                            <span className="icon-home" style={ styles.icon }></span>
                            { this.getHomeText() }
                        </p>

                        <p>
                            <span className="icon-calendar" style={ styles.icon }></span>
                            { this.getServiceText() }
                        </p>

                        <p>
                            <span className="icon-clock" style={ styles.icon }></span>
                            { this.getEstTimeText() }
                        </p>

                        <p>
                            <span className="icon-loop" style={ styles.icon }></span>
                            { this.getFreqText() }
                        </p>
                    </div>

                    <hr/>

                    <div className="col-xs-offset-1 col-sm-offset-3 col-md-offset-4" style={{ ...styles.summary, ...styles.totals }}>
                        <p>
                            Subtotal:
                            <span className="pull-right"> { '$' + this.props.subtotal + '.00' } </span>
                        </p>
                        <p>
                            Discount:
                                <span className="pull-right"> { '$' + this.props.discount + '.00' } </span>
                        </p>
                        <p style={ styles.total }>
                            Total:
                            <span className="pull-right" style={ styles.total_price }>{ '$' + this.props.total + '.00' }</span>
                        </p>
                    </div>

                    <hr/>

                </div>

                <div className="form-group text-center">

                    <h5>
                        By clicking the Book Now button you are agreeing to our Terms of Service and Privacy Policy.
                    </h5>

                    <input type="submit" className="btn btn-lg btn-primary" value="Book Now"/>
                </div>
            </div>

        );
    }
};

export default Checkout;