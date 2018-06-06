import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  labelText,
  className,
  id,
  input,
  meta,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  invalid,
  invalidText,
  ...other
}) => {
  const textInputProps = {
    id,
    /*onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },*/
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type,
  };

  /* Redux Form Mapping */

  const invalidTextMap = meta ? meta.error : invalidText;
  const invalidMap = meta ? !meta.valid : invalid;

  const errorId = id + '-error-msg';
  const textInputClasses = classNames('wfp--text-input', className);
  const labelClasses = classNames('wfp--label', {
    'wfp--visually-hidden': hideLabel,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const error = invalidMap ? (
    <div className="wfp--form-requirement" id={errorId}>
      {invalidTextMap}
    </div>
  ) : null;

  const inputElement = invalidMap ? (
    <input
      {...other}
      {...input}
      {...textInputProps}
      data-invalid
      aria-invalid
      aria-describedby={errorId}
      className={textInputClasses}
    />
  ) : (
  
    <input {...other} {...input} {...textInputProps} className={textInputClasses} />
  );

  return (
    <div className="wfp--form-item">
      {label}
      {inputElement}
      {error}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
};

TextInput.defaultProps = {
  className: 'wfp--text__input',
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: '',
};

export default TextInput;
