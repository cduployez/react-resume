import { FaSkillItem } from '../../model/views/fa-skill-item';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SkillDto } from '../../model/dtos/skill-dto';

export class FaSkillItemMapper {
  static fromSkillDto(
    dto: SkillDto,
    iconDefinition: IconDefinition
  ): FaSkillItem {
    return new FaSkillItem(
      dto.title,
      dto.keyword,
      dto.childrenKeywords,
      iconDefinition
    );
  }
}
