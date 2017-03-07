import React            from 'react';
import { Link }         from 'react-router';
import BookingForm      from './BookingForm';
import background       from '../../assets/book.jpg';
import Header           from '../Header';

const styles = {

    bgImg: {
        paddingTop: '0',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        background: `url(${ background }) no-repeat center center`,
    },

    header: {
        fontWeight: '400',
        marginTop: '75px'
    },

    trust: {
        color: 'white'
    },

    icon: {
        fontSize: '50px'
    },

    p: {
        fontSize: '18px'
    },

    trustRow: {
        marginTop: '100px',
        marginBottom: '100px'
    },

    container: {
        backgroundColor: 'white',
    },

    booking: {
        width: '80%',
        margin: '0 auto'
    },

    booking_form: {
    },

    mainContainer: {
        width: '80%',
        margin: '0 auto'
    }
};

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
                <div className="jumbotron text-center" style={ styles.bgImg }>

                    <Header />

                    <div style={ styles.mainContainer }>
                        <h1 className="" style={ styles.header }> YOU'RE 60 SECONDS AWAY FROM AWESOME CLEANING </h1>
                        <div className="row" style={ styles.trustRow }>
                            { this.props.trust_elements.map(this.createTrust) }
                        </div>
                    </div>
                </div>

                <div style={ styles.container }>
                    <div className="row" style={ styles.booking }>
                        <h1 className="black-header push-top-down text-center"> YOU'RE ONE STEP AWAY FROM A FRESH HOME </h1>

                        <div style={ styles.booking_form }>
                            <BookingForm

                                onSubmit={ this.props.onSubmit }
                                onChange={ this.props.onChange }

                                bed={ this.props.bed }
                                mins={ this.props.mins }
                                bath={ this.props.bath }
                                freq={ this.props.freq }
                                total={ this.props.total }
                                discount={ this.props.discount }
                                subtotal={ this.props.subtotal }
                                service_date={ this.props.service_date }
                                service_time={ this.props.service_time }/>
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