import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import { withUNCoreSettings } from '../UNCoreSettings';
import useSettings from '../../hooks/useSettings';

const SingleDatePickerInput = ({
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
  active,
  value,
  name,
  onFocus,
  onBlur,
  onDragStart,
  onDrop,
  isDirty,
  isTouched,
  error,
  ...other
}) => {

  const { prefix } = useSettings();
  const [controlledValue, setControlledValue] = useState(value ? value : null);
  const [focusedInput, setFocusedInput] = useState(null)

  const handleDateChange = (value) => {
    if (onChange) {
      
      onChange(value);
    }
    setControlledValue(value);
  };

  const handleFocusChange = (focusedInput) => {
    if (!focusedInput && typeof onBlur === 'function') {
      onBlur();
    }
    setFocusedInput(focusedInput);
  };


    const SingleDatePicker = datePicker;

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
        <SingleDatePicker
          date={onChange && value ? value : controlledValue}
          focused={focusedInput}
          hideKeyboardShortcutsPanel
          onDateChange={(value)=>{
            if (onChange) {
              onChange(value);
            }
            setControlledValue({value}, ()=>{});
          }}
          onFocusChange={handleFocusChange}
          {...other}
        />
        {errorMessage}
      </div>
    );
  
}



SingleDatePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),

  onFocus: PropTypes.func,

  onBlur: PropTypes.func,
  /**
   * Provide a custom className that is applied directly to the underlying
   * node
   */
  className: PropTypes.string,
  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever date
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * date is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the datepicker
   */
  placeholder: PropTypes.string,

  /**
   * Specify whether to clear selected date or not
   */
  showClearDate: PropTypes.bool,

  /**
   * Specify whether you want to show the calendar icon. It is true by default.
   */
  showDefaultInputIcon: PropTypes.bool,
  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,
};

SingleDatePickerInput.defaultProps = {
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
};

export {SingleDatePickerInput};
