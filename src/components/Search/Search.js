import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input';
import Icon from '../Icon';
import { iconSearch, iconCloseGlyph } from '@wfp/icons';

const { prefix } = settings;

/** Search enables users to specify a word or a phrase to find particular relevant pieces of content without the use of navigation. Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content. */

function Search(props) {
  const {
    className,
    closeButtonLabelText,
    disabled,
    formItemClassName,
    id,
    hideLabel,
    hideControls,
    labelText,
    kind = 'large',
    onChange = () => {},
    onClick = () => {},
    onSearchIconClick = () => {},
    helperText,
    light,
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
    onChange: handleChange,
    value: value,
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

Search.propTypes = {
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
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

   /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

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
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,
  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,
};

export default Search;
