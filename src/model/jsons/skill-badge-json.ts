import { SkillEnum } from '../enums/skill.enum';

export interface SkillBadgeJson {
  title: string;
  keywords: SkillEnum[];
  childrenKeywords: SkillEnum[];
}
