import { DateRangeJson } from './date-range-json';

/**
 * Object corresponding to deserialized JSON coming from the backend
 */
export interface FormationJson {
  /**
   * Date range
   */
  dateRange: DateRangeJson;

  /**
   * Title
   */
  title: string;

  /**
   * Descriptions
   */
  descriptions: string[];
}
