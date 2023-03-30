import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import uId from '../../tools/uniqueId';
import useSettings from '../../hooks/useSettings';

/** Radio buttons represent a group of mutually exclusive choices */

const RadioButton = React.forwardRef((props, ref) => {
  const {
    labelText,

    id,
    className,
    value,
    name,
    onChange,
    ...other
  } = props;

  const [uid] = useState(id || uId());

  const { prefix } = useSettings();

  const wrapperClasses = classNames('radioButtonWrapper', className);

  const handleOnChange = (evt) => {
    onChange(evt, value, name);
  };

  const handleChange = props.onChange
    ? {
        onChange: handleOnChange,
      }
    : {};

  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        ref={ref}
        type="radio"
        className={`${prefix}--radio-button`}
        {...handleChange}
        id={uid}
      />
      <label htmlFor={uid} className={`${prefix}--radio-button__label`}>
        <span className={`${prefix}--radio-button__appearance`} />
        {labelText}
      </label>
    </div>
  );
});

RadioButton.propTypes = {
  prefix: PropTypes.string.isRequired,
  /**
   * Specify whether the <RadioButton> is currently checked
   */
  checked: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether the <RadioButton> should be checked by default
   */
  defaultChecked: PropTypes.bool,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique id for the underlying `input` node
   */
  id: PropTypes.string,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Provide a name for the underlying `input` node
   */
  name: PropTypes.string,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `input` changes
   */
  onChange: PropTypes.func,

  /**
   * Specify the value of the <RadioButton>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
