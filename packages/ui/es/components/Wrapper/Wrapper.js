var _excluded = ["background", "backgroundStyle", "children", "className", "pageWidth", "mobilePageWidth", "spacing"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
export var pageWidths = ['sm', 'md', 'lg', 'full'];
/** Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width. */

var Wrapper = function Wrapper(props) {
  var _classNames;

  var background = props.background,
      backgroundStyle = props.backgroundStyle,
      children = props.children,
      className = props.className,
      pageWidth = props.pageWidth,
      mobilePageWidth = props.mobilePageWidth,
      spacing = props.spacing,
      other = _objectWithoutProperties(props, _excluded);

  var wrapperClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--wrapper"), true), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-lg"), pageWidth === 'narrow' || pageWidth === 'lg'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-md"), pageWidth === 'narrower' || pageWidth === 'md'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-sm"), pageWidth === 'narrowest' || pageWidth === 'sm'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-xs"), pageWidth === 'narrowest' || pageWidth === 'xs'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-mobile-full"), mobilePageWidth === 'full'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--spacing-md"), spacing === 'md'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--spacing-xl"), spacing === 'xl'), _defineProperty(_classNames, "".concat(className), className), _classNames));

  if (background || backgroundStyle) {
    var _classNames2;

    var backgroundClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--wrapper--background-lighter"), background === 'lighter'), _defineProperty(_classNames2, "".concat(prefix, "--wrapper--background-dark"), background === 'dark'), _classNames2));
    return /*#__PURE__*/React.createElement("div", {
      className: backgroundClasses,
      style: backgroundStyle
    }, /*#__PURE__*/React.createElement("div", _extends({
      className: wrapperClasses
    }, other), children));
  } else {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: wrapperClasses
    }, other), children);
  }
};

Wrapper.propTypes = {
  /**
   * The content which should be displayed
   */
  children: PropTypes.node,

  /**
  Specify additional className which will be added
  */
  className: PropTypes.string,

  /**
    `xs` `sm` `md` `lg`:  Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` 
  */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),

  /**
    Width on mobile devices
  */
  mobilePageWidth: PropTypes.string,

  /**
    `full` `sm` `md` `lg`:  Width on mobile devices `full`: `100%`      
  */
  spacing: PropTypes.string
};
export default Wrapper;