import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import styles from './dateRangePicker.module.scss';

export default function DateRangePicker({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
}) {
  return (
    <div className={styles.dateRangePicker}>
      <DatePicker
        selected={startDate}
        className={`${styles.dateRangePickerInput} wfp--input`}
        onChange={onChangeStart}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      {/*<FontAwesomeIcon
        icon={faArrowRight}
        className={`${styles.dateRangePickerIcon}`}
      />*/}
      <DatePicker
        selected={endDate}
        className={`${styles.dateRangePickerInput} wfp--input`}
        onChange={onChangeEnd}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
}
