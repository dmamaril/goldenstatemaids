import React    from 'react';
import ReactDOM from 'react-dom';
import routes   from './configs/routes';
import styles   from './styles/styles.css';
import icomoon  from './assets/icomoon/styles.css'

window._isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
ReactDOM.render(routes, document.getElementById('root'));