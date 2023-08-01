import {UseStateType} from '../../types/use-state-type';
import {useState} from 'react';
import {ConfigService} from '../../helpers/config/config-service';
import classNames from 'classnames';
import styles from './MenuBar.module.scss';

const configService: ConfigService = new ConfigService(process.env);

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
        </nav>
    );

}

export default MenuBar;
