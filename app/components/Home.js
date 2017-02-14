import React from 'react';
import styles from '../styles/home';
import How from './How';

class Home extends React.Component {
    render () {
        return (
            <div>
                <div className="jumbotron text-center" style={ styles.bgImg }>
                    <h1>Welcome Home</h1>
                    <h2> Maid Service Maid Easy </h2>
                </div>

                <How/>
            </div>
        );
    }
}


export default Home;