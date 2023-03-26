import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import FormItem from '../FormItem';
import * as HookForm from 'react-hook-form';
import useSettings from '../../hooks/useSettings';
import { InputProps } from '../Input';

interface TextAreaProps extends InputProps {
  helperText?: string;
}

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

TextArea.displayName = 'TextArea';

export default TextArea;
