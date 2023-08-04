import { SkillBadgeJson } from './skill-badge-json';

export interface ProjectJson {
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
  skills: SkillBadgeJson[];
}
