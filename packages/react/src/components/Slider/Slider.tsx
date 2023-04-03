import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input, { InputProps } from '../Input';
import TextInput from '../TextInput';

/** Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value. */

interface SliderProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  hideTextInput?: boolean;
  formItemClassName?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  id: string;
  labelText: React.ReactNode | string;
  min: number;
  minLabel?: string;
  max: number;
  maxLabel?: string;
  formatLabel?: () => void;
  onChange?: (
    value: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClick?: () => void;
  name?: string;
  inputType?: string;
  ariaLabelInput?: string;
  step?: number;
  value?: number | '';
  // eslint-disable-next-line @typescript-eslint/ban-types
  invalid?: {} | boolean;
  invalidText?: string;
  additional?: React.ReactNode;
  helperText?: React.ReactNode;
  allowEmpty?: boolean;
  fullWidth?: boolean;
  className?: string;
  hideControls?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const defaultFormatLabel = (value, label) => {
  return typeof label === 'function' ? label(value) : `${value}${label}`;
};

const Slider: React.FC<SliderProps> = React.forwardRef((props, ref) => {
  const {
    ariaLabelInput,
    className,
    disabled,
    formatLabel = defaultFormatLabel,
    fullWidth,
    id,
    inputType,
    hideLabel,
    hideControls,
    hideTextInput,
    min,
    minLabel,
    max,
    maxLabel,
    step = 1,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange = () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    //onClick = () => {},
    helperText,
    ...other
  } = props;

  const { prefix } = useSettings();

  const initialValue = props.value;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const newInputRef = useRef(null);
  const _inputRef = ref ? ref : newInputRef;

  const handleChange = (evt) => {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      if (evt.target.value > max) {
        setValue(max);
        onChange(max, evt);
      } /* else if (evt.target.value < min) {
        setValue(evt.target.value);
        onChange(parseFloat(min), evt);
      }*/ else {
        setValue(evt.target.value);
        onChange(parseFloat(evt.target.value), evt);
      }
    }
  };

  const numberInputClasses = classNames(
    `${prefix}--slider--wrapper`,
    className,
    {
      [`${prefix}--slider--helpertext`]: helperText,
      [`${prefix}--slider--nolabel`]: hideLabel,
      [`${prefix}--slider--nocontrols`]: hideControls,
    }
  );

  const sliderContainerClasses = classNames(`${prefix}--slider-container`, {
    [`${prefix}--slider-container--full-width`]: fullWidth,
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

  const inputClasses = classNames(
    `${prefix}--input`,
    `${prefix}--slider-text-input`
  );

  const sliderClasses = classNames(
    `${prefix}--slider`,
    { [`${prefix}--slider--disabled`]: disabled },
    className
  );

  const sliderRangeWrapperClasses = classNames(
    `${prefix}--slider__range-wrapper`,
    { [`${prefix}--slider__range-wrapper--disabled`]: disabled },
    className
  );

  const valueMinimal = value && value < min ? min : value;
  return (
    <Input {...props} formItemClassName={numberInputClasses}>
      <div className={sliderContainerClasses}>
        <span className={`${prefix}--slider__range-label`}>
          {formatLabel(min, minLabel)}
        </span>

        <div className={sliderRangeWrapperClasses}>
          <div
            className={`${prefix}--slider__range-before`}
            style={{
              width: `${((valueMinimal || 0 - min) / (max - min)) * 100}%`,
            }}
          />
          <input
            className={sliderClasses}
            type="range"
            {...other}
            {...newProps}
            ref={_inputRef}
          />
        </div>
        <span className={`${prefix}--slider__range-label`}>
          {formatLabel(max, maxLabel)}
        </span>
        {!hideTextInput && (
          <TextInput
            disabled={disabled}
            type={inputType}
            id="input-for-slider"
            className={inputClasses}
            value={value}
            onChange={handleChange}
            labelText=""
            aria-label={ariaLabelInput}
          />
        )}
      </div>
    </Input>
  );
});

Slider.displayName = 'Slider';

export default Slider;
