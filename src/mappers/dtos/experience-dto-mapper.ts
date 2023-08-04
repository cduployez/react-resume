import { ExperienceDto } from '../../model/dtos/experience-dto';
import { ExperienceJson } from '../../model/jsons/experience-json';
import { DateRangeDtoMapper } from './date-range-dto-mapper';
import { SkillBadgeDtoMapper } from './skill-badge-dto-mapper';

export class ExperienceDtoMapper {
  static fromExperienceJson(json: ExperienceJson): ExperienceDto {
    return new ExperienceDto(
      DateRangeDtoMapper.fromDateRangeJson(json.dateRange),
      json.company,
      json.jobType,
      json.project,
      json.descriptions,
      SkillBadgeDtoMapper.fromSkillBadgeJsons(json.skills)
    );
  }

  static fromExperienceJsons(jsons: ExperienceJson[]): ExperienceDto[] {
    return jsons.map(ExperienceDtoMapper.fromExperienceJson);
  }
}
