import React from 'react';
import Payment from 'payment';
import { findDOMNode } from 'react-dom';

const styles = {
    header: {
        marginBottom: '20px'
    }
};

class CreditCardInfo extends React.Component {

    constructor (props) {

        super(props);

        this.state              = {};
        this.validateCardCVC    = this.validateCardCVC.bind(this);
        this.validateCardNumber = this.validateCardNumber.bind(this);
        this.validateCardExpiry = this.validateCardExpiry.bind(this);
    }

    componentDidMount () {

        let { number, expiry, cvc } = this.refs;

        Payment.formatCardCVC(findDOMNode(cvc));
        Payment.formatCardNumber(findDOMNode(number));
        Payment.formatCardExpiry(findDOMNode(expiry));
    }

    validateCardNumber (e) {

        let { value }   = e.target;
        let isValid     = Payment.fns.validateCardNumber(value);

        if (isValid) {
            this.props.onChange(e);
        }
    }

    validateCardExpiry (e) {

        let { value }   = e.target;
        let isValid     = Payment.fns.validateCardExpiry(value);
        
        if (isValid) {
            this.props.onChange(e);
        }
    }

    validateCardCVC (e) {

        let { value }   = e.target;
        let isValid     = Payment.fns.validateCardCVC(value);
        
        if (isValid) {
            this.props.onChange(e);
        }
    }


    render () {

        return (
            <div className="form-group">
                <div className="form-headers" style={ styles.header }>
                    <h2> Payment Details </h2>
                    <h6> Enter your card information below. You will be charged after service has been rendered. </h6>
                </div>

                <div className="col-md-12 col-sm-12"> 
                    <label> Card Number </label>
                    <input onChange={ this.validateCardNumber } required className="form-control" ref="number" name="stripe.number" type="text" placeholder="Card Number"/>
                </div>
                
                <div className="col-md-8 col-sm-12">
                    <label> Expiration Date </label>
                    <input onChange={ this.validateCardExpiry } required className="form-control" ref="expiry" name="stripe.expiry" type="text" placeholder="MM/YY"/>
                </div>

                <div className="col-md-4 col-sm-12">
                    <label> CVC </label>
                    <input onChange={ this.validateCardCVC } required className="form-control" ref="cvc" name="stripe.cvc" type="text" placeholder="CVC" minLength="3" maxLength="4"/>
                </div>
            </div>
        );
    }
};


export default CreditCardInfo;