import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';

function App(): React.JSX.Element {
    return (
        <>
            <MenuBar/>
            <main className={styles.App} data-testid="app-main">
                <Header/>
            </main>
        </>
    );
}

export default App;
