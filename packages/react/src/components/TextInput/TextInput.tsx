import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input/Input';
import { useInput } from '../Input/useInput';
import * as HookForm from 'react-hook-form';
import { InputModes } from '../../typesLegacy/utils';

/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  helperText?: React.ReactNode;
  labelText?: React.ReactNode;
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
}

const TextInput: React.FC<TextInputProps> = React.forwardRef((props, ref) => {
  const {
    disabled,
    labelText,
    className,
    id,
    formItemClassName,
    placeholder,
    type,
    //onChange,
    //onClick,
    hideLabel,
    invalid,
    invalidText,
    helperText,
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

  const { onChange, onClick, ...input } = useInput(props);

  return (
    <Input {...props} formItemClassName={formItemClassName}>
      <input
        pattern={pattern}
        type={type}
        {...other}
        ref={ref}
        classNames={textInputClasses}
        {...input}
      />
    </Input>
  );
});

export default TextInput;
