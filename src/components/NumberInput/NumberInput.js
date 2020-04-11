import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input';

const { prefix } = settings;

function PropTypeEmptyString(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string' && value !== '') {
      return new Error(
        propName + ' in ' + componentName + ' is not an empty string'
      );
    }
  }
  return null;
}

Number.prototype.countDecimals = function() {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split('.')[1].length || 0;
};

const capMin = (min, value) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.max(min, value);
const capMax = (max, value) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.min(max, value);

function NumberInput(props) {
  const {
    additional,
    className,
    disabled,
    formItemClassName,
    id,
    hideLabel,
    labelText,
    max,
    min,
    step,
    invalid,
    invalidText,
    onChange = () => {},
    onClick = () => {},
    helperText,
    light,
    allowEmpty,
    inputRef,
    pattern = '[0-9]*',
    ...other
  } = props;

  const initialValue = capMax(max, capMin(min, props.value));
  const [value, setValue] = useState(initialValue);
  var _inputRef = inputRef ? inputRef : useRef(null);

  const handleChange = evt => {
    if (!props.disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(evt);
    }
  };

  const handleArrowClick = (evt, direction) => {
    let valueState = typeof value === 'string' ? Number(value) : value;
    const { disabled, min, max, step } = props;
    const conditional =
      direction === 'down'
        ? (min !== undefined && valueState > min) || min === undefined
        : (max !== undefined && valueState < max) || max === undefined;
    if (!disabled && conditional) {
      valueState = direction === 'down' ? valueState - step : valueState + step;
      valueState = capMax(max, capMin(min, valueState));
      valueState = valueState.toFixed(step.countDecimals());
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      onClick(evt, direction);
      onChange(value, evt, direction);
      setValue(valueState);
    }
  };

  const numberInputClasses = classNames(`${prefix}--number`, className, {
    [`${prefix}--number--light`]: light,
    [`${prefix}--number--helpertext`]: helperText,
    [`${prefix}--number--nolabel`]: hideLabel,
  });

  const newProps = {
    disabled,
    id,
    max,
    min,
    step,
    onChange: handleChange,
    value: value,
  };

  const buttonProps = {
    disabled,
    type: 'button',
  };

  return (
    <Input {...props} formItemClassName={numberInputClasses}>
      {props => {
        return (
          <div className={`${prefix}--number__controls`}>
            <button
              className={`${prefix}--number__control-btn up-icon`}
              {...buttonProps}
              onClick={evt => handleArrowClick(evt, 'up')}>
              +
            </button>
            <button
              className={`${prefix}--number__control-btn down-icon`}
              {...buttonProps}
              onClick={evt => handleArrowClick(evt, 'down')}>
              −
            </button>
            <input
              type="number"
              pattern={pattern}
              {...other}
              {...newProps}
              ref={_inputRef}
            />
          </div>
        );
      }}
    </Input>
  );
}

NumberInput.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

  /**
   * The maximum value.
   */
  max: PropTypes.number,

  /**
   * The minimum value.
   */
  min: PropTypes.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes.number,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: PropTypes.oneOfType([PropTypeEmptyString, PropTypes.number]),

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

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

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes.bool,
};

export default NumberInput;
