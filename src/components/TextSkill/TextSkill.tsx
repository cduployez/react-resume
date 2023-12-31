import styles from './TextSkill.module.scss';
import Skill from '../Skill/Skill';
import { TextSkillItem } from '../../model/views/text-skill-item';

interface TextSkillProps {
  item: TextSkillItem;
}

function TextSkill(props: TextSkillProps) {
  function textSkillElement(): React.JSX.Element {
    return <span className={styles.text}>{props.item.iconText}</span>;
  }

  return (
    <Skill
      title={props.item.title}
      skillEnum={props.item.skillEnum}
      contentElement={textSkillElement()}
      childrenKeywords={props.item.childrenKeywords}
    />
  );
}

export default TextSkill;
