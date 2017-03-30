import React        from 'react';
import { Link }     from 'react-router';
import ReactDOM     from 'react-dom'

import Header       from './Header';
import bg_img       from '../assets/home-cleaning.jpg';
import checklist    from '../configs/checklist';
import fridge       from '../assets/fridge.svg';
import oven         from '../assets/oven.svg';
import cabinets     from '../assets/cabinets.svg';
import time         from '../assets/time.svg';
import Review       from './Review';
import Footer       from './Footer';


const styles = {
    bgImg: {
        paddingTop: '0',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        background: `url(${ bg_img }) no-repeat center center`,
        paddingBottom: '50px'
    },

    content: {
        padding: '5% 0'
    },

    h: {
        color: '#14374C',
        fontWeight: '700',
        marginBottom: '20px',
        fontSize: '4em',
        marginTop: '0'
    },

    details: {
        backgroundColor: '#14374c',
        padding: '10% 50px'
    },

    detailItemsContainer: {
        marginTop: '15px'
    },

    p: {
        color: '#14374C',
        fontSize: '16px',
        fontWeight: '400',
        width: '90%',
    },

    bookLg: {
        backgroundColor: '#3d77ea',
        padding: '20px',
        fontWeight: '400',
        color: 'white',
        width: '100%',
    },

    linkPad: {
        padding: '10px 0'
    },

    options: {
        color: 'black',
        fontWeight: '400',
        cursor: 'pointer',
        padding: '0'
    },

    checklist: {
        maxWidth: '225px',
    },

    containerLvl0: {
        backgroundColor: '#ffffff'
    },

    containerLvl1: {
        backgroundColor: '#63ead3'
    },

    containerLvl2: {
        backgroundColor: '#3d77ea'
    },

    light: {
        color: 'white'
    },

    fade: {
        opacity: '0.3'
    },

    detailItems: {
        marginBottom: '25px'
    },

    meta: {
        fontSize: '16px',
        marginLeft: '20px',
        fontWeight: '100'
    },

    price: {
        fontSize: '16px',
        color: '#63ead3'
    },

    pad: {
        padding: '50px'
    },

    padBottom: {
        paddingBottom: '15px'
    },

    noMargin: {
        margin: '0'
    }
};

class HomeCleaning extends React.Component {

    constructor (props) {

        super(props);

        this.state              = { level: 0 };

        this.updateLevel        = this.updateLevel.bind(this);
        this.createItemList     = this.createItemList.bind(this);
        this.createChecklist    = this.createChecklist.bind(this);
    }

    componentDidUpdate() {

        let hash = this.props.location.hash.replace('#', '');

        if (hash) {

            let node = ReactDOM.findDOMNode(this.refs[hash]);

            if (node) {
                node.scrollIntoView();
            }
        }
    }


    updateLevel (level) {
        return () => {
            this.setState({ level });
        };
    }


    createItemList (items) {

        let list = _.keys(items);

        return list.map((item, index) => {
            
            let level = items[item];

            if (level > this.state.level) {
                item = (<s> { item } </s>);
            }

            return (
                <p key={index} style={ styles.items } className={ this.state.level === 2 ? 'color-white' : '' }>
                    { item }
                </p>
            );
        });
    }


    createChecklist ({ header, items}, index) {

        let list = this.createItemList(items);

        return (
            <div key={ index } style={ styles.checklist } className="col-sm-6 col-md-4">
                <h3 className={ this.state.level === 2 ? 'color-white' : '' }> { header } </h3>
                { list }
            </div>
        );
    }


    render () {

        let lvl = this.state.level;

        return (
            <div>

                <div className="container" style={ styles.bgImg }>
                    <Header/>

                    <div className="col-sm-offset-1 col-xs-12 col-md-5" style={ styles.content }>
                        <h1 style={ styles.h }> Let your home shine. </h1>

                        <p style={ styles.p }>
                            We understand your home is important to you.
                            That’s why we focus on the quality of the clean.
                            Our cleaners aren’t contract workers - they are full-time employees.
                            They care as much as we do.
                        </p>

                        <p style={ styles.p }>
                            On top of that, we know every home is different,
                            so we allow you give us special requests for those hard to reach places.
                        </p>

                        <div className="col-xs-12 col-sm-9 col-md-6" style={ styles.linkPad }>
                            <Link to="book" className="btn btn-lg" style={ styles.bookLg }>
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="container" style={ { ...styles['containerLvl' + lvl], ...styles.pad } } ref="checklist">

                    <h2 className={ (this.state.level === 2 ? 'color-white' : '') + " text-center" } style={ styles.noMargin }> Our 50pt checklist </h2>

                    <div className="container col-sm-offset-1 col-md-10">
                        <h1 className="col-sm-12 col-md-3" onClick={ this.updateLevel(0) } style={ Object.assign({}, styles.options, lvl !== 0 && styles.fade) }> Standard </h1>
                        <h1 className="col-sm-12 col-md-3" onClick={ this.updateLevel(1) } style={ Object.assign({}, styles.options, lvl !== 1 && styles.fade) }> Standard Plus </h1>
                        <h1 className="col-sm-12 col-md-3" onClick={ this.updateLevel(2) } style={ Object.assign({}, styles.options, lvl === 2 && styles.light, lvl !== 2 && styles.fade) }> Deep </h1>
                    </div>

                    <Link to="book" className={ (this.state.level === 2 ? 'color-white' : '') + " btn btn-lg" } style={ styles.book_sm }>
                        Book Now <span className="icon-arrow-right"></span>
                    </Link>

                    <div className="details col-md-12">
                        { this.props.checklist.map(this.createChecklist) }
                    </div>
                </div>


                <div className="container" style={ styles.details }>

                    <div className="col-sm-12 col-md-6">
                        <h1 style= { { ...styles.h, ...styles.light } }> We sweat the details </h1>

                        <p style={ { ...styles.p, ...styles.light, ...styles.padBottom } }> 
                            On top of the standard features, we will go the extra mile to get your place looking fantastic.
                            Just ask for a deep clean, or mark your individual needs in the booking process.
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6" style={ styles.detailItemsContainer }>
                        
                        <div className="col-xs-12 col-sm-6" style={ { ...styles.detailItems, ...styles.light } }>
                            <img className="pull-left" src={ fridge } />
                            <div className="pull-left" style={ styles.meta }>
                                <div style={ styles.addon }>
                                    Fridge
                                </div>

                                <div style={ styles.price }>
                                    <i> $20 </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6" style={ { ...styles.detailItems, ...styles.light } }>
                            <img className="pull-left" src={ oven } />
                            <div className="pull-left" style={ styles.meta }>
                                <div style={ styles.addon }>
                                    Inside Oven
                                </div>

                                <div style={ styles.price }>
                                    <i> $20 </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6" style={ { ...styles.detailItems, ...styles.light } }>
                            <img className="pull-left" src={ cabinets } />
                            <div className="pull-left" style={ styles.meta }>
                                <div style={ styles.addon }>
                                    Inside Cabinets
                                </div>

                                <div style={ styles.price }>
                                    <i> $20 </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6" style={ { ...styles.detailItems, ...styles.light } }>
                            <img className="pull-left" src={ time } />
                            <div className="pull-left" style={ styles.meta }>
                                <div style={ styles.addon }>
                                    Extra Time
                                </div>

                                <div style={ styles.price }>
                                    <i> Standard + </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Review />
                <Footer />
            </div>
        );
    }
};

HomeCleaning.defaultProps = {
    checklist
};

export default HomeCleaning;