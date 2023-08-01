import {DateRangeTypeEnum} from '../enums/date-range-type.enum';

export class DateRangeDto {
    /**
     * Format utilisé par DatePipe
     */
    readonly datePipeFormat: 'MMMM yyyy' | 'yyyy';

    beginDate: Date;

    /**
     * Optional
     */
    endDate: Date | null;

    /**
     * Constructor
     *
     * @param beginDate Begin date
     * @param endDate End date
     * @param format Display months or only years
     */
    constructor(
        beginDate: Date,
        endDate: Date | null,
        format: DateRangeTypeEnum
    ) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.datePipeFormat = this.initDatePipeFormat(format);
    }

    initDatePipeFormat(format: DateRangeTypeEnum): 'MMMM yyyy' | 'yyyy' {
        // If not defined --> default to year format
        if (!format) {
            return this.initDatePipeFormat(DateRangeTypeEnum.YEAR);
        }
        switch (format) {
            case DateRangeTypeEnum.MONTH:
                return 'MMMM yyyy';
            case DateRangeTypeEnum.YEAR:
                return 'yyyy';
        }
    }
}
