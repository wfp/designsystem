import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input/Input';
import useInput from '../Input/useInput';
import * as HookForm from 'react-hook-form';
import { InputModes } from '../../types/utils';

/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */
type TextInputProps = PropsWithChildren<{
  className?: Argument;
  helperText?: string;
  labelText?: string;
  defaultValue?: string | number;
  placeholder?: string;
  formItemClassName?: string;
  inputWrapperClassName?: string;
  hideLabel?: boolean;
  invalid?: boolean | HookForm.FieldError;
  invalidText?: string | React.ReactNode;
  additional?: React.ReactNode;
  children?: React.ReactNode;
  light?: boolean;
  type?: InputModes | string;
  value?: string | number;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  pattern?: string;
}>;

const TextInput: React.FC<TextInputProps> = React.forwardRef((props, ref) => {
  const {
    disabled,
    labelText,
    className,
    id,
    formItemClassName,
    placeholder,
    type,
    onChange,
    onClick,
    hideLabel,
    invalid,
    invalidText,
    helperText,
    inputRef = ref,
    pattern,
    required,
    ...other
  } = props;

  const { prefix } = useSettings();

  const textInputClasses = classNames(`${prefix}--text`, className, {
    [`${prefix}--text--helpertext`]: helperText,
    [`${prefix}--text--nolabel`]: hideLabel,
    [`${prefix}--text--required`]: required,
  });

  const newProps = {
    disabled,
    id,
  };

  const input = useInput();

  return (
    <Input {...props} formItemClassName={formItemClassName}>
      <input
        pattern={pattern}
        type={type}
        {...other}
        {...newProps}
        ref={inputRef}
        className={textInputClasses}
        {...input}
      />
    </Input>
  );
});

export default TextInput;
