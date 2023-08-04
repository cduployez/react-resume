import { SkillGroupDto } from '../../model/dtos/skill-group-dto';
import { SkillGroupJson } from '../../model/jsons/skill-group-json';
import { SkillDtoMapper } from './skill-dto-mapper';

export class SkillGroupDtoMapper {
  static fromSkillGroupJson(json: SkillGroupJson): SkillGroupDto {
    return new SkillGroupDto(
      json.title,
      SkillDtoMapper.fromSkillJsons(json.skills)
    );
  }

  static fromSkillGroupJsons(jsons: SkillGroupJson[]): SkillGroupDto[] {
    return jsons.map(SkillGroupDtoMapper.fromSkillGroupJson);
  }
}
