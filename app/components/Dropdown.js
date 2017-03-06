import React from 'react';

const styles = {

    container: {
        float: 'left',
        userSelect: 'none'
    },

    option: {
        display: 'block',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'white',
        padding: '15px',
        borderLeft: '1px solid blue',
        borderRight: '1px solid blue',
        borderBottom: '1px solid lightgray'
    },

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

        this.state          = { selection: props.default };
        this.handleSelect   = this.handleSelect.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
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
            border.borderBottom = '1px solid blue';
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

            style.border = '1px solid blue';
            style.borderBottom = '1px solid lightgray';


        } else {

            style.border = '1px solid lightgray';
        }

        return (
            <div className="gsm-dropdown" onClick={ this.toggleDropdown } style={ { ...styles.container, ...this.props.styles } }>

                <a style={ { ...styles.option, ...style } }>
                    { this.state.selection.text }
                </a>

                <div className={ this.state.isActive ? 'gsm-dropdown-options-visible' : 'gsm-dropdown-options' }>
                    { this.props.options.map(this.createOption.bind(this)) }
                </div>
            </div>
        );
    }
};

export default Dropdown;