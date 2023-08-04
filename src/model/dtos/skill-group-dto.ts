import { SkillDto } from './skill-dto';

export class SkillGroupDto {
  title: string;
  skills: SkillDto[];

  constructor(title: string, skills: SkillDto[]) {
    this.title = title;
    this.skills = skills;
  }
}
