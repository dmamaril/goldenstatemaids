import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const styles = {

    container: {
        padding: '100px 20%',
        color: '#14374c'
    },

    about: {

    },

    contact: {
        backgroundColor: '#63ead3'
    },

    h1: {
        fontSize: '3.5em',
        fontWeight: '700'
    },

    subHead: {
        fontWeight: '400',
        paddingBottom: '25px'
    },

    padBottom: {
        paddingBottom: '25px'
    },

    icon: {
        fontSize: '25px'
    },

    links: {
        color: 'black',
        marginLeft: '15px',
        fontSize: '25px'
    },

    p: {
        fontSize: '16px'
    }
}

class Thanks extends React.Component {

    constructor (props) {

        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Header/>

                <div className="container col-md-offset-3 col-sm-12" style={ { ...styles.about, ...styles.container } }>

                    <h1 style={ styles.h1 }> Thanks, { this.props.name }! </h1>
                    <h2 style={ styles.subHead }> Cleaner days are on the horizon. </h2>

                    <h3>
                        What's next? You'll receive a confirmation email at <b>{ this.props.email }</b>.
                        Please check your spam folder and if you don't receive it within the day, please <Link to="/about-us#contact-us">contact us</Link>.
                    </h3>

                    <h3>
                        Your confirmation key is <b>{ this.props.confirmation }</b>.
                    </h3>
                </div>

                <Footer />
            </div>
        );
    }
};

Thanks.defaultProps = {
    name: 'Don',
    email: 'mamarildon@gmail.com',
    address: '2053 Wendover Lane, San Jose, CA 95121',
    confirmation: '9867ad9f08a35j203'
};

export default Thanks;