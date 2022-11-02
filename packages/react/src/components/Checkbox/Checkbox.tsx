/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
  labelText?: React.ReactNode;
  hideLabel?: boolean;
  wrapperClassName?: string;
  title?: string;
}

const Checkbox: React.FC<PropsWithChildren<CheckboxProps>> = React.forwardRef(
  function Checkbox(
    {
      className,
      id,
      labelText,
      onChange,
      indeterminate,
      hideLabel,
      wrapperClassName,
      title = '',
      ...other
    },
    ref
  ) {
    const { prefix } = useSettings();
    const labelClasses = classNames(`${prefix}--checkbox-label`, className);
    const innerLabelClasses = classNames(`${prefix}--checkbox-label-text`, {
      [`${prefix}--visually-hidden`]: hideLabel,
    });
    const wrapperClasses = classNames(
      `${prefix}--form-item`,
      `${prefix}--checkbox-wrapper`,
      wrapperClassName
    );

    return (
      <div className={wrapperClasses}>
        <input
          {...other}
          type="checkbox"
          onChange={(evt) => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
          className={`${prefix}--checkbox`}
          id={id || other.name}
          ref={(el) => {
            if (el) {
              if (indeterminate) {
                el.indeterminate = indeterminate;
              }
            }
            if (typeof ref === 'function') {
              ref(el);
            } else if (Object(ref) === ref) {
              ref.current = el;
            }
          }}
        />
        <label htmlFor={id} className={labelClasses} title={title || null}>
          <span className={innerLabelClasses}>{labelText}</span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
