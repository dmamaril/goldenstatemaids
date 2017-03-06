import React from 'react';
import How from './How';
import Trust from './Trust';
import Review from './Review';
import { Link } from 'react-router';
import bg_url from '../assets/home.jpg';
import Header from './Header';
import Dropdown from './Dropdown';

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
    },

    dropdown: {
        width: '10% !important'
    }
};

class Home extends React.Component {

    constructor (props) {
        super(props);

        this.state      = {};
        this.onSelect   = this.onSelect.bind(this);
    }

    onSelect (key) {
        return (value) => this.setState({ [key]: value });
    }

    render () {
        return (
            <div>
                <div className="jumbotron text-center" style={ styles.bgImg }>

                    <Header />

                    <h1 style={ styles.jumboText }>We Clean. You Relax.</h1>

                    <Dropdown
                        styles={ styles.dropdown }
                        default={ this.props.beds.default }
                        options={ this.props.beds.options }
                        onSelect={ this.onSelect('beds') }
                    />
                    <Dropdown
                        styles={ styles.dropdown }
                        default={ this.props.baths.default }
                        options={ this.props.baths.options }
                        onSelect={ this.onSelect('baths') }
                    />
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
};

let beds  = [];
let baths = [];

for (let i = 1 ; i <= 6 ; i++) {

    let suffix  = i > 1 ? 'rooms' : 'room';
    let value   = i;

    beds.push({ value, text: `${i} Bed${suffix}` });
    baths.push({ value, text: `${i} Bath${suffix}`});
}

Home.defaultProps = {
    beds: {
        default: beds[0],
        options: beds
    },
    baths: {
        default: baths[0],
        options: baths
    }
};


export default Home;