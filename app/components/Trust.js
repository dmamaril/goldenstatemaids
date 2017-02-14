import React        from 'React';
import styles       from '../styles/trust';

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
                <h1 className="white-header"> YOUR TRUST AND SECURITY ARE OUR PRIORITY </h1>
                <div className="row">
                    { this.props.steps.map(this.createTrust) }
                </div>

                <button type="submit" className="btn btn-lg btn-default push-down">
                    LEARN MORE
                </button>
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
            text    : 'We rigorously vet all of our Cleaners, who undergo identity checks as well as in-person interviews.'
        },
        {
            header  : 'only the best quality',
            icon    : 'icon-certificate',
            text    : 'Our skilled professionals go above and beyond on every job. Cleaners are rated and reviewed after each task.'
        },
        {
            header  : 'easy to get help',
            icon    : 'icon-phone',
            text    : 'We bring our own safe supplies. et us know of any special requests and we’ll make it happen.'
        },
        {
            header  : 'seamless communication',
            icon    : 'icon-bubbles',
            text    : 'Online communication makes it easy for you to stay in touch with your Cleaners.'
        },
        {
            header  : 'cash-free payment',
            icon    : 'icon-credit',
            text    : 'Pay securely online only when the cleaning is complete.'
        }
    ]
};

export default Trust;