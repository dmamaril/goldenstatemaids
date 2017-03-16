import React                from 'react';
import { Link }             from 'react-router';
import querystring          from 'querystring';
import calcPriceTotal       from '../utils/calcPriceTotal'
import bg_url               from '../assets/home.jpg';

import How                  from './How';
import Trust                from './Trust';
import Review               from './Review';
import Header               from './Header';
import Footer               from './Footer';
import Dropdown             from './Dropdown';


const styles = {
    bgImg: {
        paddingTop: '0',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        background: `url(${ bg_url }) no-repeat center center`
    },


    jumbotron: {
        backgroundColor: '#3d77ea',
        marginBottom: '0',
    },

    jumboText: {
        marginTop: '75px'
    },

    dropdown: {
        width: '10% !important'
    },

    quickform: {
        width: '80%',
        margin: '50px auto'
    },

    submit: {
        padding: '15px',
        borderRadius: '0px'
    },

    noMargin: {
        margin: 0
    },

    yellow: {
        backgroundColor: '#FDB927',
        border: '1px solid #FDB927',
        color: 'black'
    }
};

class Home extends React.Component {

    constructor (props) {
        super(props);

        let booking = {
            frequency   : 2,
            bed         : props.beds.default.value,
            bath        : props.baths.default.value,
        };

        let { total }   = calcPriceTotal(booking);
        let query       = `/book?${ querystring.stringify(booking) }`;


        this.state      = { booking, total, query };
        this.onSelect   = this.onSelect.bind(this);
    }

    onSelect (key) {
        return (value) => {

            let booking     = this.state.booking;
            booking[key]    = value;

            let query       = `/book?${ querystring.stringify(booking) }`;
            let { total }   = calcPriceTotal(booking);

            this.setState({ booking, total, query });
        };
    }

    render () {
        return (
            <div>
                <div className="jumbotron text-center" style={ styles.bgImg }>

                    <Header />

                    <h1 className="color-white" style={ styles.jumboText }>We Clean. You Relax.</h1>

                    <div className="quick-form container" style={ styles.quickform }>

                        <Dropdown
                            class={ 'col-xs-6 col-sm-6 col-md-4' }
                            default={ this.props.beds.default }
                            options={ this.props.beds.options }
                            onSelect={ this.onSelect('bed') }
                        />

                        <Dropdown
                            class={ 'col-xs-6 col-sm-6 col-md-4' }
                            default={ this.props.baths.default }
                            options={ this.props.baths.options }
                            onSelect={ this.onSelect('bath') }
                        />

                        <Link to={ this.state.query  } className="btn btn-large btn-primary col-xs-12 col-sm-12 col-md-4" style={ styles.submit }>
                            Book from ${ this.state.total }
                        </Link>
                    </div>
                </div>

                <How />

                <Trust />

                <Review />

                <div className="jumbotron text-center" style={ styles.jumbotron }>

                    <h1 className="color-white" style={ { ...styles.jumboText, ...styles.noMargin } }> Ready for more "you" time? </h1>
                    <h1 className="color-white" style={ { ...styles.jumboText, ...styles.noMargin } }> Sign up today. </h1>

                    <div className="quick-form container" style={ styles.quickform }>
                        <Dropdown
                            class={ 'col-xs-6 col-sm-6 col-md-4' }
                            default={ this.props.beds.default }
                            options={ this.props.beds.options }
                            onSelect={ this.onSelect('bed') }
                        />
                        <Dropdown
                            class={ 'col-xs-6 col-sm-6 col-md-4' }
                            default={ this.props.baths.default }
                            options={ this.props.baths.options }
                            onSelect={ this.onSelect('bath') }
                        />

                        <Link to={ this.state.query  } className="btn btn-large btn-primary col-xs-12 col-sm-12 col-md-4" style={ { ...styles.submit, ...styles.yellow } }>
                            Book from ${ this.state.total }
                        </Link>
                    </div>
                </div>

                <Footer />
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