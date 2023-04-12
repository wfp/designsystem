import React, { useState } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import * as ReactHook from 'react-hook-form';

interface SingleDatePickerInputProps {
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
  startDatePlaceholderText?: string;
  endDatePlaceholderText?: string;
  onBlur?: () => void;
  value?: string;
  id?: string;
  onChange?: (value: string) => void;
}

const SingleDatePickerInput: React.FC<SingleDatePickerInputProps> = ({
  datePicker,
  labelText,
  id,
  onChange,
  hideLabel,
  invalid,
  invalidText,
  helperText,
  value,
  onBlur,
  ...other
}) => {
  const { prefix } = useSettings();
  const [controlledValue, setControlledValue] = useState(value ? value : null);
  const [focusedInput, setFocusedInput] = useState(null);

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
        onDateChange={(value) => {
          if (onChange) {
            onChange(value);
          }
          setControlledValue(value);
        }}
        onFocusChange={handleFocusChange}
        {...other}
      />
      {errorMessage}
    </div>
  );
};

// SingleDatePickerInput.propTypes = {
//   /**
//    * Provide the SingleDatePicker as a component
//    */
//   datePicker: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),

//   onFocus: PropTypes.func,

//   onBlur: PropTypes.func,
//   /**
//    * Provide a custom className that is applied directly to the underlying
//    * node
//    */
//   className: PropTypes.string,
//   /**
//    * Specify whether the control is disabled
//    */
//   disabled: PropTypes.bool,

//   /**
//    * Provide a unique identifier for the control
//    */
//   id: PropTypes.string,

//   /**
//    * Provide the text that will be read by a screen reader when visiting this
//    * control
//    */
//   labelText: PropTypes.node.isRequired,

//   /**
//    * Optionally provide an `onChange` handler that is called whenever date
//    * is updated
//    */
//   onChange: PropTypes.func,

//   /**
//    * Optionally provide an `onClick` handler that is called whenever the
//    * date is clicked
//    */
//   onClick: PropTypes.func,

//   /**
//    * Specify the placeholder attribute for the datepicker
//    */
//   placeholder: PropTypes.string,

//   /**
//    * Specify whether to clear selected date or not
//    */
//   showClearDate: PropTypes.bool,

//   /**
//    * Specify whether you want to show the calendar icon. It is true by default.
//    */
//   showDefaultInputIcon: PropTypes.bool,
//   /**
//    * Specify whether the control is currently invalid.
//    * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
//    */
//   invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

//   /**
//    * Provide the text that is displayed when the control is in an invalid state
//    */
//   invalidText: PropTypes.string,

//   /**
//    * Provide text that is used alongside the control label for additional help
//    */
//   helperText: PropTypes.node,

//   /**
//    * Specify whether you want the underlying label to be visually hidden
//    */
//   hideLabel: PropTypes.bool,
// };

// SingleDatePickerInput.defaultProps = {
//   onFocus: () => {},
//   onBlur: () => {},
//   onChange: () => {},
// };

export { SingleDatePickerInput };
