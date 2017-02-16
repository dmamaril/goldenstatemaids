import React            from 'React';
import { Link }         from 'react-router';

import Book             from '../components/Book';
import { setBooking }   from '../utils/firebaseHelpers';


class BookContainer extends React.Component {

    constructor(props) {

        super(props);

        // bind methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit (e) {

        e.preventDefault();

        try {

            let booking = await setBooking(this.state);

            debugger;

        } catch (err) {

            console.log(err);
            debugger;
        }
    } 

    handleChange ({ target }) {

        let { name, value } = target;

        console.log('updated', name, value);
        this.setState({ [name]: value });
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