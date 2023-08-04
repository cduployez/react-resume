import styles from './JsSkill.module.scss';
import Skill from '../Skill/Skill';
import { JsSkillItem } from '../../model/views/js-skill-item';

interface JsSkillProps {
  item: JsSkillItem;
}

function JsSkill(props: JsSkillProps) {
  function textIconElement(): React.JSX.Element {
    return (
      <div className={styles.icon}>
        <span>{props.item.iconText}</span>
      </div>
    );
  }

  return (
    <Skill
      title={props.item.title}
      contentElement={textIconElement()}
      skillEnum={props.item.skillEnum}
      childrenKeywords={props.item.childrenKeywords}
    />
  );
}

export default JsSkill;
