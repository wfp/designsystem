import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */
export const useInput = ({
  labelText,
  className,
  // iconDescription,
  id,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  name,
  invalid,

  light,
  required,
  ...other
}) => {
  const { prefix } = useSettings();

  const calculatedId = id ? id : name;
  const inputProps = {
    id: calculatedId,
    onChange: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onClick(evt);
      }
    },
    placeholder,
    type,
  };

  const errorId = calculatedId + '-error-msg';

  const inputClasses = classNames(`${prefix}--input`, className, {
    [`${prefix}--input--light`]: light,
    [`${prefix}--input--invalid`]: invalid, // legacy className
  });

  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel || !labelText,
    [`${prefix}--label--disabled`]: other.disabled,
  });

  const label = (
    <label htmlFor={calculatedId} className={labelClasses}>
      {labelText && labelText}
      {required && '*'}
    </label>
  );

  const elementProps = invalid
    ? {
        ...other,
        ...inputProps,
        'data-invalid': true,
        'aria-invalid': true,
        'aria-describedby': errorId,
        className: inputClasses,
      }
    : {
        ...other,
        ...inputProps,
        className: inputClasses,
      };

  return elementProps;
};

useInput.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the input wrapper node
   */
  inputWrapperClassName: PropTypes.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: PropTypes.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,
};

useInput.defaultProps = {
  className: 'wfp--input',
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false,
};

export default useInput;
