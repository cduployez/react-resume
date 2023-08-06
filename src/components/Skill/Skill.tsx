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
import { SkillMessages } from './skill-messages';

interface SkillProps {
  title: string;
  childrenKeywords: SkillEnum[];
  skillEnum?: SkillEnum | null | undefined;
  contentElement: React.JSX.Element;
}

const messages: SkillMessages = new SkillMessages();

function Skill(props: SkillProps): React.JSX.Element {
  const skillEnums: SkillEnum[] = props.skillEnum ? [props.skillEnum] : [];

  const activeSkills: ActiveSkill = useSelector(
    (state: { activeSkill: ActiveSkill }) => state.activeSkill
  );

  const dispatch = useDispatch();

  function checkActive(): boolean {
    return activeSkills?.parents.some(
      activeSkill => activeSkill === props.skillEnum
    );
  }

  function checkChildrenActive(): boolean {
    return activeSkills?.children.some(
      (activeChildSkill: SkillEnum) => activeChildSkill === props.skillEnum
    );
  }

  return (
    <div
      className={styles.iconWithTitle}
      onMouseEnter={() =>
        dispatch(
          addActiveSkill({
            parents: skillEnums,
            children: props.childrenKeywords
          })
        )
      }
      onMouseLeave={() =>
        dispatch(
          removeActiveSkill({
            parents: skillEnums,
            children: props.childrenKeywords
          })
        )
      }>
      <div
        className={classNames({
          [styles.active]: checkActive() || checkChildrenActive(),
          [iconStyles.active]: checkActive() || checkChildrenActive(),
          [styles.icon]: true,
          [iconStyles.icon]: true,
          [iconStyles[messages.skillCssClass(props.skillEnum || null)]]: true
        })}>
        {props.contentElement}
      </div>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}

export default Skill;
