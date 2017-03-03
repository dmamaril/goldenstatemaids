import React from 'react';
import How from './How';
import Trust from './Trust';
import Review from './Review';
import { Link } from 'react-router';
import bg_url from '../assets/home.jpg';
import Header from './Header';

const styles = {
    bgImg: {
        height: '80vh',
        paddingTop: '0',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        background: `url(${ bg_url }) no-repeat center center`
    },


    jumbotron: {
        backgroundColor: 'white',
        marginBottom: '0',
    },

    jumboText: {
        marginTop: '75px'
    }
};

class Home extends React.Component {
    render () {
        return (
            <div>
                <div className="jumbotron text-center" style={ styles.bgImg }>

                    <Header />

                    <h1 style={ styles.jumboText }>We Clean. You Relax.</h1>
                </div>

                <How />

                <Trust />

                <Review />

                <div className="jumbotron text-center" style={ styles.jumbotron }>
                    <h2 className="black-header"> BOOK A HOUSE CLEANING IN 60 SECONDS </h2>

                    <Link to="/book" className="btn btn-lg btn-danger">
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>
        );
    }
}


export default Home;