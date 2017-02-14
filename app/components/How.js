import React        from 'React';
import styles       from '../styles/how';

import book_img     from '../assets/book_img.jpg';
import clean_img    from '../assets/clean_img.jpg';
import relax_img    from '../assets/relax_img.jpg';

import book_icon    from '../assets/book_icon.jpg';
import clean_icon   from '../assets/clean_icon.jpg';
import relax_icon   from '../assets/relax_icon.jpg';


class How extends React.Component {

    constructor(props) {
        super(props);
    }

    createStep ({ header, img, icon, text }, index) {
        return (
            <div className="col-md-4 col-sm-12" key={ index } >
                <img className="img-responsive" src={ img } />
                <img className="img-responsive" src={ icon } style={ styles.howIcon }/>
                <h3> { header } </h3>
                <p> { text } </p>
                <hr/>
            </div>
        )
    }

    render () {
        return (
            <div className="container container-fluid text-center">
                <h1 style={ styles.howHeader }> HOW GOLDEN STATE MAIDS WORKS </h1>
                <div className="row">
                    { this.props.steps.map(this.createStep) }
                </div>
            </div> 
        );
    }
};

How.defaultProps = {
    steps: [
        {
            header  : 'book',
            img     : book_img,
            icon    : book_icon,
            text    : 'Select the date and time you’d like your professional to show up.'
        },
        {
            header  : 'clean',
            img     : clean_img,
            icon    : clean_icon,
            text    : 'A certified cleaner comes over and cleans your place.'
        },
        {
            header  : 'relax',
            img     : relax_img,
            icon    : relax_icon,
            text    : 'Sit back and relax. Enjoy your sparkling home!'
        }
    ]
};

export default How;