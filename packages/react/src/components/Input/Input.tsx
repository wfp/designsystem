import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import FormItem from '../FormItem';
import { WarningSolid } from '@un/icons-react';
import * as HookForm from 'react-hook-form';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: string;
  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control @design
   */
  labelText?: string;
  /**
   * Optionally provide the default value of the input @design
   */
  defaultValue?: string | number;
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  formItemClassName?: string;
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  inputWrapperClassName?: string;
  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel?: boolean;
  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid?: boolean | HookForm.FieldError;
  /**
   * Provide the text that is displayed when the control is in an invalid state @design
   */
  invalidText?: string | React.ReactNode;
  /**
   * Provide the content that will be shown in addition to the label
   * (e.g. units, currency, etc.)
   * This content will be placed after the label @design
   */
  additional?: React.ReactNode;

  light?: boolean;
  /**
   * Specify the placeholder attribute for the input @design
   */
  placeholder?: string;
  type?: string;
  /**
   * Provide a unique identifier for the control
   */
  id?: string;
  /**
   * Provide a name for the control
   */
  name?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  inline?: boolean;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
}

interface InputPropsI extends InputProps {
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  children?: React.ReactNode;
}

/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */
const Input: React.FC<PropsWithChildren<InputPropsI>> = ({
  additional,
  addonBefore,
  addonAfter,
  labelText,
  children,
  className,
  // iconDescription,
  id,
  formItemClassName,
  inputWrapperClassName,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  name,
  invalid,
  invalidText,
  helperText,
  light,
  required,
  ...other
}) => {
  const { prefix } = useSettings();

  const calculatedId = id ? id : name;
  const inputProps = {
    id: calculatedId,
    onChange: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onChange && onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled && !other.readOnly) {
        onClick && onClick(evt);
      }
    },
    placeholder,
    type,
  };

  const errorId = calculatedId + '-error-msg';

  const inputClasses = classNames(`${prefix}--input`, className, {
    [`${prefix}--input--light`]: light,
    [`${prefix}--input--invalid`]: invalid, // legacy className
  });

  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel || !labelText,
    [`${prefix}--label--disabled`]: other.disabled,
  });

  const inputWrapperClasses = classNames(
    `${prefix}--input-wrapper`,
    { [`${prefix}--form-item--invalid`]: invalid },
    inputWrapperClassName
  );

  const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
    [`${prefix}--form__helper-text--disabled`]: other.disabled,
  });

  const errorIcon = <WarningSolid fill="#c5192d" />;

  const label = (
    <label htmlFor={calculatedId} className={labelClasses}>
      {labelText && labelText}
      {required && '*'}
    </label>
  );

  const error = invalid ? (
    <div className={`${prefix}--form-requirement`} id={errorId}>
      {errorIcon}{' '}
      <span>
        {typeof invalid === 'object' && invalid.message
          ? invalid.message
          : typeof invalid === 'string'
          ? invalid
          : invalidText
          ? invalidText
          : 'required'}
      </span>
    </div>
  ) : null;

  const elementProps = invalid
    ? {
        ...other,
        ...inputProps,
        'data-invalid': true,
        'aria-invalid': true,
        'aria-describedby': errorId,
        className: inputClasses,
      }
    : {
        ...other,
        ...inputProps,
        className: inputClasses,
      };

  const helper = helperText ? (
    <div className={helperTextClasses}>{helperText}</div>
  ) : null;

  return (
    <FormItem className={formItemClassName} inline={other.inline}>
      {label}
      {helper}
      {additional}
      <div className={inputWrapperClasses}>
        {addonBefore && (
          <div className={`${prefix}--input-addon-before`}>{addonBefore}</div>
        )}
        {typeof children === 'function' ? children(elementProps) : children}
        {addonAfter && (
          <div className={`${prefix}--input-addon-after`}>{addonAfter}</div>
        )}
      </div>
      {error}
    </FormItem>
  );
};

export default Input;
