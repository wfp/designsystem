import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input';
import Icon from '../Icon';
import { iconSearch, iconCloseGlyph } from '@wfp/icons';

const { prefix } = settings;

/** The number input component is used for entering numeric values and includes controls for incrementally increasing or decreasing the value */

function NumberInput(props) {
  const {
    additional,
    className,
    closeButtonLabelText,
    disabled,
    formItemClassName,
    id,
    hideLabel,
    hideControls,
    labelText,
    max,
    min,
    kind,
    step = 1,
    invalid,
    invalidText,
    onChange = () => {},
    onClick = () => {},
    onSearchIconClick = () => {},
    helperText,
    light,
    allowEmpty,
    inputRef,
    ...other
  } = props;

  const initialValue = props.value;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const newInputRef = useRef(null);
  var _inputRef = inputRef ? inputRef : newInputRef;

  const handleChange = (evt) => {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(parseFloat(evt.target.value), evt);
    }
  };

  const clearSearch = () => {
    const valueState = '';
    setValue(valueState);
    onChange(valueState);
  };

  const handleArrowClick = (evt, direction) => {
    let valueState = typeof value === 'string' ? Number(value) : value;
    valueState = isNaN(valueState) ? 0 : valueState;

    valueState =
      direction === 'down' ? valueState - step : valueState + parseFloat(step);

    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      evt.target.value = parseFloat(valueState);
      onClick(evt, direction);
      setValue(valueState);
      onChange(valueState, evt, direction);
    }
  };

  const numberInputClasses = classNames(`${prefix}--number`, className, {
    [`${prefix}--number--light`]: light,
    [`${prefix}--number--helpertext`]: helperText,
    [`${prefix}--number--nolabel`]: hideLabel,
    [`${prefix}--number--nocontrols`]: hideControls,
    'wfp--search': true,
    'wfp--search--lg': kind === 'large',
    'wfp--search--sm': kind === 'small',
    'wfp--search--main': kind === 'main',
    'wfp--search--banner': kind === 'banner',
    'wfp--search--light': kind === 'light',
  });

  const newProps = {
    disabled,
    id,
    max,
    min,
    step,
    onChange: handleChange,
    value: value,
  };

  const buttonProps = {
    disabled,
    type: 'button',
  };

  const clearClasses = classNames({
    'wfp--search-close': true,
    'wfp--search-close--hidden': !value,
  });

  return (
    <Input {...props} formItemClassName={numberInputClasses}>
      {() => {
        return (
          <>
            <Icon
              icon={iconSearch}
              description={labelText}
              className="wfp--search-magnifier"
              onClick={onSearchIconClick}
            />
            <input
              className="wfp--search-input"
              {...other}
              {...newProps}
              ref={_inputRef}
            />
            <button
              className={clearClasses}
              onClick={clearSearch}
              type="button"
              aria-label={closeButtonLabelText}>
              <Icon icon={iconCloseGlyph} description={closeButtonLabelText} />
            </button>
          </>
        );
      }}
    </Input>
  );
}

NumberInput.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

  /**
   * The maximum value.
   */
  max: PropTypes.number,

  /**
   * The minimum value.
   */
  min: PropTypes.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes.number,

  /**
   * Name property
   */
  name: PropTypes.string,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: PropTypes.string,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes.bool,

  /**
   * `true` to allow empty string.
   */
  closeButtonLabelText: PropTypes.string,
};

export default NumberInput;
