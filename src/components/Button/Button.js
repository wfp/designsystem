import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  disabled,
  small,
  kind,
  href,
  tabIndex,
  type,
  icon,
  iconDescription,
  ...other
}) => {
  const buttonClasses = classNames(className, {
    'wfp--btn': true,
    'wfp--btn--sm': small,
    'wfp--btn--primary': kind === 'primary',
    'wfp--btn--danger': kind === 'danger',
    'wfp--btn--secondary': kind === 'secondary',
    'wfp--btn--ghost': kind === 'ghost',
    'wfp--btn--danger--primary': kind === 'danger--primary',
    'wfp--btn--tertiary': kind === 'tertiary',
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };

  const buttonImage = icon ? (
    
    <Icon name={icon} description={iconDescription} className="wfp--btn__icon" />
  ) : null;

  const button = (
    <button {...other} {...commonProps} disabled={disabled} type={type}>
      {children}
      {buttonImage}
    </button>
  );

  const anchor = (
    <a {...other} {...commonProps} href={href} role="button">
      {children}
      {buttonImage}
    </a>
  );

  return href ? anchor : button;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'ghost',
    'danger--primary',
    'tertiary',
  ]).isRequired,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  role: PropTypes.string,
  icon: PropTypes.string,
  iconDescription: props => {
    if (props.icon && !props.iconDescription) {
      return new Error(
        'icon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },
};

Button.defaultProps = {
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};

export default Button;
