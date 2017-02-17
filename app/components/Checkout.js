import React from 'react';

export default (props) => {

        return (
            <div className="form-group">

                <div className="form-group">
                    <h5> Booking Summary </h5>
                </div>

                <div className="form-group text-center">

                    <h5>
                        By clicking the Book Now button you are agreeing to our Terms of Service and Privacy Policy.
                    </h5>

                    <input type="submit" className="btn btn-lg btn-primary" value="Book Now"/>
                </div>
            </div>

        );
};