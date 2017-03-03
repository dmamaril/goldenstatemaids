import React from 'react';
import How from './How';
import Trust from './Trust';
import Review from './Review';
import { Link } from 'react-router';
import bg_url from '../assets/home.jpg';

const styles = {
    bgImg: {
        height: '80vh',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        background: `url(${ bg_url }) no-repeat center center`
    },

    jumbotron: {
        backgroundColor: 'white',
        marginBottom: '0'
    }
};

class Home extends React.Component {
    render () {
        return (
            <div>
                <div className="jumbotron text-center" style={ styles.bgImg }>
                    <h1>Welcome Home</h1>
                    <h2> Maid Service Maid Easy </h2>
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