import React        from 'react';
import { Link }     from 'react-router';

const styles = {
    container: {
        paddingTop: '50px',
        backgroundColor: '#3d77ea',
        color: 'white !important'
    },

    icon: {
        fontSize: '3em'
    }
};

class Trust extends React.Component {

    constructor(props) {
        super(props);
    }

    createTrust ({ header, icon, text }, index) {
        return (
            <div className="col-md-4 col-sm-12 push-down" key={ index }>

                <div style={ styles.icon }>
                    <span className={ icon }></span>
                </div>

                <h3> { header } </h3>
                <p> { text } </p>
            </div>
        )
    }

    render () {
        return (
            <div className="container container-fluid text-center" style={ styles.container }>
                <h1 className="white-header"> YOUR TRUST AND SECURITY ARE OUR PRIORITIES </h1>
                <div className="row">
                    { this.props.steps.map(this.createTrust) }
                </div>

                <Link to="/cleaning" className="btn btn-lg btn-default push-down">
                    LEARN MORE
                </Link>
            </div> 
        );
    }
};

Trust.defaultProps = {
    steps: [
        {
            header  : 'saves you time',
            icon    : 'icon-history',
            text    : 'Golden State Maids helps you live smarter, giving you time to focus on what’s most important.'
        },
        {
            header  : 'safety first',
            icon    : 'icon-shield',
            text    : 'We rigorously vet all of our Cleaners before they\'re allowed to enter your home. Background checks and in-person interviews are standard.'
        },
        {
            header  : 'only the best',
            icon    : 'icon-certificate',
            text    : 'Our skilled professionals go above and beyond on every job. Cleaners are reviewed and rated after every cleaning.'
        },
        {
            header  : 'easy to get help',
            icon    : 'icon-phone',
            text    : 'We bring our own safe supplies. Let us know of any special requests and we’ll make it happen.'
        },
        {
            header  : 'seamless communication',
            icon    : 'icon-bubbles',
            text    : 'Online communication makes it easy for you to stay in touch with your Cleaners. Get a notification when your Cleaners are on their way'
        },
        {
            header  : 'cash-free payment',
            icon    : 'icon-credit',
            text    : 'Pay securely online after the cleaning is complete.'
        }
    ]
};

export default Trust;