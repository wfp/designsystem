/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input, { InputProps, useInput } from '../Input';
import { UseInputProps } from '../Input/useInput';

/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */

interface ToggleProps extends InputProps, React.ComponentPropsWithRef<'input'> {
  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled?: boolean;
  toggled?: boolean;
  /**
   * Specify the label for the "off" position
   */
  labelA?: string;
  /**
   * Specify the label for the "on" position
   */
  labelB?: string;
  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle?: (
    value: boolean,
    htmlFor: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  className?: string;
  /**
   * Provide an id that unique represents the underlying `input`
   */
  id?: string;
  /**
   * Provide an name that unique represents the underlying `input`
   */
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Ref = HTMLTextAreaElement;

const Toggle: React.FC<ToggleProps> = React.forwardRef((props, ref) => {
  const {
    className,
    defaultToggled = false,
    //    toggled,
    //    onChange,
    //    onToggle = () => {},
    id,
    labelA = 'Off',
    labelB = 'On',
    ...other
  } = props;
  const { prefix } = useSettings();
  //  let input;
  const wrapperClasses = classNames(
    {
      [`${prefix}--form-item`]: true,
    },
    className
  );

  // const checkedProps = {};

  // if (typeof toggled !== 'undefined') {
  //   checkedProps.checked = toggled;
  // } else {
  //   checkedProps.defaultChecked = defaultToggled;
  // }

  const htmlFor = id ? id : other.name;
  const useInputProps = props as UseInputProps;

  const input = useInput(useInputProps);

  const otherInputProps = other as React.ComponentPropsWithRef<'input'>;

  return (
    <Input className={wrapperClasses} {...props}>
      <input
        {...otherInputProps}
        {...input.inputProps}
        //checked={toggled}
        defaultChecked={defaultToggled}
        type="checkbox"
        id={htmlFor}
        className={`${prefix}--toggle`}
        /*onChange={(evt) => {
          onChange && onChange(evt);
          onToggle && onToggle(input.checked, htmlFor, evt);
        }}*/
        ref={ref}
      />

      <label className={`${prefix}--toggle__label`} htmlFor={htmlFor}>
        <span className={`${prefix}--toggle__text--left`}>{labelA}</span>
        <span className={`${prefix}--toggle__appearance`} />
        <span className={`${prefix}--toggle__text--right`}>{labelB}</span>
      </label>
    </Input>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;
