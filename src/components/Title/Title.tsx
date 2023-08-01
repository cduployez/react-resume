import styles from './Title.module.scss';

type TitleProps = {
    title: string;
    detail: string | null;
}

function Title(props: TitleProps): React.JSX.Element {

    return (
        <>
            <span className={styles.title}>{props.title}</span>
            {props.detail && <span className={styles.detail}>{props.detail}</span>}
        </>
    );
}

export default Title;