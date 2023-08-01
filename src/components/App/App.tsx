import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Experiences from '../Experiences/Experiences';

function App(): React.JSX.Element {
    return (
        <>
            <MenuBar/>
            <main className={styles.App} data-testid="app-main">
                <Header/>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <Experiences/>
                    </div>
                    <div className={styles.column}>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
