function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var ButtonSkeleton = function ButtonSkeleton(_ref) {
  var small = _ref.small,
      href = _ref.href;
  var buttonClasses = classNames({
    'wfp--skeleton': true,
    'wfp--btn': true,
    'wfp--btn--sm': small
  });
  var commonProps = {
    className: buttonClasses
  };
  var button = /*#__PURE__*/React.createElement("button", _extends({}, commonProps, {
    type: "button"
  }));
  var anchor = /*#__PURE__*/React.createElement("a", _extends({}, commonProps, {
    href: href,
    role: "button"
  })); // eslint-disable-line

  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  small: PropTypes.bool,
  href: PropTypes.string
};
ButtonSkeleton.defaultProps = {
  small: false
};
export default ButtonSkeleton;