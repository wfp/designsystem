import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import { ButtonTypes } from '../../prop-types/types';

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */
const Button = ({
  children,
  className,
  disabled,
  small,
  kind,
  href,
  iconReverse,
  tabIndex,
  type,
  icon,
  iconDescription,
  onClick,
  ...other
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => endAnimation(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const buttonClasses = classNames(className, {
    'wfp--btn': true,
    'wfp--btn--sm': small,
    'wfp--btn--icon-reverse': iconReverse,
    'wfp--btn--icon-only': icon && children === undefined,
    'wfp--btn--primary': kind === 'primary',
    'wfp--btn--danger': kind === 'danger',
    'wfp--btn--accent': kind === 'accent',
    'wfp--btn--secondary': kind === 'secondary',
    'wfp--btn--navigation': kind === 'navigation',
    'wfp--btn--ghost': kind === 'ghost',
    'wfp--btn--inverse': kind === 'inverse',
    'wfp--btn--danger--primary': kind === 'danger--primary',
    'wfp--btn--tertiary': kind === 'tertiary',
    'wfp--btn--animating': count,
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };

  const buttonImage = icon ? (
    <Icon
      icon={Object(icon) === icon ? icon : undefined}
      name={Object(icon) !== icon ? icon : undefined}
      description={iconDescription}
      className="wfp--btn__icon"
    />
  ) : null;

  const endAnimation = () => {
    setCount(false);
  };

  const onClickAnimation = (e) => {
    if (onClick) {
      onClick(e);
    }
    setCount(true);
  };

  const button = (
    <button
      {...other}
      {...commonProps}
      disabled={disabled}
      type={type}
      onClick={onClickAnimation}
      ref={other.inputref}>
      {iconReverse && buttonImage}
      {children}
      {!iconReverse && buttonImage}
    </button>
  );

  const anchor = (
    <a
      {...other}
      {...commonProps}
      href={href}
      role="button"
      onClick={onClickAnimation}
      ref={other.inputref}>
      {children}
      {buttonImage}
    </a>
  );

  return href ? anchor : button;
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * Specify the kind of Button you want to create
   */
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'danger',
    'ghost',
    'inverse',
    'danger--primary',
    'tertiary',
    'navigation',
  ]),

  //ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired,
  }),
  /**
   * If specifying the `icon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: (props) => {
    if (props.icon && !props.iconDescription) {
      return new Error(
        'icon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  iconReverse: PropTypes.bool,
};

Button.defaultProps = {
  iconReverse: false,
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};

export default Button;
