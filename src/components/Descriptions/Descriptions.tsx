import styles from './Descriptions.module.scss';

type DescriptionsProps = {
    descriptions: string[];
}

function Descriptions(props: DescriptionsProps): React.JSX.Element {
    return (
        <div>
            {props.descriptions.map((description: string) => <p className={styles.description}>{description}</p>)}
        </div>
    );
}

export default Descriptions;