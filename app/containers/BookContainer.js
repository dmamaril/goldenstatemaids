import React            from 'React';
import { Link }         from 'react-router';

import Book             from '../components/Book';
import { setBooking }   from '../utils/firebaseHelpers';


class BookContainer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};
        // bind methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit (e) {

        e.preventDefault();

        return console.log(this.state);

        try {

            let booking = await setBooking(this.state.booking);

        } catch (err) {

            console.log(err);
            debugger;
        }
    } 

    handleChange ({ target }) {

        let { name, value } = target;

        console.log('changing', name, value);

        name.indexOf('stripe') === -1
            ? this.updateState('booking', name, value)
            : this.updateState('stripe', name.split('.')[1], value);
    }

    updateState (namespace, key, value) {

        let state   = this.state[namespace] || {};
        state[key]  = value;

        this.setState({ [namespace]: state });
    }

    render () {
        return (
            <Book
                onChange={ this.handleChange }
                onSubmit={ this.handleSubmit }/>
        );
    }
};

export default BookContainer;