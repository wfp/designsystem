import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ButtonSkeleton = ({ small, href }) => {
  const buttonClasses = classNames({
    'wfp--skeleton': true,
    'wfp--btn': true,
    'wfp--btn--sm': small,
  });

  const commonProps = {
    className: buttonClasses,
  };

  const button = <button {...commonProps} type="button" />;

  const anchor = <a {...commonProps} href={href} role="button" />; // eslint-disable-line

  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  small: PropTypes.bool,
  href: PropTypes.string,
};

ButtonSkeleton.defaultProps = {
  small: false,
};

export default ButtonSkeleton;
