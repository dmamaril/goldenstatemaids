import React        from 'react';
import { Link }     from 'react-router';

const styles = {
    container: {
        padding: '0',
        width: '80%',
        borderTop: '1px solid rgba(0, 0, 0 , 0.5)'
    },

    icon: {
        fontSize: '3em',
        color: '#3d77ea'
    },

    header: {
        margin: '50px auto',
        fontWeight: '700'
    },

    padBottom: {
        paddingBottom: '50px'
    }
};

class Trust extends React.Component {

    constructor(props) {
        super(props);
    }

    createTrust ({ header, icon, text }, index) {
        return (
            <div className="col-md-4 col-sm-12" key={ index } style={ styles.padBottom }>

                <div style={ styles.icon }>
                    <span className={ icon }></span>
                </div>

                <h3> <b>{ header }</b> </h3>
                <p> { text } </p>
            </div>
        )
    }

    render () {
        return (
            <div className="container text-center" style={ styles.container }>
                <h1 style={ styles.header } > We've got your back. </h1>
                <div className="row is-flex">
                    { this.props.steps.map(this.createTrust) }
                </div>

                <Link to="/cleaning" className="btn btn-lg btn-primary push-down">
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
            text    : `Cleaning isn't fun, but we like it. Golden State Maids gives you your day back.`
        },
        {
            header  : 'safety first',
            icon    : 'icon-shield',
            text    : `All our Cleaners undergo background checks, in-person interviews, and training before ever entering your home.`
        },
        {
            header  : 'only the best',
            icon    : 'icon-certificate',
            text    : 'Our skilled professionals go above and beyond on every job. Cleaners are reviewed and rated after every cleaning.'
        },
        {
            header  : 'easy to get help',
            icon    : 'icon-phone',
            text    : 'We bring our own safe supplies. Special requests? Let us know!'
        },
        {
            header  : 'seamless communication',
            icon    : 'icon-bubbles',
            text    : 'Online communication makes it easy for you to stay in touch with your Cleaners. Get a notification when your Cleaners are on their way'
        },
        {
            header  : 'cash-free payment',
            icon    : 'icon-credit',
            text    : 'Pay securely online after you\'re satisfied and the cleaning is complete. Backed by our 100% guarrantee.'
        }
    ]
};

export default Trust;