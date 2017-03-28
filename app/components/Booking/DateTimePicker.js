import React                            from 'react';
import { findDOMNode }                  from 'react-dom';
import { getTeams,  getAvailability }   from '../../utils/firebaseHelpers.js';

const styles = {
    fontHeavy: {
        fontWeight: '700'
    }
};

const DATEPICKER_CFGS = {
    format          : 'mm-dd-yyyy',
    autoclose       : true,
    minDate         : 1,
    endDate         : '+3m',
    startDate       : '0d'
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


        let datepicker  = calendar.data('datepicker');
        this.destroy    = datepicker.destroy.bind(datepicker);
    }

    componentWillUnmount() {
        this.destroy();
    }


    getTimeSlots (date) {
        this.setState({ selection: date });
        return getAvailability(date);
    }

    createTimeSlot (time={}, index) {

        let { start_time, display_text } = time;

        if (!display_text) {
            return (<option value=""> --:-- </option>);
        }

        if (display_text === 'Fully Booked') {
            this.state.is_full = true;
        }

        return (<option value={ start_time } key={ index }> { display_text } </option>);
    }

    async handleChangeDate(e) {

        let { value } = e.target;

        // reset time selections;
        if (value.length === 0) {

            // update only if we aren't already empty;
            if (!this.state.timeslots.length) {

                // clear val;
                e.value = null;
                this.props.onChange(e);
                this.setState({ timeslots: [] });
            }

            return;
        }

        // pull data from fb db;
        let timeslots = await this.getTimeSlots(value);

        // if there are available timeslots, set 1st one as selected service_time;
        if (timeslots[0] && timeslots[0].display_text !== 'Fully Booked') {

            let mocked_el = {
                target: {
                    name    : 'service_time',
                    value   : timeslots[0].start_time
                }
            };

            this.props.onChange(mocked_el);
        }

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
                    <input required ref="calendar" type="text" name="service_date" className="form-control" placeholder="MM-DD-YYYY"/>
                </div>


                <div className="col-md-6 col-sm-12">
                    <select name="service_time" onChange={ this.props.onChange } required className="form-control">
                        { (!this.state.timeslots.length ? this.createTimeSlot() : this.state.timeslots.map(this.createTimeSlot)) }
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