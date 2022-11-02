import React, { useState, useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input from '../Input';
import { Search as SearchIcon, Close } from '@un/icons-react';
import * as HookForm from 'react-hook-form';

/** Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. */
interface SearchProps {
  helperText?: string;
  labelText?: string;
  defaultValue?: string | number;
  formItemClassName?: string;
  inputWrapperClassName?: string;
  hideLabel?: boolean;
  invalid?: boolean | HookForm.FieldError;
  invalidText?: string | React.ReactNode;
  additional?: React.ReactNode;
  children?: React.ReactNode | string;
  light?: boolean;
  closeButtonLabelText?: string;
  disabled?: boolean;
  id?: string;
  hideControls?: boolean;
  kind?: 'large' | 'small' | 'main' | 'light' | 'banner';
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  onSearchIconClick?: () => void;
  value?: string;
  className?: string;
}

const Search: React.FC<PropsWithChildren<SearchProps>> = (props) => {
  const { prefix } = useSettings();

  const {
    className,
    closeButtonLabelText,
    disabled,
    id,
    hideLabel,
    hideControls,
    labelText,
    kind = 'large',
    onChange = () => {},
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
      //   onChange(evt.target.value);
      onChange(evt.target.value, evt); //TODO: why are we passing evt as second arg
    }
  };

  const clearSearch = () => {
    const valueState = '';
    setValue(valueState);
    onChange(valueState); // TODO: why are we calling onChange
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

export default Search;
