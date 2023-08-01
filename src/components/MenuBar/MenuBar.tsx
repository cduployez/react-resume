import {UseStateType} from '../../types/use-state-type';
import {useState} from 'react';
import {ConfigService} from '../../helpers/config/config-service';
import classNames from 'classnames';
import styles from './MenuBar.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconsService} from '../../helpers/ui/icons.service';

const configService: ConfigService = new ConfigService(process.env);
const iconsService: IconsService = new IconsService();

function MenuBar(): React.JSX.Element {
    let [minimized, setMinimized]: UseStateType<boolean> = useState(sessionStorage.menuBarMinized || false);

    function titleElement() {
        if (minimized) {
            return null;
        }
        return <div className={styles.title}>
            <span>CV – {configService.latestRevisionYear}</span>
        </div>;
    }

    return (
        <nav className={classNames({[styles.MenuBar]: true, [styles.minimized]: minimized})}>
            {titleElement()}
            <div>
                <a href={configService.pdfDownloadUrl} className={`${styles.pdf} ${styles.link}`}>
                    <FontAwesomeIcon icon={iconsService.faFilePdf}/>
                </a>
                <a href={configService.linkedInUrl} className={`${styles.linkedin} ${styles.link}`}>
                    <FontAwesomeIcon icon={iconsService.faLinkedIn}/>
                </a>
                <a href={configService.githubUrl} className={`${styles.github} ${styles.link}`}>
                    <FontAwesomeIcon icon={iconsService.faGithub}/>
                </a>
            </div>
        </nav>
    );

}

export default MenuBar;
