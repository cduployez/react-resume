import { DateRangeDto } from './date-range-dto';
import { JobTypeEnum } from '../enums/job-type.enum';
import { SkillBadgeDto } from './skill-badge-dto';

export class ExperienceDto {
  /**
   * Date range of the experience
   */
  dateRange: DateRangeDto;

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
  skills: SkillBadgeDto[];

  constructor(
    dateRange: DateRangeDto,
    company: string,
    jobType: JobTypeEnum,
    project: string,
    descriptions: string[],
    skills: SkillBadgeDto[]
  ) {
    this.dateRange = dateRange;
    this.company = company;
    this.jobType = jobType;
    this.project = project;
    this.descriptions = descriptions;
    this.skills = skills;
  }
}
