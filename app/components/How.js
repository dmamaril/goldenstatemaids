import React        from 'react';
import { Link }     from 'react-router';

import book_img     from '../assets/book_img.jpg';
import clean_img    from '../assets/clean_img.jpg';
import relax_img    from '../assets/relax_img.jpg';

const styles = {

    container: {
        width: '80%'
    },

    howPanel: {
        marginBottom: '50px'
    },

    howImg: {
    },

    howIcon: {
        fontSize: '50px',
        color: '#006BB6'
        // color: '#FDB927'
    },

    h3: {
        margin: '0'
    }
};

class How extends React.Component {

    constructor(props) {
        super(props);
    }

    createStep ({ header, img, icon, text }, index) {
        return (
            <div className="col-md-4 col-sm-12 push-down" key={ index }>
                <img className="img-responsive push-down" src={ img } />

                <div style={ styles.howIcon }>
                    <span className={ icon }></span>
                </div>

                <h3 style={ styles.h3 }> { header } </h3>
                <p> { text } </p>
            </div>
        )
    }

    render () {
        return (
            <div className="container container-fluid text-center" style={ styles.container }>
                <h1 className="black-header"> HOW GOLDEN STATE MAIDS WORKS </h1>
                <div className="row">
                    { this.props.steps.map(this.createStep) }
                </div>

                <Link to="/book" className="btn btn-lg btn-primary push-down">
                    BOOK APPOINTMENT
                </Link>
            </div> 
        );
    }
};

How.defaultProps = {
    steps: [
        {
            header  : 'book',
            img     : book_img,
            icon    : 'icon-calendar',
            text    : 'Select the date and time you’d like your professional to show up.'
        },
        {
            header  : 'clean',
            img     : clean_img,
            icon    : 'icon-diamond',
            text    : 'A certified cleaner comes over and cleans your place.'
        },
        {
            header  : 'relax',
            img     : relax_img,
            icon    : 'icon-sunglasses',
            text    : 'Sit back and relax. Enjoy your sparkling home!'
        }
    ]
};

export default How;