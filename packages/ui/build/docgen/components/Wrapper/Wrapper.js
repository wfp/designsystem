"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pageWidths = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["background", "backgroundStyle", "children", "className", "pageWidth", "mobilePageWidth", "spacing"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
var pageWidths = ['sm', 'md', 'lg', 'full'];
/** Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width. */

exports.pageWidths = pageWidths;

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

  var wrapperClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--wrapper"), true), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-lg"), pageWidth === 'narrow' || pageWidth === 'lg'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-md"), pageWidth === 'narrower' || pageWidth === 'md'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-sm"), pageWidth === 'narrowest' || pageWidth === 'sm'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-xs"), pageWidth === 'narrowest' || pageWidth === 'xs'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--width-mobile-full"), mobilePageWidth === 'full'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--spacing-md"), spacing === 'md'), _defineProperty(_classNames, "".concat(prefix, "--wrapper--spacing-xl"), spacing === 'xl'), _defineProperty(_classNames, "".concat(className), className), _classNames));

  if (background || backgroundStyle) {
    var _classNames2;

    var backgroundClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--wrapper--background-lighter"), background === 'lighter'), _defineProperty(_classNames2, "".concat(prefix, "--wrapper--background-dark"), background === 'dark'), _classNames2));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: backgroundClasses,
      style: backgroundStyle
    }, /*#__PURE__*/_react.default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children);
  }
};

Wrapper.propTypes = {
  /**
   * The content which should be displayed
   */
  children: _propTypes.default.node,

  /**
  Specify additional className which will be added
  */
  className: _propTypes.default.string,

  /**
    `xs` `sm` `md` `lg`:  Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` 
  */
  pageWidth: _propTypes.default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
    Width on mobile devices
  */
  mobilePageWidth: _propTypes.default.string,

  /**
    `full` `sm` `md` `lg`:  Width on mobile devices `full`: `100%`      
  */
  spacing: _propTypes.default.string
};
var _default = Wrapper;
exports.default = _default;