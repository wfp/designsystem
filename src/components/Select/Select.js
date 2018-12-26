import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { iconCaretDown } from '@wfp/icons';
import Icon from '../Icon';

const Select = ({
  className,
  id,
  inline,
  labelText,
  disabled,
  children,
  iconDescription,
  hideLabel,
  invalid,
  invalidText,
  helperText,
  light,
  ...other
}) => {
  const selectClasses = classNames({
    'wfp--select': true,
    'wfp--select--inline': inline,
    'wfp--select--light': light,
    [className]: className,
  });
  const labelClasses = classNames('wfp--label', {
    'wfp--visually-hidden': hideLabel,
  });
  const errorId = `${id}-error-msg`;
  const error = invalid ? (
    <div className="wfp--form-requirement" id={errorId}>
      {invalidText}
    </div>
  ) : null;
  const helper = helperText ? (
    <div className="wfp--form__helper-text">{helperText}</div>
  ) : null;
  return (
    <div className="wfp--form-item">
      <div className={selectClasses}>
        <label htmlFor={id} className={labelClasses}>
          {labelText}
        </label>
        <select
          {...other}
          id={id}
          className="wfp--select-input"
          disabled={disabled || undefined}
          data-invalid={invalid || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid && errorId}>
          {children}
        </select>
        <Icon
          icon={iconCaretDown}
          className="wfp--select__arrow"
          description={iconDescription}
        />
        {helper}
        {error}
      </div>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  labelText: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  iconDescription: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  helperText: PropTypes.node,
  light: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false,
};

export default Select;
