import { SkillBadgeDto } from '../../model/dtos/skill-badge-dto';
import styles from './Badge.module.scss';

type BadgeProps = {
  badge: SkillBadgeDto | null;
};

function Badge(props: BadgeProps): React.JSX.Element {
  return (
    <>
      {props.badge && <span className={styles.Badge}>{props.badge.title}</span>}
    </>
  );
}

export default Badge;
