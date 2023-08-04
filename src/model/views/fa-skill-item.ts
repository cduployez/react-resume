import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SkillEnum } from '../enums/skill.enum';
import { SkillTypeEnum } from '../enums/skill-type-enum';
import { SkillItem } from './skill-item';

export class FaSkillItem extends SkillItem {
  faIcon: IconDefinition;

  constructor(
    title: string,
    skillEnum: SkillEnum,
    childrenKeywords: SkillEnum[],
    faIcon: IconDefinition
  ) {
    super(title, skillEnum, childrenKeywords, SkillTypeEnum.FA);
    this.faIcon = faIcon;
  }
}
