import styles from './Skill.module.scss';
import classNames from 'classnames';
import { SkillEnum } from '../../model/enums/skill.enum';

interface SkillProps {
  title: string;
  childrenKeywords: SkillEnum[];
  skillEnum?: SkillEnum | null | undefined;
  contentElement: React.JSX.Element;
}

function Skill(props: SkillProps): React.JSX.Element {
  // const skillEnums: SkillEnum[] = props.skillEnum ? [props.skillEnum] : [];

  return (
    <div className={styles.iconWithTitle}>
      <div
        className={classNames({
          [styles.active]: false,
          [styles.icon]: true
        })}>
        {props.contentElement}
      </div>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}

export default Skill;
