import { DateRangeTypeEnum } from '../enums/date-range-type.enum';

/**
 * Object corresponding to deserialized JSON coming from the backend
 */
export interface DateRangeJson {
  /**
   * JSON-formatted begin date (formatted date or timestamp)
   */
  beginDate: string | number;

  /**
   * JSON-formatted begin date (formatted date or timestamp)
   */
  endDate: string | number | undefined | null;

  /**
   * Type of date range
   */
  dateRangeType: DateRangeTypeEnum;
}
