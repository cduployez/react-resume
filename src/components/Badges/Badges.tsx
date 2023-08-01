import styles from './Badges.module.scss';
import {SkillBadgeDto} from '../../model/dtos/skill-badge-dto';
import Badge from '../Badge/Badge';

type BadgesProps = {
    badges: SkillBadgeDto[];
}

function Badges(props: BadgesProps): React.JSX.Element {
    return (
        <div className={styles.Badges}>
            {props.badges.map((badge: SkillBadgeDto) => <Badge badge={badge}/>)}
        </div>
    );
}

export default Badges;