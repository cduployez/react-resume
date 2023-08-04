import { SkillEnum } from '../enums/skill.enum';

export class SkillDto {
  title: string;
  keyword: SkillEnum;
  childrenKeywords: SkillEnum[];

  constructor(
    title: string,
    keyword: SkillEnum,
    childrenKeywords: SkillEnum[]
  ) {
    this.title = title;
    this.keyword = keyword;
    this.childrenKeywords = childrenKeywords;
  }
}
