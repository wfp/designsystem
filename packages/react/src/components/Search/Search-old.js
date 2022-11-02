import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input';
import { Search as SearchIcon, Close } from '@un/icons-react';

/** Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. */

const Search = (props) => {
  const { prefix } = useSettings();

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
      onChange(evt.target.value, evt);
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
    <Input
      {...props}
      formItemClassName={numberInputClasses}
      inputWrapperClassName={`${prefix}--search-input__wrapper`}>
      {() => {
        return (
          <>
            <SearchIcon
              description={labelText}
              className={`${prefix}--search-magnifier-icon`}
              onClick={onSearchIconClick}
            />

            <input
              className="wfp--search-input"
              type="text"
              {...other}
              {...newProps}
              ref={_inputRef}
            />
            <button
              className={clearClasses}
              onClick={clearSearch}
              type="button"
              aria-label={closeButtonLabelText}>
              <Close description={closeButtonLabelText} />
            </button>
          </>
        );
      }}
    </Input>
  );
};

Search.propTypes = {
  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * The new value is available first arg 'searchValue' and evt object if needed is on second arg.
   * i.e.
   * const handleChange = (searchValue, evt) => {
   * console.log("searchValue", searchValue); // a string
   * console.log("evt", evt); // the whole event object
   * }
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func,
};

Search.defaultProps = {
  disabled: false,
};

export default Search;
