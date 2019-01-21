import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import 'react-dates/initialize';
import { START_DATE, END_DATE } from 'react-dates/constants';
import { SingleDatePicker } from 'react-dates';

class DatePicker extends Component {
  state = { focused: null };
  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const {
      id,
      disabled,
      readOnly,
      initialVisibleMonth,
      isOutsideRange,
      meta: { error, touched },
      input: { value = null, onChange },
    } = this.props;
    const { focused = null } = this.state;

    return (
      <div {...this.props}>
        <div className="wfp-form--date-picker">
          {readOnly === true ? (
            <div className="">{moment(value)}</div>
          ) : (
            <SingleDatePicker
              date={value ? moment(value) : null}
              onDateChange={onChange}
              displayFormat="DD/MM/YYYY"
              disabled={disabled}
              focused={focused}
              initialVisibleMonth={initialVisibleMonth}
              isOutsideRange={isOutsideRange}
              hideKeyboardShortcutsPanel
              numberOfMonths={1}
              onFocusChange={this.handleFocusChange}
              id={id}
              placeholder="Enter Date"
            />
          )}
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  id: PropTypes.string,
};

DatePicker.defaultProps = {
  id: 'date',
};

export default DatePicker;
