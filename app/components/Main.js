import React    from 'react';
import { Link } from 'react-router';

import Header   from './Header';
import styles   from '../styles/main';

export default ({ children }) => (
    <div>
        <Header />
        { children }
    </div>
);