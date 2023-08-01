import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';


function App() {
    return (
        <main className={styles.App} data-testid="app-main">
            <Header/>
        </main>
    );
}

export default App;
