import * as React from 'react';
import { useState, ChangeEventHandler } from 'react';
import classNames from 'classnames';
import uId from '../../tools/uniqueId';
import useSettings from '../../hooks/useSettings';
import { InputProps } from '../Input';

interface RadioButtonProps
  extends InputProps,
    Omit<React.ComponentPropsWithRef<'input'>, 'onChange'> {
  /**
   * Specify whether the <RadioButton> is currently checked
   */
  checked?: boolean;

  /**
   * Specify whether the <RadioButton> should be checked by default
   */
  defaultChecked?: boolean;
  /**
   * Specify whether the control is disabled
   */
  disabled?: boolean;
  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `input` changes
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string | number,
    name?: string
  ) => void;
  /**
   * Specify the value of the <RadioButton>
   */
  value: string | number;
}

const RadioButton: React.FC<RadioButtonProps> = React.forwardRef(
  (props, ref) => {
    const { labelText, id, className, value, name, onChange, ...other } = props;

    const [uid] = useState<string>(id || uId());

    const { prefix } = useSettings();

    const wrapperClasses = classNames('radioButtonWrapper', className);

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
      onChange?.(evt, value, name);
    };

    const handleChange = onChange
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
          value={value}
          name={name}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
        />
        <label htmlFor={uid} className={`${prefix}--radio-button__label`}>
          <span className={`${prefix}--radio-button__appearance`} />
          {labelText}
        </label>
      </div>
    );
  }
);

//RadioButton.displayName = 'RadioButton';

export default RadioButton;
