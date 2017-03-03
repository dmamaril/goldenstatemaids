import React from 'react';

class HomeInfo extends React.Component {

    constructor(props) {

        super(props);
        this.state          = { bed: props.bed || 1, bath: props.bath || 1 };
        this.handleSelect   = this.handleSelect.bind(this);
    }

    handleSelect (e) {

        let { name, value } = e.target;

        this.props.onChange(e);
        this.setState({ [name] : value });
    }

    render () {
        return (
            <div className="form-group">

                <div className="form-headers">
                    <h2> Choose Your Service </h2>
                    <h6> Tell us about your home. </h6>
                </div>

                <div className="col-md-6 col-sm-12">
                    <select onChange={ this.handleSelect } value={ this.state.bed } required name="bed" className="form-control">
                        <option value="1"> 1 Bedroom </option>
                        <option value="2"> 2 Bedroom </option>
                        <option value="3"> 3 Bedroom </option>
                        <option value="4"> 4 Bedroom </option>
                        <option value="5"> 5 Bedroom </option>
                        <option value="6"> 6 Bedroom </option>
                    </select>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <select onChange={ this.handleSelect } value={ this.state.bath } required name="bath" className="form-control">
                        <option value="1"> 1 Bathroom </option>
                        <option value="1.5"> 1.5 Bathroom </option>
                        <option value="2"> 2 Bathroom </option>
                        <option value="2.5"> 2.5 Bathroom </option>
                        <option value="3"> 3 Bathroom </option>
                        <option value="3.5"> 3.5 Bathroom </option>
                        <option value="4"> 4 Bathroom </option>
                        <option value="4.5"> 4.5 Bathroom </option>
                        <option value="5"> 5 Bathroom </option>
                        <option value="5.5"> 5.5 Bathroom </option>
                        <option value="6"> 6 Bathroom </option>
                        <option value="6.5"> 6.5 Bathroom </option>
                    </select>
                </div>
            </div>
        );
    }

};

export default HomeInfo;