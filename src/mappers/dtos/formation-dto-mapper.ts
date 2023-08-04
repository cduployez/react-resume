import { DateRangeDtoMapper } from './date-range-dto-mapper';
import { FormationDto } from '../../model/dtos/formation-dto';
import { FormationJson } from '../../model/jsons/formation-json';

export class FormationDtoMapper {
  static fromFormationJson(json: FormationJson): FormationDto {
    return new FormationDto(
      DateRangeDtoMapper.fromDateRangeJson(json.dateRange),
      json.title,
      json.descriptions
    );
  }

  static fromFormationJsons(jsons: FormationJson[]): FormationDto[] {
    return jsons.map(FormationDtoMapper.fromFormationJson);
  }
}
