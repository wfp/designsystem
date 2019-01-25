import PropTypes from 'prop-types';
import React from 'react';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export const SingleDatePickerField = ({
  datePicker,
  labelText,
  meta: { active, error, touched },
  name,
  input: { value, onFocus, onBlur, onChange },
  ...other
}) => {
  const SingleDatePicker = datePicker;

  const errorMessage =
    error && touched ? (
      <div className="wfp--form-requirement">{error}</div>
    ) : null;

  return (
    <div>
      <label htmlFor={name} className={`${prefix}--label`}>
        {labelText}
      </label>
      <SingleDatePicker
        date={value}
        focused={active}
        hideKeyboardShortcutsPanel
        onDateChange={value => onChange({ value })}
        onFocusChange={({ focused }) =>
          focused ? onFocus(true) : onBlur(true)
        }
        {...other}
      />
      {errorMessage}
    </div>
  );
};

SingleDatePickerField.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes.func.isRequired,
};

export default SingleDatePickerField;
