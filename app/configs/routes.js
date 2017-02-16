import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.js';
import Home from '../components/Home.js';
import BookContainer from '../containers/BookContainer';

export default (
    <Router history={ hashHistory }>
        <Route path='/' component={ Main }>
            <IndexRoute component={ Home } />
            <Route path="book" component={ BookContainer } />
        </Route>
    </Router>
);