function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';

var IconSkeleton = function IconSkeleton(_ref) {
  var style = _ref.style;
  var props = {
    style: style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "wfp--icon--skeleton"
  }, props));
};

IconSkeleton.propTypes = {
  /**
   * The CSS styles.
   */
  style: PropTypes.object
};
export default IconSkeleton;