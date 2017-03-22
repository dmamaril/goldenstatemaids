import React from 'react';
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
        paddingBottom: '25px',
        fontSize: '3.5em',
        fontWeight: '700'
    },

    h2: {
        fontWeight: '400',
        paddingBottom: '5px'
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

class About extends React.Component {

    constructor (props) {

        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Header theme="blue"/>

                <div className="container col-md-offset-3 col-sm-12" style={ { ...styles.about, ...styles.container } }>
                    <h1 style={ styles.h1 }> About Us </h1>

                    <h2 style={ styles.h2 }> Golden State Maids' Mission: Provide a high-quality maid service. </h2>
                    <p style={ styles.p }>
                        We take the hassle out of home and office cleaning in the bay.

                        You know that awesome feeling when you leave your hotel room for the day and return home to a newly made bed,
                        clean linens and a clean, fresh scent… 

                        that’s exactly how customers should feel in their home after a housekeeping appointment with a GSM maid.
                    </p>
                </div>

                <div className="container col-md-offset-3 col-sm-12" style={ { ...styles.contact, ...styles.container } }>
                    <h1 style={ styles.h1 }> Contact Us </h1>

                    <div style={ styles.padBottom }>
                        <p>
                            <span className="icon-phone" style={ styles.icon }></span>
                            <a style={ styles.links } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.onMouseLeave } href="tel:(800) 123-4567" title="phone"> (800) 123-4567 </a>
                        </p>
                        <p>
                            <span className="icon-envelope" style={ styles.icon }></span>
                            <a style={ styles.links } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.onMouseLeave } href="mail:hello@goldenstatemaids.com" title="email"> hello@goldenstatemaids.com </a>
                        </p>
                    </div>

                    <h2 style={ styles.h2 }> We'll get back to you as soon as we can </h2>

                    <p style={ styles.p }>
                        If you call during our business hours you'll get through to us instantly.
                        If you email, we'll usually get back to you within the same business day.
                        <b> Our team members are eager to answer all of your cleaning questions 8am – 6:30pm, Monday-Saturday. </b>
                    </p>
                </div>

                <Footer />
            </div>
        );
    }
};

export default About;