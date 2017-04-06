import React from 'react';

const styles = {
    input: {
        height: '60px',
        borderRadius: 0,
        fontSize: '18px',
        border: '1px solid rgba(0, 0, 0, 0.1)'
    }
};


class Customer extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="form-group">

                <div className="form-headers">
                    <h2> Contact Information </h2>
                    <h6> This information will be used to contact you about your service </h6>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h5> FIRST NAME </h5>
                    <input style={ styles.input } onChange={ this.props.onChange } required name="first_name" type="text" className="form-control"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <h5> LAST NAME </h5>
                    <input style={ styles.input } onChange={ this.props.onChange } required name="last_name" type="text" className="form-control"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <h5> EMAIL </h5>
                    <input style={ styles.input } onChange={ this.props.onChange } required name="email" type="email" className="form-control"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <h5> PHONE </h5>
                    <input style={ styles.input } onChange={ this.props.onChange } required name="phone" type="phonenumber" className="form-control"/>
                </div>
            </div>
        );
    }
};

export default Customer;