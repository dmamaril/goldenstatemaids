import React        from 'react';
import { Link }     from 'react-router';

import line         from '../assets/line.svg';
import calendar     from '../assets/calendar.svg';
import bell         from '../assets/bell.svg';
import duster       from '../assets/duster.svg';
import hand         from '../assets/hand-cleaning.svg';

const styles = {

    line: {
        backgroundImage: `url(${line})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: '10%'
    },

    icon: {
        height: '50px',
        width: '50px',
        backgroundColor: 'white'
    },

    steps: {
        width: '90%',
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
                    <h4> <b>{ header }</b> </h4>
                    <p> { text } </p>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="container container-fluid text-center"  style={ styles.line }>
                <h3 className="black-header push-down"> Get your day back. It's easy. </h3>

                <div className="row" style={ styles.steps }> { this.props.steps.map(this.createStep) } </div>

                <Link to="/book" className="btn btn-lg btn-primary push-down"> BOOK APPOINTMENT </Link>
            </div> 
        );
    }
};

How.defaultProps = {
    steps: [
        {
            header  : 'Schedule us',
            icon    : calendar,
            text    : 'We\'re available every day of the week.'
        },
        {
            header  : 'Let us in',
            icon    : bell,
            text    : 'Whether it\'s a doorman or a friend, all we need is the door unlocked.'
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