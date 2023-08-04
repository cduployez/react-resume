import styles from './FaSkill.module.scss';
import Skill from '../Skill/Skill';
import { FaSkillItem } from '../../model/views/fa-skill-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillMessages } from '../Skill/skill-messages';

const messages: SkillMessages = new SkillMessages();

interface FaSkillProps {
  item: FaSkillItem;
}

function FaSkill(props: FaSkillProps) {
  function faIconElement(): React.JSX.Element {
    return (
      <span
        className={`${styles.faIcon} ${
          styles[messages.optionalClass(props.item.skillEnum)]
        }`}>
        <FontAwesomeIcon icon={props.item.faIcon} />
      </span>
    );
  }

  return (
    <Skill
      title={props.item.title}
      contentElement={faIconElement()}
      skillEnum={props.item.skillEnum}
      childrenKeywords={props.item.childrenKeywords}
      iconClassName={messages.optionalClass(props.item.skillEnum)}
    />
  );
}

export default FaSkill;
