/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export interface UseInputProps {
  /**
   * Specify an optional className to be applied to the <input> node
   */
  className?: string;

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue?: string | number;

  /**
   * Specify whether the <input> should be disabled
   */
  disabled?: boolean;

  /**
   * Specify an optional className to be applied to the input node
   */
  inputClassName?: string;

  /**
   * Specify an optional className to be applied to the input wrapper node
   */
  inputWrapperClassName?: string;

  /**
   * Specify a custom `id` for the <input>
   */
  id?: string;

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText?: React.ReactNode;

  /**
   * Optionally provide an `onChange` handler that is called whenever <input>
   * is updated
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <input> is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /**
   * Specify the placeholder attribute for the <input>
   */
  placeholder?: string;

  /**
   * Specify the type of the <input>
   */
  type?: string;

  /**
   * Specify the value of the <input>
   */
  value?: string | number | readonly string[] | undefined; //string | number | object;

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel?: boolean;

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid?: boolean | object;

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string | React.ReactNode;

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional?: React.ReactNode;
  //TODO
  addonAfter?: React.ReactNode;

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: React.ReactNode;

  /**
   * `true` to use the light version.
   */
  light?: boolean;
  readOnly?: boolean;
  name?: string;
}

/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */
export const useInput = ({
  addonAfter,
  className,
  inputClassName = 'wfp--input',
  id,
  placeholder,
  type = 'text',
  onChange = () => {},
  onClick = () => {},
  hideLabel,
  name,
  invalid,
  invalidText,
  labelText,
  helperText,
  light,
  value = undefined,
  //required,
  ...other
}: UseInputProps) => {
  const { prefix } = useSettings();

  const calculatedId = id ? id : name;

  const inputClasses = classNames(`${prefix}--input`, inputClassName, {
    [`${prefix}--input--light`]: light,
    [`${prefix}--input--invalid`]: invalid, // legacy className
  });

  const inputProps = {
    id: calculatedId,
    name,
    className: inputClasses,
    ...other,
    onChange: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onClick(evt);
      }
    },
    placeholder,
    value,
    type,
  };

  const wrapperProps = {
    className,
    addonAfter,
    labelText,
    helperText,
    hideLabel,
    invalid,
    invalidText,
  };

  const errorId = calculatedId + '-error-msg';

  /*const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel || !labelText,
    [`${prefix}--label--disabled`]: other.disabled,
  });*/

  /* const label = (
    <label htmlFor={calculatedId} className={labelClasses}>
      {labelText && labelText}
      {required && '*'}
    </label>
  );*/

  if (invalid) {
    inputProps['data-invalid'] = true;
    inputProps['aria-invalid'] = true;
    inputProps['aria-describedby'] = errorId;
  }
  return { inputProps, wrapperProps };
};

export default useInput;
