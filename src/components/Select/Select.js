import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { iconCaretDown } from '@wfp/icons';
import Icon from '../Icon';

const Select = ({
  className,
  id,
  inline,
  input,
  labelText,
  disabled,
  children,
  hideLabel,
  iconDescription,
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
        <Icon
          icon={iconCaretDown}
          className="wfp--select__arrow"
          description={iconDescription}
        />
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
  iconDescription: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
};

export default Select;
