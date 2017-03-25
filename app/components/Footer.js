import React from 'react';
import { Link } from 'react-router';
import gsm_logo from '../assets/logo/logo-01.png'
import gsm_logo_sm from '../assets/logo/logo-03.png'


const styles = {

    main: {
        textAlign: 'left',
        padding: '15px'
    },

    logo: {
        height: '50px',
        marginLeft: '-17px'
    },

    links: {
        lineHeight: '25px'
    },

    h2: {
        marginTop: '0px',
        fontWeight: '700'
    },

    socials: {
        fontSize: '36px',
        paddingTop: '10px'
    },

    motto: {
        padding: '1% 0'
    }
}

export default (props) => (
    <div className="container col-md-12" style={ styles.main }>

        <div className="container text-center">
            
            <div className="col-md-6">
                <img src={ gsm_logo } style={ styles.logo } />
            </div>

            <div className="col-md-4" style={ styles.socials }>
                <a href="https://www.facebook.com/goldenstatemaids"><span className="icon-facebook col-md-3"></span></a>
                <a href="https://twitter.com/goldenstatemaid"><span className="icon-twitter col-md-3"></span></a>
                <a href="https://www.instagram.com/goldenstatemaids"><span className="icon-instagram col-md-3"></span></a>
                <a href=""><span className="icon-yelp col-md-3"></span></a>
            </div>
        </div>

        <hr style={ styles.hr } />

        <div className="container">
            <div className="col-xs-12 col-md-6 text-center" style={ styles.motto }>
                <h2 style={ styles.h2 }> Put your feet up. </h2>
                <h2 style={ styles.h2 }> We got this. </h2>
            </div>

            <div className="col-md-6" style={ styles.links }>

                <div className="col-xs-4">
                    <h4> Get to know us </h4>

                    <div>
                        <Link to="/about-us">About Us</Link>
                    </div>

                    <div>
                        <Link to="/about-us#contact-us">Contact Us</Link>
                    </div>

                    <div>
                        <a href="mail:hello@goldenstatemaids.com" type="email">Clean With Us</a>
                    </div>
                </div>

                <div className="col-xs-4">
                    <h4> How can we serve you? </h4>

                    <div>
                        <Link to="/cleaning">Home Cleaning</Link>
                    </div>

                    <div>
                        <Link to="/cleaning#checklist">50pt Checklist</Link>
                    </div>
                </div>

                <div className="col-xs-4">
                    <h4> Connect </h4>
                    
                    <div>
                        <a href="https://www.facebook.com/goldenstatemaids">Facebook</a>
                    </div>

                    <div>
                        <a href="https://twitter.com/goldenstatemaid">Twitter</a>
                    </div>
                    
                    <div>
                        <a href="https://www.instagram.com/goldenstatemaids">Instagram</a>
                    </div>
                    
                    <div>
                        <a href="">Yelp</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);