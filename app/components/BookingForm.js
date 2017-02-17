import React            from 'react';
import CreditCardInfo   from './CreditCardInfo';
import DateTimePicker   from './DateTimePicker';
import Frequency        from './Frequency';
import Extras           from './Extras';
import Checkout         from './Checkout';

export default (props) => {

    return (
        <form className="form-horizontal booking-form" role="form" onSubmit={ props.onSubmit }>
            <div className="form-group text-center">
                <h1> Complete Your Booking </h1>
                <p> Great! Few details and we can complete your booking. </p>
            </div>

            <div className="form-group">

                <div className="form-headers">
                    <h2> Contact Information </h2>
                    <h6> This information will be used to contact you about your service </h6>
                </div>

                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } required name="first_name" type="text" className="form-control" placeholder="First Name"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } required name="last_name" type="text" className="form-control" placeholder="Last Name"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } required name="email" type="email" className="form-control" placeholder="E-Mail"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } required name="phone" type="phonenumber" className="form-control" placeholder="Phone Number"/>
                </div>
            </div>

            <div className="form-group">

                <div className="form-headers">
                    <h2> Service Address </h2>
                    <h6> Where would you like us to clean? </h6>
                </div>

                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } required name="address1" type="text" className="form-control" placeholder="Street Address"/>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <input onChange={ props.onChange } name="address2" type="text" className="form-control" placeholder="Apt # (optional)"/>
                </div>
                
                <div className="col-md-5 col-sm-12">
                    <input onChange={ props.onChange } required name="city" type="text" className="form-control" placeholder="City"/>
                </div>
                
                <div className="col-md-2 col-sm-12">
                    <input onChange={ props.onChange } required name="state" type="text" className="form-control" value="CA" disabled/>
                </div>
                
                <div className="col-md-5 col-sm-12">
                    <input onChange={ props.onChange } required name="zip" type="text" className="form-control" placeholder="Zip Code"/>
                </div>
            </div>

            <div className="form-group">

                <div className="form-headers">
                    <h2> Choose Your Service </h2>
                    <h6> Tell us about your home. </h6>
                </div>

                <div className="col-md-6 col-sm-12">
                    <select onChange={ props.onChange } required name="bed" className="form-control">
                        <option value="1"> 1 Bedroom </option>
                        <option value="2"> 2 Bedroom </option>
                        <option value="3"> 3 Bedroom </option>
                        <option value="4"> 4 Bedroom </option>
                        <option value="5"> 5 Bedroom </option>
                        <option value="6"> 6 Bedroom </option>
                    </select>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <select onChange={ props.onChange } required name="bath" className="form-control">
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

            <Extras onChange={ props.onChange } />

            <DateTimePicker onChange={ props.onChange } />

            <CreditCardInfo onChange={ props.onChange }/>

            <Frequency onChange={ props.onChange } />

            <Checkout 
                beds={ props.dates }
                total={ props.total }
                frequency={ props.frequency }
                service_date = { props.service_date }/>
        </form>
    );
};