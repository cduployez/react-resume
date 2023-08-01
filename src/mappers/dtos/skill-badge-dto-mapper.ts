import {SkillBadgeDto} from '../../model/dtos/skill-badge-dto';
import {SkillBadgeJson} from '../../model/jsons/skill-badge-json';

export class SkillBadgeDtoMapper {
    static fromSkillBadgeJson(json: SkillBadgeJson): SkillBadgeDto {
        return new SkillBadgeDto(json.title, json.keywords, json.childrenKeywords);
    }

    static fromSkillBadgeJsons(jsons: SkillBadgeJson[]): SkillBadgeDto[] {
        return jsons.map(SkillBadgeDtoMapper.fromSkillBadgeJson);
    }
}
