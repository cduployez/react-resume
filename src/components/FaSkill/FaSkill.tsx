import styles from './FaSkill.module.scss';
import Skill from '../Skill/Skill';
import { FaSkillItem } from '../../model/views/fa-skill-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillEnum } from '../../model/enums/skill.enum';
import { SkillMessages } from '../Skill/skill-messages';

const messages: SkillMessages = new SkillMessages();

interface FaSkillProps {
  item: FaSkillItem;
}

function FaSkill(props: FaSkillProps) {
  function optionalClass(skillEnum: SkillEnum): string {
    return skillEnum ? messages.skillCssClass(skillEnum) : '';
  }

  function faIconElement(): React.JSX.Element {
    return (
      <FontAwesomeIcon
        icon={props.item.faIcon}
        className={`${styles.faIcon} ${
          styles[optionalClass(props.item.skillEnum)]
        }`}
      />
    );
  }

  return (
    <Skill
      title={props.item.title}
      contentElement={faIconElement()}
      skillEnum={props.item.skillEnum}
      childrenKeywords={props.item.childrenKeywords}
    />
  );
}

export default FaSkill;
