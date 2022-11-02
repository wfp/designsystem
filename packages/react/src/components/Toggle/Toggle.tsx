import PropTypes from 'prop-types';
import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */
type ToggleProps = PropsWithChildren<{
  defaultToggled?: boolean;
  toggled?: boolean;
  labelA: string;
  labelB: string;
  onToggle?: (
    value: boolean,
    htmlFor: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  className?: Argument;
  id?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Toggle: React.FC<ToggleProps> = ({
  className,
  defaultToggled,
  toggled,
  onChange,
  onToggle,
  id,
  name,
  labelA,
  labelB,
  ...other
}) => {
  const { prefix } = useSettings();
  let input;
  const wrapperClasses = classNames({
    [`${prefix}--form-item`]: true,
    [className]: className,
  });

  const checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  const htmlFor = id ? id : name;

  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        {...checkedProps}
        type="checkbox"
        id={htmlFor}
        className={`${prefix}--toggle`}
        onChange={(evt) => {
          onChange && onChange(evt);
          onToggle && onToggle(input.checked, htmlFor, evt);
        }}
        ref={(el) => {
          input = el;
        }}
      />

      <label className={`${prefix}--toggle__label`} htmlFor={htmlFor}>
        <span className={`${prefix}--toggle__text--left`}>{labelA}</span>
        <span className={`${prefix}--toggle__appearance`} />
        <span className={`${prefix}--toggle__text--right`}>{labelB}</span>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: PropTypes.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: PropTypes.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: PropTypes.func,

  /**
   * Provide an id that unique represents the underlying `input`
   */
  id: PropTypes.string,

  /**
   * Provide an name that unique represents the underlying `input`
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify whether the control is toggled
   */
  toggled: PropTypes.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: PropTypes.string.isRequired,

  /**
   * Specify the label for the "on" position
   */
  labelB: PropTypes.string.isRequired,
};

Toggle.defaultProps = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  name: 'toggle',
  onToggle: () => {},
};

export default Toggle;
