import { SkillEnum } from '../enums/skill.enum';
import { SkillTypeEnum } from '../enums/skill-type-enum';
import { SkillItem } from './skill-item';

export class TextSkillItem extends SkillItem {
  iconText: string;

  constructor(
    title: string,
    skillEnum: SkillEnum,
    keywords: SkillEnum[],
    iconText: string
  ) {
    super(title, skillEnum, keywords, SkillTypeEnum.TEXT);
    this.iconText = iconText;
  }
}
