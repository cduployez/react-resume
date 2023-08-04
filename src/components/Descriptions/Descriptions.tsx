import styles from './Descriptions.module.scss';

type DescriptionsProps = {
  descriptions: string[];
};

function Descriptions(props: DescriptionsProps): React.JSX.Element {
  let descriptionKey: number = 0;
  return (
    <div>
      {props.descriptions.map((description: string) => (
        <p
          className={styles.description}
          key={`description-${descriptionKey++}`}>
          {description}
        </p>
      ))}
    </div>
  );
}

export default Descriptions;
