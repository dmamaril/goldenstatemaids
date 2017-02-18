import React            from 'React';
import { Link }         from 'react-router';
import styles           from '../styles/book';
import BookingForm      from './BookingForm';

class Book extends React.Component {

    constructor (props) {
        super(props);
    }

    createTrust ({ icon, text}, index) {
        return (
            <div className="col-md-3 col-sm-6 col-xs-6" key={ index } style={ styles.trust }>
                <div style={ styles.icon }><span className={ icon }></span></div>
                <p className="text-uppercase" style={ styles.p }> { text } </p>
            </div>
        );
    }

    render () {
        return (
            <div>
                <div className="container text-center" style={ styles.background }>
                    <h1 className="push-down" style={ styles.header }> YOU'RE 60 SECONDS AWAY FROM AWESOME CLEANING </h1>
                    <div className="row" style={ styles.trustRow }>
                        { this.props.trust_elements.map(this.createTrust) }
                    </div>
                </div>

                <div className="container" style={ styles.container }>
                    <div className="row" style={ styles.booking }>
                        <h1 className="black-header push-top-down text-center"> YOU'RE ONE STEP AWAY FROM A FRESH HOME </h1>

                        <div style={ styles.booking_form }>
                            <BookingForm onSubmit={ this.props.onSubmit } onChange={ this.props.onChange }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


Book.defaultProps = {
    trust_elements: [
        {
            icon: 'icon-calendar',
            text: 'choose your date and time'
        },
        {
            icon: 'icon-credit',
            text: 'pay securely online'
        },
        {
            icon: 'icon-stack-cancel',
            text: 'no contracts cancel anytime'
        },
        {
            icon: 'icon-bubbles',
            text: 'no upsells or hidden pricing'
        }
    ]
};

export default Book;