import { SkillGroupDto } from '../../model/dtos/skill-group-dto';
import { SkillGroup } from '../../model/views/skill-group';
import { SkillItemMapper } from './skill-item-mapper';
import { IconsService } from '../../helpers/ui/icons.service';

export class SkillGroupMapper {
  static fromSkillGroupDto(
    dto: SkillGroupDto,
    iconsService: IconsService
  ): SkillGroup {
    const group: SkillGroup = new SkillGroup();
    group.title = dto.title;
    group.skills = SkillItemMapper.fromSkillDtos(dto.skills, iconsService);
    return group;
  }

  static fromSkillGroupDtos(
    dtos: SkillGroupDto[],
    iconsService: IconsService
  ): SkillGroup[] {
    return dtos.map(dto =>
      SkillGroupMapper.fromSkillGroupDto(dto, iconsService)
    );
  }
}
