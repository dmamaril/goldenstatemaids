import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main             from '../components/Main';
import Home             from '../components/Home';
import About            from '../components/About';
import Cleaning         from '../components/Cleaning';
import BookContainer    from '../containers/BookContainer';

const handleUpdate = () => {
    
    let { hash } = window.location;

    // if there are multiple hashes,
    // let component scroll to appropriate anchor
    // else scrollTop on route change
    if (hash.indexOf('#') === hash.lastIndexOf('#')) {
        window.scrollTo(0, 0);
    }
};

export default (
    <Router history={ hashHistory } onUpdate={ handleUpdate }>
        <Route path='/' component={ Main }>
            <IndexRoute component={ Home } />
            <Route path="book" component={ BookContainer } />
            <Route path="cleaning" component={ Cleaning } />
            <Route path="about-us" component={ About } />
        </Route>
    </Router>
);