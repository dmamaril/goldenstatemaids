import React        from 'react';
import { Link }     from 'react-router';

import bg           from '../assets/flowers.jpg';
import don_img      from '../assets/don.jpg';
import tiana_img    from '../assets/tiana.jpg';
import justin_img   from '../assets/justin.jpg';

const styles = {

    container: {
        padding: '50px',
        // backgroundImage: `url(${ bg })`,
        backgroundColor: '#63ead3'
    },

    reviews: {
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.6)',
    },

    review: {
        fontSize: '16px',
        fontWeight: '400'
    },

    img: {
        height: '100px'
    },

    header: {
        margin: '0 auto 50px',
        fontWeight: '700'
    },

    flexContainer: {
        margin: '0 auto 40px',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
};

class Review extends React.Component {

    constructor(props) {
        super(props);
    }

    createStep ({ name, city, img, text }, index) {
        return (
            <div className="col-md-3 col-sm-12" key={ index } style={ styles.reviews }>
                <div>
                    <img className="img-circle" style={ styles.img } src={ img } />
                    <h4> <b>{ name }</b>, <small>{ city }</small> </h4>
                </div>

                <p style={ styles.review }>
                    { text }
                </p>
            </div>
        )
    }

    render () {
        return (
            <div className="container text-center" style={ styles.container }>
                
                <h1 style={ styles.header }>
                    <span className="icon-facebook"></span> HAPPY CUSTOMERS
                </h1>
                
                <div className="row is-flex" style={ styles.flexContainer }>
                    { this.props.steps.map(this.createStep) }
                </div>

                <Link to="/book" type="submit" className="btn btn-lg btn-default">
                    BOOK NOW
                </Link>
            </div> 
        );
    }
};

Review.defaultProps = {
    steps: [
        {
            img     : don_img,
            name    : 'Don',
            city    : 'Los Gatos',
            text    : 'I\'ve always hated cleaning. My place would never be clean for more than two days. I eventually gave up trying to clean my own place and gave cleaning services a shot. Tried a few maid cleaning services before settling on Golden State Maids. They\'re the best thing to have ever happened to my house!'
        },
        {
            img     : justin_img,
            name    : 'Justin',
            city    : 'Sunnyvale',
            text    : 'Used to argue all the time with my roommates about keeping the house clean. Now we just split to have Golden State Maids come once a month and we\'re all happy.'
        },
        {
            img     : tiana_img,
            name    : 'Tiana',
            city    : 'San Jose',
            text    : 'A friend recommended Golden State Maids to me after I complimented her on how her apartment was always so clean. I do my own cleaning, but work gets tiring and things slowly get messy. Now I just hire GSM to come back once a month for a deep clean and my cleaners always do a fantastic job. My place has never looked better.'
        }
    ]
};

export default Review;