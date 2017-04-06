import React from 'react';


const styles = {
    option: {
        lineHeight: '60px',
        height: '60px',
        textAlign: 'center',
        border: '1px solid rgba(0, 0, 0, 0.1)'
    },

    optionContainer: {
        margin: '25px auto'
    }
}

class HomeInfo extends React.Component {

    constructor(props) {

        super(props);

        this.handleSelect       = this.handleSelect.bind(this);
        this.createBoxOption    = this.createBoxOption.bind(this);
        this.state              = { bed: props.bed || 1, bath: props.bath || 1 };
    }

    handleSelect ({ target }) {

        let { value, name } = target.dataset; 
        
        value = Number(value);

        // mock event;
        target = { name, value };
        
        this.props.onChange({ target });
        this.setState({ [name] : value });
    }

    createBoxOption (name) {
        return (n, i) => {

            let style = { ...styles.option };

            if (i !== 0) {
                style.borderLeft = 'none';
            }

            if (this.state[name] === n) {
                style.backgroundColor = '#3d77ea';
                style.color = 'white';
            }

            return (
                <div className="col-xs-2" style={ style } onClick={ this.handleSelect } key={ i } data-name={ name } data-value={ n }>
                    { n }
                </div>
            );
        };
    }

    render () {
        return (
            <div className="form-group">

                <div className="form-headers">
                    <h2> Choose Your Service </h2>
                </div>

                <div className="container" style={ styles.optionContainer } >

                    <h5> NUMBER OF BEDROOMS </h5>

                    <div style={ styles.optionGroup }>
                        { this.props.options.map(this.createBoxOption('bed')) }
                    </div>

                </div>

                <div className="container" style={ styles.optionContainer } >

                    <h5> NUMBER OF BATHROOMS </h5>

                    <div style={ styles.optionGroup }>
                        { this.props.options.map(this.createBoxOption('bath')) }
                    </div>

                </div>
            </div>
        );
    }

};

HomeInfo.defaultProps = {
    options: [1,2,3,4,5,6]
};

export default HomeInfo;