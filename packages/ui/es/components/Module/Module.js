var _excluded = ["dark", "light", "centered", "children", "className", "margin", "fullHeight", "noMargin", "withHover"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** A Module is identifiable as a single, contained unit. */

var Module = function Module(_ref) {
  var _classnames;

  var dark = _ref.dark,
      light = _ref.light,
      centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      margin = _ref.margin,
      fullHeight = _ref.fullHeight,
      noMargin = _ref.noMargin,
      withHover = _ref.withHover,
      other = _objectWithoutProperties(_ref, _excluded);

  var wrapperClasses = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--module--dark"), dark), _defineProperty(_classnames, "".concat(prefix, "--module--no-margin"), noMargin), _defineProperty(_classnames, "".concat(prefix, "--module--full-height"), fullHeight), _defineProperty(_classnames, "".concat(prefix, "--module--margin-x"), margin === 'xs'), _defineProperty(_classnames, "".concat(prefix, "--module--margin-md"), margin === 'md'), _defineProperty(_classnames, "".concat(prefix, "--module--margin-lg"), margin === 'lg'), _defineProperty(_classnames, "".concat(prefix, "--module--light"), light), _defineProperty(_classnames, "".concat(prefix, "--module--with-hover"), withHover), _classnames), className, ["".concat(prefix, "--module")]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: wrapperClasses
  }, other), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--module__inner")
  }, children));
};

Module.propTypes = {
  /**
   * * Specify the content of the `Module`, usually a `ModuleHeader` `ModuleBody` and `ModuleFooter`component.
   */
  children: PropTypes.node,

  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,

  /**
   * Disables the default margin
   */
  noMargin: PropTypes.bool,

  /**
   * Use 100% height of parent container
   */
  fullHeight: PropTypes.bool,

  /**
   * Light appearance (for white backgrounds)
   */
  light: PropTypes.bool,

  /**
   * Dark appearance
   */
  dark: PropTypes.bool,

  /**
   * Additional hover styling
   */
  withHover: PropTypes.bool
};
export default Module;