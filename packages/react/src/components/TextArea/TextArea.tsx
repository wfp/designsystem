import * as React from 'react';
import classNames from 'classnames';
import FormItem from '../FormItem';
import useSettings from '../../hooks/useSettings';
import { InputProps } from '../Input';

interface TextAreaProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
}

export type Ref = HTMLTextAreaElement;

export const TextArea = React.forwardRef<Ref, TextAreaProps>((props, ref) => {
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
    helperText,
    fullWidth,
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
      ref={ref}
      className={textareaClasses}
      data-invalid
    />
  ) : (
    <textarea
      {...other}
      ref={ref}
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

TextArea.displayName = 'TextArea';

export default TextArea;
