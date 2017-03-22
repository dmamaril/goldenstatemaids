import React    from 'react';
import { Link } from 'react-router';
import Header   from './Header';
import Favicon  from 'react-favicon';
import icon     from '../assets/logo/logo-03.png';

export default ({ children }) => (
    <div>

        <Favicon url={ icon }/>
        { children }
    </div>
);