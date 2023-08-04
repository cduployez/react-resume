import { SkillDto } from '../../model/dtos/skill-dto';
import { SkillJson } from '../../model/jsons/skill-json';

export class SkillDtoMapper {
  static fromSkillJson(json: SkillJson): SkillDto {
    return new SkillDto(json.title, json.keyword, json.childrenKeywords);
  }

  static fromSkillJsons(jsons: SkillJson[]): SkillDto[] {
    return jsons.map(SkillDtoMapper.fromSkillJson);
  }
}
