import { SkillItem } from '../../model/views/skill-item';
import { SkillEnum } from '../../model/enums/skill.enum';
import { FaSkillItemMapper } from './fa-skill-item-mapper';
import { SkillDto } from '../../model/dtos/skill-dto';
import { TextSkillItemMapper } from './text-skill-item-mapper';
import { JsSkillItemMapper } from './js-skill-item-mapper';
import { IconsService } from '../../helpers/ui/icons.service';
import { ArrayUtils } from '../../utils/array-utils';

export class SkillItemMapper {
  static readonly fromSkillBadgeDtoMapperRecord: Partial<
    Record<SkillEnum, (dto: SkillDto, iconsService: IconsService) => SkillItem>
  > = {
    JAVA: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faJava),
    SPRING: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faLeaf),
    C_PLUS_PLUS: (dto: SkillDto) =>
      TextSkillItemMapper.fromSkillDto(dto, 'C++'),
    C_SHARP: (dto: SkillDto) => TextSkillItemMapper.fromSkillDto(dto, 'C#'),
    PYTHON: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faPython),
    ANDROID: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faAndroid),
    ANGULAR: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faAngular),
    HTML: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faHtml5),
    CSS: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faCss3),
    JAVASCRIPT: (dto: SkillDto) => JsSkillItemMapper.fromSkillDto(dto, 'JS'),
    TYPESCRIPT: (dto: SkillDto) => JsSkillItemMapper.fromSkillDto(dto, 'TS'),
    GITLAB_CI: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faGitlab),
    DOCKER: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDocker),
    KUBERNETES: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDharmachakra),
    KEYCLOAK: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faKey),
    MYSQL: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faDatabase),
    MONGODB: (dto: SkillDto, iconsService: IconsService) =>
      FaSkillItemMapper.fromSkillDto(dto, iconsService.faEnvira)
  };

  static fromSkillDto(
    dto: SkillDto,
    iconsService: IconsService
  ): SkillItem | null {
    const item: SkillItem | null =
      SkillItemMapper.fromSkillBadgeDtoMapperRecord[dto.keyword]?.(
        dto,
        iconsService
      ) || null;
    if (!item) {
      console.error(`The skill '${dto.keyword}' could not be mapped`);
    }
    return item;
  }

  static fromSkillDtos(
    dtos: SkillDto[],
    iconsService: IconsService
  ): SkillItem[] {
    return (dtos || [])
      .map((dto: SkillDto) => SkillItemMapper.fromSkillDto(dto, iconsService))
      .filter(ArrayUtils.notEmpty);
  }
}
