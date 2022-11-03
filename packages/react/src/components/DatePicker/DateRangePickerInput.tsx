import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import * as ReactHook from 'react-hook-form';

interface DateRangePickerInputProps {
  datePicker: React.ElementType;
  labelText: string;
  placeholder?: string;
  hideLabel?: boolean;
  showClearDate?: boolean;
  invalid?: boolean | ReactHook.FieldError;
  invalidText?: string;
  showDefaultInputIcon?: boolean;
  inputIconPosition?: string;
  helperText?: string;
  onBlur?: () => void;
  value?: string;
  id?: string;
  onChange?: (value: string) => void;
  startDatePlaceholderText?: string;
  endDatePlaceholderText?: string;
  startDateId?: string;
  endDateId?: string;
}

const DateRangePickerInput: React.FC<DateRangePickerInputProps> = ({
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
  showClearDate,
  isDirty,
  isTouched,
  error,
  ...other
}) => {
  const { prefix } = useSettings();
  const [focusedInput, setFocusedInput] = useState(null);
  const [startDate, setStartDate] = useState(startDate ? startDate : null);
  const [endDate, setEndDate] = useState(endDate ? endDate : null);

  // state = {
  //   focusedInput: null,
  //   startDate: this.props.startDate ? this.props.startDate : null,
  //   endDate: this.props.endDate ? this.props.endDate : null,
  // };

  const handleFocusChange = (focusedInput) => {
    if (!focusedInput && typeof onBlur === 'function') {
      onBlur();
    }
    setFocusedInput(focusedInput);
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
    <div className={`${prefix}--form-item`}>
      {label}
      {helper}
      <DateRangePicker
        endDateId={endDateId}
        endDate={onChange && value ? value.endDate : endDate}
        endDatePlaceholderText={endDatePlaceholderText}
        focusedInput={focusedInput}
        hideKeyboardShortcutsPanel
        onDatesChange={({ startDate, endDate }) => {
          // console.log('dates changed');
          if (onChange) {
            onChange({ startDate, endDate });
          }
          setStartDate(startDate);
          setEndDate(endDate);
          // this.setState({ startDate, endDate });
        }}
        onFocusChange={handleFocusChange}
        startDateId={startDateId}
        startDate={onChange && value ? value.startDate : startDate}
        startDatePlaceholderText={startDatePlaceholderText}
        {...other}
      />
      {errorMessage}
    </div>
  );
};

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
  datePicker: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired,
  ]),
  /**
   * Provide the placeholder for the start input
   */
  startDatePlaceholderText: PropTypes.string,
  /**
   * Provide the placeholder for the end input
   */
  endDatePlaceholderText: PropTypes.string,
};

export { DateRangePickerInput };
