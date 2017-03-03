import React    from 'react';
import { Link } from 'react-router';
import logo_sm  from '../assets/logo/logo-04.png';
import logo_lg  from '../assets/logo/logo-02.png';

const styles = {
    logo: {
        height: '50px'
    },
    navbar: {
        margin: '0',
        padding: '0 10%',
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    link: {
        fontWeight: '400',
        color: 'white',
        fontSize: '18px'
    }
};

/**
 * 
 * Bind non-react fns to this in order to retain ctx
 * https://github.com/goatslacker/alt/issues/283
 * 
 */
class HeaderContainer extends React.Component {


    /**
     * [updateLogo description]
     *
     * Update logo on resize;
     * 
     * @return {[type]} [description]
     */
    updateLogo () {

        const   MEDIUM_DEVICE_WIDTH = 768;
        const   { innerWidth }      = window;
        let     { logo }            = this.state || {}; 

        if (innerWidth <= MEDIUM_DEVICE_WIDTH && logo !== logo_sm) {

            this.setState({ logo: logo_sm });

        } else if (innerWidth > MEDIUM_DEVICE_WIDTH && logo !== logo_lg) {

            this.setState({ logo: logo_lg });

        }
    }

    componentWillMount () {
        this.updateLogo.call(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateLogo.bind(this));
    }

    componentDidUnMount() {
        window.removeEventListener('resize', this.updateLogo.bind(this));
    }

    render () {

        return (
            <nav className="navbar navbar-default" style={ styles.navbar }>
                <div className="container-fluid">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <Link className="navbar-brand" to="/">
                            <img alt="Golden State Maids" style={ styles.logo } src={ this.state.logo }/>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            { /*<li><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/about">About</Link></li> */ }
                            <li><Link to="/book" style={ styles.link }>Book Now</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default HeaderContainer;