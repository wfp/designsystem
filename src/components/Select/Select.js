import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Select = ({
  className,
  id,
  inline,
  input,
  labelText,
  disabled,
  children,
  hideLabel,
  ...other
}) => {
  const selectClasses = classNames({
    'wfp--select': true,
    'wfp--select--inline': inline,
    [className]: className,
  });
  const labelClasses = classNames('wfp--label', {
    'wfp--visually-hidden': hideLabel,
  });
  return (
    <div className="wfp--form-item">
      {!inline ? (
        <label htmlFor={id} className={labelClasses}>
          {labelText}
        </label>
      ) : null}
      <div className={selectClasses}>
        {inline ? (
          <label htmlFor={id} className={labelClasses}>
            {labelText}
          </label>
        ) : null}
        <select
          {...other}
          {...input}
          id={id}
          className="wfp--select-input"
          disabled={disabled}>
          {children}
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  hideLabel: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
};

export default Select;
