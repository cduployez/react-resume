import { DateRangeJson } from './date-range-json';
import { JobTypeEnum } from '../enums/job-type.enum';
import { SkillBadgeJson } from './skill-badge-json';

/**
 * Object corresponding to deserialized JSON coming from the backend
 */
export interface ExperienceJson {
  /**
   * Date range of the experience
   */
  dateRange: DateRangeJson;

  /**
   * Company name
   */
  company: string;

  /**
   * Job type
   */
  jobType: JobTypeEnum;

  /**
   * Project name
   */
  project: string;

  /**
   * Descriptions of the experience
   */
  descriptions: string[];

  /**
   * Skills
   */
  skills: SkillBadgeJson[];
}
