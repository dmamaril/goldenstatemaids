import React from 'react';
import gsm_logo from '../assets/logo/logo-01.png'
import gsm_logo_sm from '../assets/logo/logo-03.png'


const styles = {

    main: {
        textAlign: 'center',
        padding: '25px'
    },

    logo: {
        height: '50px',
        marginTop: '15px'
    },

    logoSm: {
        height: '125px'
    }
}

export default (props) => (
    <div clasName="footer" style={ styles.main }>

        <img src={ gsm_logo } style={ styles.logo } />

        <hr/>

        <div className="container text-left">

            <div className="col-xs-6">
                <h4> Connect </h4>
            
                <div>
                    <a>Twitter</a>
                </div>
                
                <div>
                    <a href="https://www.facebook.com/goldenstatemaids">Facebook</a>
                </div>
                
                <div>
                    <a href="https://www.instagram.com/goldenstatemaids/">Instagram</a>
                </div>
                
                <div>
                    <a href="">Yelp</a>
                </div>
            </div>

            <div className="col-xs-6 text-center">
                <img src={ gsm_logo_sm } style={ styles.logoSm }/>
            </div>
        </div>
    </div>
);