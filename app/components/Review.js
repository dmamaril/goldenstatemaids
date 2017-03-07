import React        from 'react';
import { Link }     from 'react-router';

import bg           from '../assets/flowers.jpg';
import don_img      from '../assets/don.jpg';
import tiana_img    from '../assets/tiana.jpg';
import justin_img   from '../assets/justin.jpg';

const styles = {

    container: {
        backgroundImage: `url(${ bg })`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover'
    },

    reviews: {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '10px',
        borderRadius: '10px'
    },

    img: {
        height: '100px'
    },

    center: {
        margin: '0 auto',
    },

    flex: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
};

class Review extends React.Component {

    constructor(props) {
        super(props);
    }

    createStep ({ name, img, text }, index) {
        return (
            <div className="col-md-3 col-sm-12 push-down" key={ index } style={ styles.reviews }>
                <div>
                    <img className="img-circle" style={ styles.img } src={ img } />
                    <h4 className="text-capitalize"> { name } </h4>
                </div>

                <p className="text-center">
                    { text }
                </p>
            </div>
        )
    }

    render () {
        return (
            <div className="container container-fluid text-center" style={ styles.container }>
                <h1 className="white-header"> <span className="icon-facebook"></span> HAPPY CUSTOMERS </h1>
                
                <div className="container">
                    <div className="row" style={ styles.flex }>
                        { this.props.steps.map(this.createStep) }
                    </div>
                </div>

                <Link to="/book" type="submit" className="btn btn-lg btn-default push-down">
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
            name    : 'don mamaril',
            text    : 'MIB, you guys are amazing! I booked yesterday for a last minute cleaning today, Christmas Eve, and not only was I so thrilled to find that you had availability, the two cleaners who came to my house were rock stars! They did a seriously thorough and amazing job. What a relief!'
        },
        {
            img     : tiana_img,
            name    : 'tiana rae tran',
            text    : 'I was out of town and friends needed to use my apartment the next day. Not only were you guys able to clean my apartment in a rush, you also sent me digital pictures of my apartment showing what a great job you did. Blown away by the customer service. You guys are the best!'
        },
        {
            img     : justin_img,
            name    : 'justin watkins',
            text    : `You guys did such a great job, thanks so much. There was NO dog hair in sight and with two dogs and a long hair cat, that's a HUGE accomplishment. The floors are clean and the ceiling fans are beautiful! Thanks to Jessica and her team, for bravely entering my dirty house and doing such an amazing job!`
        }
    ]
};

export default Review;