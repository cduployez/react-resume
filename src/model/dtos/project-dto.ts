import { SkillBadgeDto } from './skill-badge-dto';

export class ProjectDto {
  /**
   * Project name
   */
  project: string;

  /**
   * Job type
   */
  teamSize: number;

  /**
   * Descriptions of the experience
   */
  descriptions: string[];

  /**
   * Skills
   */
  skills: SkillBadgeDto[];

  constructor(
    project: string,
    teamSize: number,
    descriptions: string[],
    skills: SkillBadgeDto[]
  ) {
    this.project = project;
    this.teamSize = teamSize;
    this.descriptions = descriptions;
    this.skills = skills;
  }
}
