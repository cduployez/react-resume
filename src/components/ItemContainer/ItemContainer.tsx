import styles from './ItemContainer.module.scss';

type ItemContainerProps = {
    contentElement: React.JSX.Element
}

function ItemContainer(props: ItemContainerProps): React.JSX.Element {
    return (
        <div className={styles.ItemContainer}>
            {props.contentElement}
        </div>
    );
}

export default ItemContainer;