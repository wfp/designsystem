import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input';

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  max?: number;
  min?: number;
  step?: number;
  allowEmpty?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  helperText?: string;
  hideLabel?: boolean;
  hideControls?: boolean;
  light?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (evt?: any, value?: number, direction?: string) => void;
  onClick?: (evt?: any, value?: number, direction?: string) => void;
  value?: '' | number;
}

// function PropTypeEmptyString(props, propName, componentName) {
//   componentName = componentName || 'ANONYMOUS';
//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string' && value !== '') {
//       return new Error(
//         propName + ' in ' + componentName + ' is not an empty string'
//       );
//     }
//   }
//   return null;
// }

const countDecimals = (value) => {
  if (Math.floor(value) === value) return 0;

  return value.split('.')[1].length || 0;
};

const capMin = (min, value) =>
  isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.max(min, value);
const capMax = (max, value) =>
  isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
    ? value
    : Math.min(max, value);

/** The number input component is used for entering numeric values and includes controls for incrementally increasing or decreasing the value */

const NumberInput: React.FC<PropsWithChildren<NumberInputProps>> =
  React.forwardRef((props, ref) => {
    const {
      additional,
      className,
      disabled,
      formItemClassName,
      id,
      hideLabel,
      hideControls,
      labelText,
      max,
      min,
      step = 1,
      invalid,
      invalidText,
      onChange = () => {},
      onClick = () => {},
      helperText,
      light,
      allowEmpty,
      inputRef = ref,
      pattern = '[0-9]*',
      ...other
    } = props;
    const { prefix } = useSettings();

    const initialValue = capMax(max, capMin(min, props.value));
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    const newInputRef = useRef(null);
    var _inputRef = inputRef ? inputRef : newInputRef;

    const handleChange = (evt) => {
      if (!disabled) {
        evt.persist();
        evt.imaginaryTarget = _inputRef;

        setValue(evt.target.value);
        onChange(evt, parseFloat(evt.target.value));
      }
    };

    const handleArrowClick = (evt, direction) => {
      let valueState = typeof value === 'string' ? Number(value) : value;
      valueState = isNaN(valueState) ? 0 : valueState;

      const conditional =
        direction === 'down'
          ? (min !== undefined && valueState > min) || min === undefined
          : (max !== undefined && valueState < max) || max === undefined;

      const stepString = step.toString();
      valueState =
        direction === 'down'
          ? valueState - step
          : valueState + parseFloat(stepString);
      valueState = capMax(max, capMin(min, valueState));
      valueState = parseFloat(valueState.toFixed(countDecimals(step)));

      if (!disabled && conditional) {
        evt.persist();
        evt.imaginaryTarget = _inputRef;
        evt.target.value = parseFloat(valueState);
        onClick(evt, direction);
        setValue(valueState);
        onChange(evt, valueState, direction);
      }
    };

    const numberInputClasses = classNames(`${prefix}--number`, className, {
      [`${prefix}--number--light`]: light,
      [`${prefix}--number--helpertext`]: helperText,
      [`${prefix}--number--nolabel`]: hideLabel,
      [`${prefix}--number--nocontrols`]: hideControls,
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

    // const buttonProps = {
    //   disabled,
    //   type: "button",
    // };

    return (
      <Input {...props} formItemClassName={numberInputClasses}>
        {() => {
          return (
            <div className={`${prefix}--number__controls`}>
              <button
                className={`${prefix}--number__control-btn up-icon`}
                type="button"
                disabled={disabled}
                onClick={(evt) => handleArrowClick(evt, 'up')}>
                +
              </button>
              <button
                className={`${prefix}--number__control-btn down-icon`}
                type="button"
                disabled={disabled}
                onClick={(evt) => handleArrowClick(evt, 'down')}>
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
  });

export default NumberInput;
