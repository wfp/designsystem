import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { InputProps, useInput } from '../Input';
import Input from '../Input/Input';
import { UseInputProps } from '../Input/useInput';

/*
 ** Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 */
interface TextAreaProps
  extends InputProps,
    React.ComponentPropsWithRef<'textarea'> {
  fullWidth?: boolean;
}

export type Ref = HTMLTextAreaElement;

export const TextArea = React.forwardRef<Ref, TextAreaProps>((props, ref) => {
  const { className, fullWidth } = props;

  const { prefix } = useSettings();

  const textareaClasses = classNames(`${prefix}--text-area`, className, {
    [`${prefix}--textarea-fullwidth`]: fullWidth,
  });

  const useInputProps = props as UseInputProps;
  const input = useInput({ ...useInputProps, inputClassName: textareaClasses });

  return (
    <Input {...input.wrapperProps}>
      <textarea {...input.inputProps} ref={ref} />
    </Input>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
