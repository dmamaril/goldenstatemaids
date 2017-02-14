import React    from 'react';
import { Link } from 'react-router';
import Header   from './Header';

export default ({ children }) => (
    <div className="container">
        <Header />
        { children }
    </div>
);