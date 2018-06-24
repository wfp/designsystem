import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import RfFormLabel from '../FormLabel/RfFormLabel';

const TextInput = props => {
  const {
    className,
    id,
    type,
    onChange,
    onClick,
    hideLabel,
    invalid,
    invalidText,
    ...other
  } = props;
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
    input,
    type,
  };

  const errorId = id + '-error-msg';
  const textInputClasses = classNames('wfp--text-input', className);

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

  return (
    <div className="wfp--form-item">
      <RfFormLabel {...props} />
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
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
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
