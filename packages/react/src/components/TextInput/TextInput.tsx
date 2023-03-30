import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input/Input';
import { useInput } from '../Input/useInput';
import { InputProps } from '../Input';

/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

interface TextInputProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef((props, ref) => {
  const {
    className,
    formItemClassName,
    type,
    //onChange,
    //onClick,
    hideLabel,
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

  const input = useInput(props);

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
