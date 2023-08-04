import { SkillEnum } from '../enums/skill.enum';
import { SkillTypeEnum } from '../enums/skill-type-enum';

export class SkillItem {
  title: string;

  readonly skillTypeEnum: SkillTypeEnum;

  skillEnum: SkillEnum;

  childrenKeywords: SkillEnum[];

  constructor(
    title: string,
    skillEnum: SkillEnum,
    keywords: SkillEnum[],
    skillTypeEnum: SkillTypeEnum
  ) {
    this.title = title;
    this.skillEnum = skillEnum;
    this.childrenKeywords = keywords;
    this.skillTypeEnum = skillTypeEnum;
  }
}
