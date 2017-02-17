import React                from 'react';
import { findDOMNode }      from 'react-dom';
import styles               from '../styles/datepicker.js';
import { getAvailability }  from '../utils/firebaseHelpers.js';

const DATEPICKER_CFGS = {
    autoclose   : true,
    minDate     : new Date(),
    format      : 'mm-dd-yyyy'
};

class DateTimePicker extends React.Component {

    constructor (props) {

        super(props);

        this.state              = { timeslots: [] };
        this.getTimeSlots       = this.getTimeSlots.bind(this);
        this.createTimeSlot     = this.createTimeSlot.bind(this);
        this.handleChangeDate   = this.handleChangeDate.bind(this);
    }


    componentDidMount () {

        let { calendar } = this.refs;

        calendar = $(calendar).datepicker(DATEPICKER_CFGS);

        calendar.on('clearDate', this.handleChangeDate)
                .on('changeDate', this.handleChangeDate);

        calendar = calendar.data('datepicker');

        this.clearDates = calendar.clearDates.bind(calendar);
        this.destroy    = calendar.destroy.bind(calendar);
    }


    componentWillUnmount() {
        this.destroy();
    }


    getTimeSlots (date) {
        this.setState({ selection: date });
        return getAvailability(date);
    }


    clearDates () {
        this.clearDates();
    }

    createTimeSlot (time={}, index) {

        let { value, display_text } = time;

        if (!display_text) {
            return (<option value=""> --:-- </option> );
        }

        if (display_text === 'Fully Booked') {
            this.state.is_full = true;
        }

        return (<option value={ value } key={ index }> { display_text } </option>);
    }

    async handleChangeDate(e) {

        let { value } = e.target;

        // reset time selections;
        if (value.length === 0) {
            return this.setState({ timeslots: [] });
        }

        // pull data from fb db;
        let timeslots = await this.getTimeSlots(value);

        this.props.onChange(e);
        this.setState({ timeslots });
    }

    render () {
        return (
            <div className="form-group">
                <div className="form-headers">
                    <h2> When would you like us to come? </h2>
                </div>

                <div className="col-md-6 col-sm-12 date" id="datepicker">
                    <input ref="calendar" type="text" className="form-control" placeholder="MM-DD-YYYY"/>
                </div>


                <div className="col-md-6 col-sm-12">
                    <select onChange={ this.props.onChange } required className="form-control">
                        { 
                            (!this.state.timeslots.length
                                ? this.createTimeSlot()
                                : this.state.timeslots.map(this.createTimeSlot))
                        }
                    </select>
                </div>

                <div className={ "col-md-12 text-center " + (this.state.is_full ? 'visible' : 'hidden') }>
                    <h4 style={ styles.fontHeavy }>
                        Due to high demand, there are no available times for { this.state.selection }.
                    </h4>
                    <h4 style={ styles.fontHeavy }>
                        Please choose a different date.
                    </h4>
                </div>
            </div>
        );
    }
};


export default DateTimePicker;