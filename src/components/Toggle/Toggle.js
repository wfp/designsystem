import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Toggle = ({
  className,
  defaultToggled,
  toggled,
  onChange,
  onToggle,
  id,
  input,
  labelA,
  labelB,
  ...other
}) => {
  let inputElement;
  const wrapperClasses = classNames({
    'wfp--form-item': true,
    [className]: className,
  });

  const checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  const onChangeInput = evt => {
    /* Regular Form */
    if (onChange) onChange(input.checked, id, evt);
    /* Redux Form */
    if (input && input.onChange) input.onChange(input.checked);
  };

  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        {...input}
        {...checkedProps}
        type="checkbox"
        id={id}
        className="wfp--toggle"
        onChange={evt => {
          onChange && onChange(evt);
          onToggle(inputElement.checked, id, evt);
          /* Redux Form */
          if (input && input.onChange) input.onChange(input.checked);
        }}
        ref={el => {
          inputElement = el;
        }}
      />

      <label className="wfp--toggle__label" htmlFor={id}>
        <span className="wfp--toggle__text--left">{labelA}</span>
        <span className="wfp--toggle__appearance" />
        <span className="wfp--toggle__text--right">{labelB}</span>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  defaultToggled: PropTypes.bool,
  onToggle: PropTypes.func,
  id: PropTypes.string.isRequired,
  toggled: PropTypes.bool,
  labelA: PropTypes.string.isRequired,
  labelB: PropTypes.string.isRequired,
};

Toggle.defaultProps = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  onToggle: () => {},
};

export default Toggle;
