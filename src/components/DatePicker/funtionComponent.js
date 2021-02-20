import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { DateRangePickerInput } from './DateRangePickerInput';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export default memo(function DateRangePickerInput({
  startDate,
  endDate,
  controlled,
  datePicker,
  labelText,
  className,
  id,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  invalid,
  invalidText,
  helperText,
  value,
  startDateId,
  startDatePlaceholderText,
  endDateId,
  endDatePlaceholderText,
  name,
  onBlur,
  onDragStart,
  onDrop,
  onFocus,
  ...other
}) {
  const [focusedInput, setfocusedInput] = useState(null);
  const [stateStartDate, setstartDate] = useState(startDate ? startDate : null);
  const [stateEndDate, setendDate] = useState(endDate ? endDate : null);

  const handleFocusChange = (focusedInput) => {
    if (!focusedInput && typeof onBlur === 'function') {
      onBlur();
    }
    setfocusedInput(focusedInput);
  };

  // const { focusedInput, startDate, endDate } = this.state;

  const DateRangePicker = datePicker;

  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const errorMessage = invalid ? (
    <div className={`${prefix}--form-requirement invalid`}>{invalidText}</div>
  ) : null;

  const helper = helperText ? (
    <div className={`${prefix}--form__helper-text`}>{helperText}</div>
  ) : null;

  return (
    <div className="wfp--form-item">
      {label}
      {helper}
      <DateRangePicker
        endDateId={endDateId}
        endDate={onChange && value ? value.endDate : stateEndDate}
        endDatePlaceholderText={endDatePlaceholderText}
        focusedInput={focusedInput}
        hideKeyboardShortcutsPanel
        onDatesChange={({ startDate, endDate }) => {
          if (onChange) {
            onChange({ startDate, endDate });
          }
          setstartDate(startDate);
          setendDate(endDate);
        }}
        onFocusChange={handleFocusChange}
        startDateId={startDateId}
        startDate={onChange && value ? value.startDate : stateStartDate}
        startDatePlaceholderText={startDatePlaceholderText}
        {...other}
      />
      {errorMessage}
    </div>
  );
});

DateRangePickerInput.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
};

DateRangePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes.func.isRequired,
  /**
   * Provide the placeholder for the start input
   */
  startDatePlaceholderText: PropTypes.string,
  /**
   * Provide the placeholder for the end input
   */
  endDatePlaceholderText: PropTypes.string,
};

// export default DateRangePickerInput;
