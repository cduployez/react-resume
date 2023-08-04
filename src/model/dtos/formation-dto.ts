import {DateRangeDto} from './date-range-dto';

export class FormationDto {
    /**
     * Date range
     */
    dateRange: DateRangeDto;

    /**
     * Title
     */
    title: string;

    /**
     * Descriptions
     */
    descriptions: string[];

    constructor(dateRange: DateRangeDto, title: string, descriptions: string[]) {
        this.dateRange = dateRange;
        this.title = title;
        this.descriptions = descriptions;
    }
}
