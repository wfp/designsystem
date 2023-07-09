import * as React from 'react';
import classNames from 'classnames';
import { /* CaretDown, */ ChevronDown } from '@un/icons-react';

import useSettings from '../../hooks/useSettings';
import Input, { InputProps, useInput } from '../Input';
import { UseInputProps } from '../Input/useInput';

interface SelectProps
  extends InputProps,
    React.ComponentPropsWithRef<'select'> {
  inline?: boolean;
  defaultValue?: string;
  iconDescription?: string;
}

/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

const Select: React.FC<SelectProps> = React.forwardRef((props, ref) => {
  const {
    className,
    inline,
    disabled,
    children,
    iconDescription,
    // hideLabel,

    light,
  } = props;

  const { prefix } = useSettings();

  const selectClasses = classNames(
    {
      [`${prefix}--select-input`]: true,
      [`${prefix}--select--inline`]: inline,
      [`${prefix}--select--light`]: light,
      //      [`${prefix}--select--invalid`]: invalid,
      [`${prefix}--select--disabled`]: disabled,
    },
    className
  );

  /*const ariaProps = {};
 if (invalid) {
    //TODO: check if correct
    ariaProps['aria-describedby'] = usedId;
  }*/
  const useInputProps = props as UseInputProps;
  const { inputProps, wrapperProps } = useInput({
    ...useInputProps,
    inputClassName: selectClasses,
  });

  return (
    <Input {...wrapperProps} inputWrapperClassName={`${prefix}--select`}>
      <select {...inputProps} ref={ref as React.Ref<HTMLSelectElement>}>
        {children}
      </select>
      <ChevronDown
        className={`${prefix}--select__arrow`}
        description={iconDescription}
      />
    </Input>
  );
});

Select.displayName = 'Select';

export default Select;
