import { SkillBadgeDto } from '../../model/dtos/skill-badge-dto';
import styles from './Badge.module.scss';
import {
  ActiveSkill,
  addActiveSkill,
  removeActiveSkill
} from '../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { SkillEnum } from '../../model/enums/skill.enum';

type BadgeProps = {
  badge: SkillBadgeDto | null;
};

function Badge(props: BadgeProps): React.JSX.Element {
  const activeSkills: ActiveSkill = useSelector(
    (state: { activeSkill: ActiveSkill }) => state.activeSkill
  );

  const dispatch = useDispatch();

  function checkActive(): boolean {
    return (
      activeSkills?.parents.some(
        (activeSkill: SkillEnum) => props.badge?.keywords.includes(activeSkill)
      ) || false
    );
  }

  return (
    <>
      {props.badge && (
        <span
          className={classNames({
            [styles.Badge]: true,
            [styles.active]: checkActive()
          })}
          onMouseEnter={() =>
            dispatch(
              addActiveSkill({
                parents: props.badge?.keywords || [],
                children: props.badge?.childrenKeywords || []
              })
            )
          }
          onMouseLeave={() =>
            dispatch(
              removeActiveSkill({
                parents: props.badge?.keywords || [],
                children: props.badge?.childrenKeywords || []
              })
            )
          }>
          {props.badge.title}
        </span>
      )}
    </>
  );
}

export default Badge;
