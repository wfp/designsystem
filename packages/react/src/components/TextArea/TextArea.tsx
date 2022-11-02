import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import FormItem from '../FormItem';
import * as HookForm from 'react-hook-form';
import useSettings from '../../hooks/useSettings'; //import useDetectPrint from '../../internal/useDetectPrint';

/** A textarea is an input dedicated for a large volume of text. It may be used in a variety of components like forms, comment sections, and forums. */
type TextAreaProps = PropsWithChildren<{
  defaultValue?: string | number;
  labelText?: string;
  rows?: number;
  children?: React.ReactNode;
  value?: string | number;
  invalid?: boolean | HookForm.FieldError;
  invalidText?: string;
  helperText?: React.ReactNode;
  hideLabel?: boolean;
  fullWidth?: boolean;
  viewOnly?: boolean;
  className?: Argument;
  disabled?: boolean;
  id?: string;
  formItemClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;

// TODO: Check forward ref
const TextArea: React.FC<TextAreaProps> = React.forwardRef((props, ref) => {
  const {
    className,
    formItemClassName,
    id,
    labelText,
    hideLabel,
    onChange,
    onClick,
    invalid,
    invalidText,
    inputRef = ref,
    helperText,
    fullWidth,
    viewOnly,
    ...other
  } = props;
  /* TODO: Implement print preview for inputs with automated overflow
  const isPrinting = useDetectPrint();
  */
  const { prefix } = useSettings();

  const textareaProps = {
    id,
    onChange: (evt) => {
      if (!other.disabled) {
        onChange && onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled) {
        onClick && onClick(evt);
      }
    },
  };

  const textareaClasses = classNames(`${prefix}--text-area`, className, {
    [`${prefix}--textarea-fullwidth`]: fullWidth,
  });
  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel,
    [`${prefix}--label--disabled`]: other.disabled,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
    [`${prefix}--form__helper-text--disabled`]: other.disabled,
  });

  const error = invalid ? (
    <div className="wfp--form-requirement">{invalidText}</div>
  ) : null;

  const input = invalid ? (
    <textarea
      {...other}
      {...textareaProps}
      ref={inputRef}
      className={textareaClasses}
      data-invalid
    />
  ) : (
    <textarea
      {...other}
      ref={inputRef}
      {...textareaProps}
      className={textareaClasses}
    />
  );

  const helper = helperText ? (
    <div className={helperTextClasses}>{helperText}</div>
  ) : null;

  return (
    <FormItem className={formItemClassName}>
      {label}
      {input}
      {/*isPrinting && (
        <div {...other} {...textareaProps} className={textareaClasses}>
          {other.value}
        </div>
      )*/}
      {helper}
      {error}
    </FormItem>
  );
});

export default TextArea;
