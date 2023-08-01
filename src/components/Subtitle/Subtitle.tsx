import styles from './Subtitle.module.scss';

type SubtitleProps = {
    subtitle: string
}

function Subtitle(props: SubtitleProps): React.JSX.Element {
    return (
        <div>
            <span className={styles.subtitle}>{props.subtitle}</span>
        </div>
    );
}

export default Subtitle;