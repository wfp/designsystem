import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input/Input';
import { UseInputProps, useInput } from '../Input/useInput';
import { InputProps } from '../Input';

/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

interface TextInputProps
  extends InputProps,
    React.ComponentPropsWithRef<'input'> {}

const TextInput: React.FC<TextInputProps> = React.forwardRef((props, ref) => {
  const {
    //className,
    //formItemClassName,
    hideLabel,
    helperText,
    pattern,
    required,
  } = props;

  const { prefix } = useSettings();

  const inputClassName = classNames(
    `${prefix}--input`,
    `${prefix}--text-input`,
    //className,
    {
      [`${prefix}--text--helpertext`]: helperText,
      [`${prefix}--text--nolabel`]: hideLabel,
      [`${prefix}--text--required`]: required,
    }
  );

  const useInputProps = props as UseInputProps;
  const { inputProps, wrapperProps } = useInput({
    ...useInputProps,
    inputClassName,
  });

  return (
    <Input {...wrapperProps} /*formItemClassName={formItemClassName} */>
      <input pattern={pattern} {...inputProps} ref={ref} />
    </Input>
  );
});

export default TextInput;
