import React from 'react';

class Frequency extends React.Component {

    constructor (props) {

        super(props);

        this.state          = { frequency: "2" };
        this.handleChange   = this.handleChange.bind(this);
    }

    handleChange (e) {

        let { value } = e.target;

        this.props.onChange(e);
        this.setState({ frequency: value });
    }

    render () {
        return (
            <div className="form-group booking-frequency">

                <div className="form-headers">
                    <h2> How often? </h2>
                    <h6> It’s all about matching you with the perfect cleaner for your home. Scheduling is flexible. Cancel or reschedule anytime. </h6>
                </div>

                <div className="col-md-3 col-sm-12">
                    <label className={ (this.state.frequency === "0" ? 'checked' : '') }>
                        <input onChange={ this.handleChange } name="frequency" type="radio" className="form-control" value="0"/>
                        1 time service
                    </label>
                </div>
                
                <div className="col-md-3 col-sm-12">
                    <label className={ (this.state.frequency === "4" ? 'checked' : '') }>
                        <input onChange={ this.handleChange } name="frequency" type="radio" className="form-control" value="4"/>
                        Every week
                    </label>
                </div>
                
                <div className="col-md-3 col-sm-12">
                    <label className={ (this.state.frequency === "2" ? 'checked' : '') }>
                        <input onChange={ this.handleChange } name="frequency" type="radio" className="form-control" value="2" checked/>
                        Every 2 weeks
                    </label>
                </div>
                
                <div className="col-md-3 col-sm-12">
                    <label className={ (this.state.frequency === "1" ? 'checked' : '') }>
                        <input onChange={ this.handleChange } name="frequency" type="radio" className="form-control" value="1"/>
                        Every month
                    </label>
                </div>
            </div>
        );
    }
};

export default Frequency;