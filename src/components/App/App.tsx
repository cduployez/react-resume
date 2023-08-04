import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Experiences from '../Experiences/Experiences';
import Formations from '../Formations/Formations';
import Languages from '../Languages/Languages';

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
                        <Formations/>
                        <Languages/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
