import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export class DateRangePickerField extends PureComponent {
  state = { focusedInput: null };
  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const {
      datePicker,
      labelText,
      meta: { error, touched },
      name,
      input: { value: { startDate = null, endDate = null }, onChange },
    } = this.props;
    const { focusedInput = null } = this.state;

    const DateRangePicker = datePicker;

    const errorMessage =
      error && touched ? (
        <div className="wfp--form-requirement">{error}</div>
      ) : null;

    return (
      <div>
        <label htmlFor={name} className="wfp--label">
          {labelText}
        </label>
        <DateRangePicker
          endDateId="endDate"
          endDate={endDate}
          endDatePlaceholderText="End Date"
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          onDatesChange={onChange}
          onFocusChange={this.handleFocusChange}
          startDateId="startDate"
          startDate={startDate}
          startDatePlaceholderText="Start Date"
        />
        {errorMessage}
      </div>
    );
  }
}

DateRangePickerField.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes.func.isRequired,
};

export default DateRangePickerField;
