import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main             from '../components/Main';
import Home             from '../components/Home';
import About            from '../components/About';
import Thanks            from '../components/Thanks';
import HomeCleaning     from '../components/HomeCleaning';
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
            <Route path="home-cleaning" component={ HomeCleaning } />
            <Route path="about-us" component={ About } />
            <Route path="thank-you" component={ Thanks } />
        </Route>
    </Router>
);