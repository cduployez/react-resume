import styles from './Skill.module.scss';
import classNames from 'classnames';
import { SkillEnum } from '../../model/enums/skill.enum';
import iconStyles from './SkillIconColors.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActiveSkill,
  addActiveSkill,
  removeActiveSkill
} from '../../redux/actions/action';

interface SkillProps {
  title: string;
  childrenKeywords: SkillEnum[];
  skillEnum?: SkillEnum | null | undefined;
  contentElement: React.JSX.Element;
  iconClassName: string;
}

function Skill(props: SkillProps): React.JSX.Element {
  const activeSkills = useSelector(
    (state: { activeSkill: ActiveSkill }) => state.activeSkill
  );
  const dispatch = useDispatch();

  function checkActive(): boolean {
    return activeSkills?.parent === props.skillEnum;
  }

  return (
    <div
      className={styles.iconWithTitle}
      onMouseEnter={() =>
        dispatch(
          addActiveSkill({
            parent: props.skillEnum || null,
            children: props.childrenKeywords
          })
        )
      }
      onMouseLeave={() =>
        dispatch(
          removeActiveSkill({
            parent: props.skillEnum || null,
            children: props.childrenKeywords
          })
        )
      }>
      <div
        className={`${classNames({
          [styles.active]: checkActive(),
          [styles.icon]: true,
          [iconStyles.icon]: true
        })} ${iconStyles[props.iconClassName]}`}>
        {props.contentElement}
      </div>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}

export default Skill;
