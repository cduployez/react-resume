import styles from './DatePrefix.module.scss';
import {DateRangeDto} from '../../model/dtos/date-range-dto';
import dayjs from 'dayjs';

type DatePrefixMessages = {
    current: string;
}

type DatePrefixProps = {
    dateRange: DateRangeDto;
}

const messages: DatePrefixMessages = {
    current: 'Actuel'
};

function DatePrefix(props: DatePrefixProps): React.JSX.Element {

    function endDateElement() {
        if (props.dateRange.beginDate !== props.dateRange.endDate) {
            return (
                <>
                    <span> - </span>
                    {props.dateRange.endDate ?
                        <span>{dayjs(props.dateRange.endDate).format(props.dateRange.datePipeFormat)}</span> :
                        <span>{messages.current}</span>}
                </>
            );
        }
    }

    return (
        <span className={styles.dateRange}>
            <span>{dayjs(props.dateRange.beginDate).format(props.dateRange.datePipeFormat)}</span>
            {endDateElement()}
        </span>
    );
}

export default DatePrefix;