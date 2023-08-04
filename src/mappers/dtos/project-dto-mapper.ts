import {SkillBadgeDtoMapper} from './skill-badge-dto-mapper';
import {ProjectJson} from '../../model/jsons/project-json';
import {ProjectDto} from '../../model/dtos/project-dto';

export class ProjectDtoMapper {
    static fromProjectJson(json: ProjectJson): ProjectDto {
        return new ProjectDto(
            json.project,
            json.teamSize,
            json.descriptions,
            SkillBadgeDtoMapper.fromSkillBadgeJsons(json.skills)
        );
    }

    static fromProjectJsons(jsons: ProjectJson[]): ProjectDto[] {
        return jsons.map(ProjectDtoMapper.fromProjectJson);
    }
}
