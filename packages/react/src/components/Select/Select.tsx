/**
 * Modified for WFP 2019 (forked from Carbon Components Copyright IBM Corp. 2016, 2018)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import { CaretDown } from '@un/icons-react';

import useSettings from '../../hooks/useSettings';
import Input from '../Input';
import * as HookForm from 'react-hook-form';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  inline?: boolean;
  labelText?: React.ReactNode;
  defaultValue?: any;
  iconDescription?: string;
  hideLabel?: boolean;
  invalid?: boolean | HookForm.FieldError;
  invalidText?: string;
  helperText?: React.ReactNode;
  light?: boolean;
  small?: boolean;
  id?: string;
  disabled?: boolean;
  name?: string;
}
/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

const Select: React.FC<PropsWithChildren<SelectProps>> = React.forwardRef(
  (props, ref) => {
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
      inputRef = ref,
      ...other
    } = props;

    const { prefix } = useSettings();

    const usedId = id ? id : name;

    const selectClasses = classNames({
      [`${prefix}--select`]: true,
      [`${prefix}--select--inline`]: inline,
      [`${prefix}--select--small`]: small,
      [`${prefix}--select--light`]: light,
      [`${prefix}--select--invalid`]: invalid,
      [`${prefix}--select--disabled`]: disabled,
      [className]: className,
    });

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
            ref={inputRef}>
            {children}
          </select>
          <CaretDown
            className={`${prefix}--select__arrow`}
            description={iconDescription}
          />
        </div>
      );
    })();

    return <Input {...props}>{() => input}</Input>;
  }
);

export default Select;
