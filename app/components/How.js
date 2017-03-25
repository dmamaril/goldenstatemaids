import React        from 'react';
import { Link }     from 'react-router';

import line         from '../assets/line.svg';
import calendar     from '../assets/calendar.svg';
import bell         from '../assets/bell.svg';
import duster       from '../assets/duster.svg';
import hand         from '../assets/hand-cleaning.svg';

const styles = {

    container: {
        backgroundImage: `url(${line})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: '25%',
        margin: '50px auto'
    },

    h1: {
        width: '80%',
        fontWeight: '700',
        margin: '0 auto 50px'
    },

    icon: {
        height: '50px',
        width: '50px',
        backgroundColor: 'white'
    },

    steps: {
        width: '80%',
        margin: '50px auto'
    }
};

class How extends React.Component {

    constructor(props) {
        super(props);
    }

    createStep ({ header, icon, text }, index) {
        return (
            <div className="col-md-3 col-sm-12 text-left" key={ index }>
                <div className="col-xs-2 col-md-12">
                    <img src={ icon } style={ styles.icon } />
                </div>

                <div className="col-xs-offset-1 col-xs-9 col-md-offset-0 col-md-12">
                    <h3> <b>{ header }</b> </h3>
                    <p> { text } </p>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="container text-center"  style={ styles.container }>
                <h1 style={ styles.h1 }> Less cleaning, more Netflix. </h1>

                <div className="row" style={ styles.steps }> { this.props.steps.map(this.createStep) } </div>

                <Link to="/book" className="btn btn-lg btn-primary"> BOOK APPOINTMENT </Link>
            </div> 
        );
    }
};

How.defaultProps = {
    steps: [
        {
            header  : 'Book us',
            icon    : calendar,
            text    : 'We\'re available every day of the week.'
        },
        {
            header  : 'Let us in',
            icon    : bell,
            text    : 'Whether it\'s a friend or a doorman, let us in and we\'ll have your home sparkling.'
        },
        {
            header  : 'We clean',
            icon    : duster,
            text    : 'We rigorously cover our 50 point checklist. Add-ons available.'
        },
        {
            header  : 'Rinse & repeat',
            icon    : hand,
            text    : 'Schedule recurring cleans to keep your place always looking fresh.'
        }
    ]
};

export default How;