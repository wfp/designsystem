import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import FormItem from '../FormItem';
import { WarningSolid } from '@un/icons-react';
import * as HookForm from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  labelText?: string;
  defaultValue?: string | number;
  formItemClassName?: string;
  inputWrapperClassName?: string;
  hideLabel?: boolean;
  invalid?: boolean | HookForm.FieldError;
  invalidText?: string | React.ReactNode;
  additional?: React.ReactNode;
  children?: React.ReactNode;
  light?: boolean;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  inline?: boolean;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
}

// type InputProps = PropsWithChildren<InputPropsI>;

/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */
const Input: React.FC<PropsWithChildren<InputProps>> = ({
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
        {/* {typeof children === 'function' ? children(elementProps) : children} */}
        {children}
        {addonAfter && (
          <div className={`${prefix}--input-addon-after`}>{addonAfter}</div>
        )}
      </div>
      {error}
    </FormItem>
  );
};

export default Input;
