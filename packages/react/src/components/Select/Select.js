/**
 * Modified for WFP 2019 (forked from Carbon Components Copyright IBM Corp. 2016, 2018)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { ChevronDown } from '@un/icons-react';

import useSettings from '../../hooks/useSettings';
import Input from '../Input';

/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

const Select = React.forwardRef((props, ref) => {
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
        <ChevronDown
          className={`${prefix}--select__arrow`}
          description={iconDescription}
        />
      </div>
    );
  })();

  return <Input {...props}>{() => input}</Input>;
});

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
   * the underlying `<input>` changes
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
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

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
