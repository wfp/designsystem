import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export class DateRangePickerInput extends PureComponent {
  state = {
    focusedInput: null,
    startDate: this.props.startDate ? this.props.startDate : null,
    endDate: this.props.endDate ? this.props.endDate : null,
  };
  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const {
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
      ...other
    } = this.props;
    const { focusedInput, startDate, endDate } = this.state;

    const DateRangePicker = datePicker;

    const labelClasses = classNames('wfp--label', {
      'wfp--visually-hidden': hideLabel,
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const errorMessage = invalid ? (
      <div className="wfp--form-requirement invalid">{invalidText}</div>
    ) : null;

    const helper = helperText ? (
      <div className="wfp--form__helper-text">{helperText}</div>
    ) : null;

    return (
      <div>
        <label htmlFor={name} className="wfp--label">
          {labelText}
        </label>
        {helper}
        <DateRangePicker
          endDateId={endDateId}
          endDate={controlled ? value.endDate : endDate}
          endDatePlaceholderText={endDatePlaceholderText}
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          onDatesChange={({ startDate, endDate }) => {
            onChange({ startDate, endDate });
            this.setState({ startDate, endDate });
          }}
          onFocusChange={this.handleFocusChange}
          startDateId={startDateId}
          startDate={controlled ? value.startDate : startDate}
          startDatePlaceholderText={startDatePlaceholderText}
          {...other}
        />
        {errorMessage}
      </div>
    );
  }
}

DateRangePickerInput.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  onChange: () => {},
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

export default DateRangePickerInput;
