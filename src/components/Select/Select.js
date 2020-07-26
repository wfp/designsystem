/**
 * Modified for WFP 2019 (forked from Carbon Components Copyright IBM Corp. 2016, 2018)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { iconCaretDown } from '@wfp/icons';

import Icon from '../Icon';
import settings from '../../globals/js/settings';
import Input from '../Input';
const { prefix } = settings;

function Select(props) {
  const {
    className,
    id,
    inline,
    labelText,
    disabled,
    children,
    iconDescription,
    hideLabel,
    small,
    invalid,
    invalidText,
    helperText,
    light,
    inputRef,
    ...other
  } = props;

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
    ariaProps['aria-describedby'] = errorId;
  }
  const input = (() => {
    return (
      <div className={selectClasses}>
        <select
          {...other}
          {...ariaProps}
          id={usedId}
          className={`${prefix}--select-input`}
          disabled={disabled || undefined}
          data-invalid={invalid || undefined}
          aria-invalid={invalid || undefined}
          ref={inputRef}>
          {children}
        </select>
        <Icon
          icon={iconCaretDown}
          className={`${prefix}--select__arrow`}
          description={iconDescription}
        />
      </div>
    );
  })();

  return <Input {...props}>{() => input}</Input>;
}

Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: PropTypes.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: PropTypes.string,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying <input> changes
   */
  onChange: PropTypes.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: PropTypes.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,
  /**
   * Specify whether you want the small version of this control
   */
  small: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false,
};

export default Select;
