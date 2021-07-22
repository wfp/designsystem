var _excluded = ["children", "className", "info"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Credits are mostly used when a photo need a source attribution. */

var Credits = function Credits(_ref) {
  var children = _ref.children,
      className = _ref.className,
      info = _ref.info,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--credits"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--credits__info")
  }, info), children);
};

Credits.propTypes = {
  /**
  Specify the image or content
  */
  children: PropTypes.node,

  /**
  Additional className which will be added
  */
  className: PropTypes.string,

  /**
  Specifiy the info content
  */
  info: PropTypes.string
};
export default Credits;