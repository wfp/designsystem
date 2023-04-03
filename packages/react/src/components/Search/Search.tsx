import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Input, { InputProps } from '../Input';
import { Search as SearchIcon, Close } from '@un/icons-react';

/** Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. */
interface SearchProps extends InputProps {
  defaultValue?: string | number;
  formItemClassName?: string;
  inputWrapperClassName?: string;
  hideLabel?: boolean;
  children?: React.ReactNode | string;
  light?: boolean;
  /**
   * The text for the close Button
   */
  closeButtonLabelText?: string;
  //  placeholder?: string;
  disabled?: boolean;
  id?: string;
  hideControls?: boolean;
  /**
   * Specify a style for the search input
   */
  kind?: 'large' | 'small' | 'main' | 'light' | 'banner';
  onChange?: (
    event?: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => void;
  onSearchIconClick?: () => void;
  small?: boolean;
  value?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = React.forwardRef((props, ref) => {
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange = () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSearchIconClick = () => {},
    helperText,
    light,
    ...other
  } = props;

  const initialValue = props.value;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const newInputRef = useRef<HTMLInputElement>(null);

  const _inputRef = ref ? ref : newInputRef;

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
    // onChange(valueState); // TODO: why are we calling onChange
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
      <SearchIcon
        description={labelText}
        className={`${prefix}--search-magnifier-icon`}
        onClick={onSearchIconClick}
      />

      <input
        className={`${prefix}--search-input`}
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
    </Input>
  );
});

Search.displayName = 'Search';

export default Search;
