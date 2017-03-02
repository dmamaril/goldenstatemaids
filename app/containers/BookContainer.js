import React            from 'React';
import { Link }         from 'react-router';

import Book             from '../components/Book';
import { setBooking }   from '../utils/firebaseHelpers';


class BookContainer extends React.Component {

    constructor(props) {

        super(props);

        let { query }           = props.location;
        let { bed, bath, freq } = query;

        this.state = { bed: bed || 1, bath: bath || 1, freq: freq || 2 };

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
                onSubmit={ this.handleSubmit }
                bed={ this.props.location.query.bed }
                bath={ this.props.location.query.bath }
                freq={ this.props.location.query.freq } />
        );
    }
};

export default BookContainer;