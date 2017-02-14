import React    from 'react';
import { Link } from 'react-router';
import styles   from '../styles/header';
import logo_sm  from '../assets/logo/logo-03.png';
import logo_lg  from '../assets/logo/logo-01.png';


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

                        <a className="navbar-brand" href="#">
                            <img alt="Golden State Maids" style={ styles.logo } src={ this.state.logo }/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Login<span className="sr-only">(current)</span></a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Book Now</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default HeaderContainer;