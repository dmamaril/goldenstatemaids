import React from 'react';

const styles = {

    container: {
        userSelect: 'none',
        padding: '0'
    },

    option: {
        textDecoration: 'none',
        cursor: 'pointer',

        display: 'block',
        color: 'black',
        backgroundColor: 'white',

        padding: '15px',
        borderLeft: '1px solid #3d77ea',
        borderRight: '1px solid #3d77ea',
        borderBottom: '1px solid lightgray'
    },

    options: {
        position: 'absolute',
        width: '100%'
    }
};


/**
 * Dropdown
 *
 * props: {
 *     options: [],
 *     onSelect: Fn,
 *     default: { value, text }
 * }
 * 
 */
class Dropdown extends React.Component {
    
    constructor (props) {

        super(props);

        this.state              = { selection: props.default };
        this.handleSelect       = this.handleSelect.bind(this);
        this.toggleDropdown     = this.toggleDropdown.bind(this);
        this.handleMouseEnter   = this.handleMouseEnter.bind(this);
        this.handleMouseLeave   = this.handleMouseLeave.bind(this);
    }

    handleSelect ({ target }) {

        let { dataset, innerHTML }  = target;
        let { value }               = dataset;
        let text                    = innerHTML;

        this.state.selection = { value, text };
        this.props.onSelect(value);
    }

    toggleDropdown () {
        this.setState({ isActive: !this.state.isActive })
    }

    handleMouseEnter () {

        if (!this.state.isActive) {
            this.setState({ isActive: true });
        }

    }

    handleMouseLeave () {

        if (this.state.isActive) {
            this.setState({ isActive: false });
        }

    }

    /**
     * [createOption description]
     * @param  {[type]} options.value [description]
     * @param  {[type]} options.text  [description]
     * @param  {[type]} index         [description]
     * @param  {[type]} options       [description]
     * @return {[type]}               [description]
     */
    createOption ({ value, text }, index, options) {

        let border = {};

        if (index === options.length-1) {
            border.borderBottom = '1px solid #3d77ea';
        }

        return (
            <a className="gsm-dropdown-option" key={ index } onClick={ this.handleSelect } data-value={ value } style={ { ...styles.option, ...border } }>
                { text }
            </a>
        );
    }

    render () {

        let style = {};

        if (this.state.isActive) {

            style.border = '1px solid #3d77ea';
            style.borderBottom = '1px solid lightgray';


        } else {

            style.border = '1px solid lightgray';
        }

        return (
            <div className={ "gsm-dropdown " + this.props.class } onClick={ this.toggleDropdown } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave } style={ styles.container }>

                <a style={ { ...styles.option, ...style } }>
                    { this.state.selection.text }
                </a>

                <div className={ this.state.isActive ? 'gsm-dropdown-options-visible' : 'gsm-dropdown-options' } style={ styles.options }>
                    { this.props.options.map(this.createOption.bind(this)) }
                </div>
            </div>
        );
    }
};

export default Dropdown;