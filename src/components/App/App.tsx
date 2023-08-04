import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Experiences from '../Experiences/Experiences';
import Formations from '../Formations/Formations';
import Languages from '../Languages/Languages';
import Hobbies from '../Hobbies/Hobbies';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function App(): React.JSX.Element {
  return (
    <>
      <MenuBar />
      <main className={styles.App} data-testid="app-main">
        <Header />
        <div className={styles.columns}>
          <div className={styles.column}>
            <Experiences />
            <Projects />
          </div>
          <div className={styles.column}>
            <Formations />
            <Skills />
            <Languages />
            <Hobbies />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
