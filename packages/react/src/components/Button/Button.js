import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */
const Button = ({
  children,
  className,
  disabled,
  small,
  large,
  kind,
  allCaps,
  href,
  iconReverse,
  tabIndex,
  type,
  useFlexbox,
  icon,
  iconDescription,
  animation = 1500,
  onClick,
  ...other
}) => {
  const { prefix } = useSettings();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => endAnimation(), animation);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const buttonClasses = classNames(className, {
    [`${prefix}--btn`]: true,
    [`${prefix}--btn--sm`]: small,
    [`${prefix}--btn--lg`]: large,
    [`${prefix}--btn--icon-reverse`]: iconReverse,
    [`${prefix}--btn--flexbox`]: useFlexbox,
    [`${prefix}--btn--icon-only`]: icon && children === undefined,
    [`${prefix}--btn--primary`]: kind === 'primary',
    [`${prefix}--btn--danger`]: kind === 'danger',
    [`${prefix}--btn--accent`]: kind === 'accent',
    [`${prefix}--btn--secondary`]: kind === 'secondary',
    [`${prefix}--btn--navigation`]: kind === 'navigation',
    [`${prefix}--btn--ghost`]: kind === 'ghost',
    [`${prefix}--btn--inverse--primary`]: kind === 'inverse--primary',
    [`${prefix}--btn--inverse`]: kind === 'inverse',
    [`${prefix}--btn--danger--primary`]: kind === 'danger--primary',
    [`${prefix}--btn--danger--secondary`]: kind === 'danger--secondary',
    [`${prefix}--btn--tertiary`]: kind === 'tertiary',
    [`${prefix}--btn--animating`]: count,
    [`${prefix}--btn--all-caps`]: allCaps,
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };

  const Icon = icon;

  const buttonImage =
    icon && React.isValidElement(icon) ? (
      <span className={`${prefix}--btn__icon`}>{icon}</span>
    ) : icon ? (
      <Icon description={iconDescription} className={`${prefix}--btn__icon`} />
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
      {iconReverse && buttonImage}
      {children}
      {!iconReverse && buttonImage}
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
   * FOR DESIGNERS
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a large variant
   */
  large: PropTypes.bool,

  /**
   * FOR DESIGNERS
   * Specify the kind of Button you want to create
   */
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'danger',
    'ghost',
    'inverse--primary',
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
  icon: PropTypes.node,
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
