import React from 'react';

const styles = {
    header: {
        marginBottom: '20px'
    },

    discount: {
        textAlign: 'center',
        fontWeight: '300',
        opacity: '0.5'
    }
};

class Frequency extends React.Component {

    constructor (props) {

        super(props);

        // stringify initial props to apply proper class;
        this.state          = { frequency: (props.freq || '2').toString() };
        this.handleChange   = this.handleChange.bind(this);
        this.createOptions  = this.createOptions.bind(this);
    }

    handleChange (e) {

        let { value } = e.target;

        this.props.onChange(e);
        this.setState({ frequency: value });
    }

    createOptions (freq, i) {

        let { label, discount, value } = freq;

        return (
            <div className="col-md-3 col-sm-12" key={ i }>
                <label className={ (this.state.frequency === value ? 'checked' : '') }>
                    <input onChange={ this.handleChange } name="frequency" type="radio" className="form-control" value={ value }/>
                    { label }
                </label>

                <p style={ styles.discount }>
                    <i>{ discount }</i>
                </p>
            </div>
        );
    }

    render () {
        return (
            <div className="form-group booking-frequency">

                <div className="form-headers" style={ styles.header }>
                    <h2> How often? </h2>
                    <h6> It’s all about matching you with the perfect cleaner for your home. Scheduling is flexible. Cancel or reschedule anytime. </h6>
                </div>

                { this.props.options.map(this.createOptions) }
            </div>
        );
    }
};

Frequency.defaultProps = {
    options: [
        {
            label: 'One-Time',
            value: '0'
        },
        {
            label: 'Weekly',
            discount: '20% Off',
            value: '4'
        },
        {
            label: 'Every 2 Weeks',
            discount: '15% Off',
            value: '2'
        },
        {
            label: 'Every Month',
            discount: '10% Off',
            value: '1'
        }
    ]
}

export default Frequency;