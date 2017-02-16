import React from 'react';

class DateTimePicker extends React.Component {

    constructor (props) {

        super(props);

        this.state = {};
    }

    /**
     * [componentDidMount description]
     *
     * ONCHANGE IS NOT TRIGGERING
     * 
     * @return {[type]} [description]
     */
    componentDidMount () {
        $('#datepicker').datepicker();
        $('#timepicker').timepicker();
    }

    render () {

        return (
            <div className="form-group">
                <div className="form-headers">
                    <h2> When would you like us to come? </h2>
                </div>

                
                <div className="col-md-6 col-sm-12 input-group date" id="datepicker">
                    <input onChange={ this.props.onChange } type="text" className="form-control" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>

                <div className="col-md-6 col-sm-12 input-group bootstrap-timepicker timepicker">
                    <input onChange={ this.props.onChange } id="timepicker" type="text" className="form-control input-small"/>
                    <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
                </div>
            </div>
        );
    }
};


export default DateTimePicker;