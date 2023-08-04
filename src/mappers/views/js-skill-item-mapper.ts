import { SkillDto } from '../../model/dtos/skill-dto';
import { JsSkillItem } from '../../model/views/js-skill-item';

export class JsSkillItemMapper {
  static fromSkillDto(dto: SkillDto, iconText: string): JsSkillItem {
    return new JsSkillItem(
      dto.title,
      dto.keyword,
      dto.childrenKeywords,
      iconText
    );
  }
}
