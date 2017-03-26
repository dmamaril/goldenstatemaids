import React            from 'react';
import { Link }         from 'react-router';
import logo_white_sm    from '../assets/logo/logo-04.png';
import logo_white_lg    from '../assets/logo/logo-02.png';
import logo_blue_sm     from '../assets/logo/logo-03.png';
import logo_blue_lg     from '../assets/logo/logo-01.png';

const styles = {

    logo: {
        height: '50px'
    },

    navbar: {
        margin: '0',
        padding: '25px 5%',
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },

    white: {
        color: 'white'
    },

    blue: {
        color: '#14374C'
    },

    bookBtn: {
        color: '#3d77ea',
        margin: '5px 0',
        borderRadius: '14px',
        padding: '10px 20px',
        border: '1px solid #3d77ea',
    },

    links: {
        padding: '0',
        margin: '15px',
        fontWeight: '400',
        fontSize: '14px'
    },

    noPad: {
        padding: '0'
    }
};

const themes = {
    blue: {
        logo_lg: logo_blue_lg,
        logo_sm: logo_blue_sm
    },
    white: {
        logo_lg: logo_white_lg,
        logo_sm: logo_white_sm
    }
};

/**
 * 
 * Bind non-react fns to this in order to retain ctx
 * https://github.com/goatslacker/alt/issues/283
 * 
 */
class HeaderContainer extends React.Component {

    constructor (props) {
        super(props);

        this.state = { toggled: 0 };
        this.toggleBookBtnStyle = this.toggleBookBtnStyle.bind(this);
    }


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

        let { logo_sm, logo_lg } = themes[this.props.theme];

        if (innerWidth <= MEDIUM_DEVICE_WIDTH && logo !== logo_sm) {

            this.setState({ logo: logo_sm });

        } else if (innerWidth > MEDIUM_DEVICE_WIDTH && logo !== logo_lg) {

            this.setState({ logo: logo_lg });

        }
    }

    toggleBookBtnStyle (toggled) {
        return () => this.setState({ toggled });
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

        let bookBtn     = { ...styles.bookBtn };
        let link_styles = { ...styles.links, ...styles.blue };

        if (this.state.toggled) {
            bookBtn.color = 'white';
            bookBtn.backgroundColor = '#3d77ea';

        }

        return (
            <nav className="navbar navbar-default" style={ styles.navbar }>
                <div className="container col-md-4">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <Link className="navbar-brand" to="/" style={ styles.noPad }>
                            <img alt="Golden State Maids" style={ styles.logo } src={ this.state.logo }/>
                        </Link>
                    </div>

                    <div className="col-md-8 collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1" style={ styles.noPad }>
                        <ul className="nav navbar-nav">
                            <li><Link className="btn" to="/cleaning" style={ link_styles }>Home Cleaning</Link></li>
                            <li><Link className="btn" to="/about" style={ link_styles }>About Us</Link></li>
                            <li><Link className="btn" to="/cleaning#checklist" style={ link_styles }>50pt Checklist</Link></li>
                            <li>
                                <Link to="/book" onMouseEnter={ this.toggleBookBtnStyle(1) } onMouseLeave={ this.toggleBookBtnStyle(0) } style={ bookBtn }>Book Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

HeaderContainer.defaultProps = {
    theme: 'blue'
}

export default HeaderContainer;