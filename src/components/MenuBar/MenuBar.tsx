import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ConfigService } from '../../helpers/config/config-service';
import { SessionStorageService } from '../../helpers/data/session-storage.service';
import { IconsService } from '../../helpers/ui/icons.service';
import { ThemeService } from '../../helpers/ui/theme.service';
import { ThemeEnum } from '../../model/enums/theme.enum';
import { UseStateType } from '../../types/use-state-type';
import styles from './MenuBar.module.scss';

const configService: ConfigService = new ConfigService(process.env);
const iconsService: IconsService = new IconsService();

function MenuBar(): React.JSX.Element {
  const [minimized, setMinimized]: UseStateType<boolean> = useState(
    sessionStorage.menuBarMinized || false
  );
  const [themeIcon, setThemeIcon]: UseStateType<IconDefinition> = useState(
    iconsService.faMoonSolid
  );

  const { theme, setTheme } = useContext(ThemeContext);
  const themeService: ThemeService = new ThemeService(
    new SessionStorageService()
  );
  const initializedTheme = themeService.initTheme(theme);
  if (initializedTheme !== theme) {
    setTheme(initializedTheme);
  }

  function updateThemeIcon(theme: ThemeEnum): void {
    if (theme === ThemeEnum.DARK) {
      setThemeIcon(iconsService.faSunSolid);
    } else {
      setThemeIcon(iconsService.faMoonSolid);
    }
  }

  useEffect((): void => {
    updateThemeIcon(theme);
  }, [theme]);

  function nextTheme(): void {
    setTheme(themeService.nextTheme(theme));
  }

  function titleElement() {
    if (minimized) {
      return null;
    }
    return (
      <div className={styles.title}>
        <span>CV – {configService.latestRevisionYear}</span>
      </div>
    );
  }

  function minimizedButtonElement() {
    if (!minimized) {
      return (
        <span className={styles.link}>
          <FontAwesomeIcon
            icon={iconsService.faMinus}
            onClick={() => setMinimized(true)}
            className={styles.minimize}
          />
        </span>
      );
    }
    return (
      <span className={styles.link}>
        <FontAwesomeIcon
          icon={iconsService.faPlus}
          onClick={() => setMinimized(false)}
          className={styles.minimize}
        />
      </span>
    );
  }

  function placeholderElement(): React.JSX.Element | null {
    if (minimized) {
      return <div className={styles.placeholder}></div>;
    }
    return null;
  }

  return (
    <>
      <nav
        className={classNames({
          [styles.MenuBar]: true,
          [styles.minimized]: minimized
        })}>
        {titleElement()}
        <div>
          <a
            href={configService.pdfDownloadUrl}
            className={`${styles.pdf} ${styles.link}`}>
            <FontAwesomeIcon icon={iconsService.faFilePdf} />
          </a>
          <a
            href={configService.linkedInUrl}
            className={`${styles.linkedin} ${styles.link}`}>
            <FontAwesomeIcon icon={iconsService.faLinkedIn} />
          </a>
          <a
            href={configService.githubUrl}
            className={`${styles.github} ${styles.link}`}>
            <FontAwesomeIcon icon={iconsService.faGithub} />
          </a>
          <span className={styles.link}>
            <FontAwesomeIcon
              icon={themeIcon}
              onClick={nextTheme}
              className={styles.themeButton}
            />
          </span>

          {minimizedButtonElement()}
        </div>
      </nav>

      {placeholderElement()}
    </>
  );
}

export default MenuBar;
