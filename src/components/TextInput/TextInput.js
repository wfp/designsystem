import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TextInput = ({
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
  light,
  ...other
}) => {
  const textInputProps = {
    id,
    onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type,
  };

  const errorId = id + '-error-msg';
  const textInputClasses = classNames('wfp--text-input', className, {
    'wfp--text-input--light': light,
  });
  const labelClasses = classNames('wfp--label', {
    'wfp--visually-hidden': hideLabel,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const error = invalid ? (
    <div className="wfp--form-requirement" id={errorId}>
      {invalidText}
    </div>
  ) : null;

  const input = invalid ? (
    <input
      {...other}
      {...textInputProps}
      data-invalid
      aria-invalid
      aria-describedby={errorId}
      className={textInputClasses}
    />
  ) : (
    <input {...other} {...textInputProps} className={textInputClasses} />
  );

  const helper = helperText ? (
    <div className="wfp--form__helper-text">{helperText}</div>
  ) : null;

  return (
    <div className="wfp--form-item">
      {label}
      {helper}
      {input}
      {error}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  helperText: PropTypes.node,
  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,
};

TextInput.defaultProps = {
  className: 'wfp--text__input',
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false,
};

export default TextInput;
