import { DateRangeDto } from '../../model/dtos/date-range-dto';
import { DateRangeJson } from '../../model/jsons/date-range-json';
import { DateUtils } from '../../utils/date-utils';

export class DateRangeDtoMapper {
  static fromDateRangeJson(json: DateRangeJson): DateRangeDto {
    return new DateRangeDto(
      DateUtils.fromDateJson(json.beginDate) || new Date(),
      DateUtils.fromDateJson(json.endDate) || new Date(),
      json.dateRangeType
    );
  }
}
