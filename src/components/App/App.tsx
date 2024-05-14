import React from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import Experiences from '../Experiences/Experiences';
import Formations from '../Formations/Formations';
import Header from '../Header/Header';
import Hobbies from '../Hobbies/Hobbies';
import Languages from '../Languages/Languages';
import MenuBar from '../MenuBar/MenuBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import styles from './App.module.scss';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
