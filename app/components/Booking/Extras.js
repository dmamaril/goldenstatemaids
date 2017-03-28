import React    from 'react';
import fridge   from '../../assets/booking/fridge.png';
import oven     from '../../assets/booking/oven.png';
import green    from '../../assets/booking/green.png';
import windows  from '../../assets/booking/windows.png';
import basement from '../../assets/booking/basement.png';
import moving   from '../../assets/booking/moving.png';
import laundry  from '../../assets/booking/laundry.png';
import cabinets from '../../assets/booking/cabinets.png';

const styles = {
    header: {
        marginBottom: '20px'
    }
};

class Extras extends React.Component {

    constructor (props) {

        super(props);

        this.state          = { options: {} };
        this.handleChange   = this.handleChange.bind(this);
        this.createExtras   = this.createExtras.bind(this);
    }

    handleChange (e) {

        let opts        = this.state.options;
        let { value }   = e.target;
        opts[value]     = !opts[value];

        this.setState({ options: opts });

        // mock el attrs
        let target  = { name: 'options', value: opts };
        this.props.onChange({ target });
    }

    createExtras ({ id, icon, text }, index) {

        let isChecked = (this.state.options && this.state.options[id] ? 'checked' : '');

        return (
                <div className="col-md-3 col-sm-6 col-xs-6 booking-option" key={ index }>

                    <label className={ isChecked }>
                        <input onChange={ this.handleChange } type="checkbox" className="form-control" value={ id }/>
                        <img className={ isChecked } src={ icon }/>
                    </label>

                    <p className="text-capitalize"> { text } </p>
                </div>
        );
    }

    render () {
        return (
            <div className="form-group booking-options">

                <div className="form-headers" style={ styles.header }>
                    <h2> Select Extras </h2>
                    <h6> Adds extra time. </h6>
                </div>

                { this.props.extras.map(this.createExtras) }
            </div>
        );
    }
};

Extras.defaultProps = {
    extras: [
        {
            id: 'fridge',
            icon: fridge,
            text: 'fridge'
        },
        {
            id: 'oven',
            icon: oven,
            text: 'inside oven'
        },
        {
            id: 'laundry',
            icon: laundry,
            text: 'load laundry'
        },
        {
            id: 'cabinets',
            icon: cabinets,
            text: 'inside cabinets'
        }
        // {
        //     id: 'windows',
        //     icon: windows,
        //     text: 'inside windows'
        // },
        // {
        //     id: 'green',
        //     icon: green,
        //     text: 'green cleaning'
        // },
        // {
        //     id: 'basement',
        //     icon: basement,
        //     text: 'basement'
        // },
        // {
        //     id: 'moving',
        //     icon: moving,
        //     text: 'move in/move out'
        // },
    ]
}

export default Extras;