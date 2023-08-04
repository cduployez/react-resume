import { SkillEnum } from '../enums/skill.enum';

export interface SkillJson {
  title: string;
  keyword: SkillEnum;
  childrenKeywords: SkillEnum[];
}
