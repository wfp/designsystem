import * as React from 'react';
import classNames from 'classnames';
import { CaretDown } from '@un/icons-react';

import useSettings from '../../hooks/useSettings';
import Input from '../Input';

interface SelectProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLSelectElement> {
  inline?: boolean;
  labelText?: React.ReactNode;
  defaultValue?: string;
  iconDescription?: string;

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: React.ReactNode;
  /**
   * Specify whether you want the light version of this control
   */
  light?: boolean;
  /**
   * Specify whether you want the small version of this control
   */
  small?: boolean;
  id?: string;
  disabled?: boolean;
  name?: string;
  className?: string;
}
/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

const Select: React.FC<SelectProps> = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    inline,
    labelText, // eslint-disable-line
    disabled,
    children,
    iconDescription,
    // hideLabel,
    small,
    invalid,
    invalidText, // eslint-disable-line
    helperText, // eslint-disable-line
    light,
    name,

    ...other
  } = props;

  const { prefix } = useSettings();

  const usedId = id ? id : name;

  const selectClasses = classNames(
    {
      [`${prefix}--select`]: true,
      [`${prefix}--select--inline`]: inline,
      [`${prefix}--select--small`]: small,
      [`${prefix}--select--light`]: light,
      [`${prefix}--select--invalid`]: invalid,
      [`${prefix}--select--disabled`]: disabled,
    },
    className
  );

  const ariaProps = {};
  if (invalid) {
    //TODO: check if correct
    ariaProps['aria-describedby'] = usedId;
  }
  const input = (() => {
    return (
      <div className={selectClasses}>
        <select
          {...other}
          {...ariaProps}
          id={usedId}
          name={name}
          className={`${prefix}--select-input`}
          disabled={disabled || undefined}
          data-invalid={invalid || undefined}
          aria-invalid={invalid || undefined}
          ref={ref}>
          {children}
        </select>
        <CaretDown
          className={`${prefix}--select__arrow`}
          description={iconDescription}
        />
      </div>
    );
  })();

  return <Input {...props}>{input}</Input>;
});

Select.displayName = 'Select';

export default Select;
