"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/**
 * The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them. */

var Breadcrumb = function Breadcrumb(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames2.default)(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--breadcrumb"), true), _defineProperty(_classnames, "".concat(prefix, "--breadcrumb--no-trailing-slash"), true), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classNames
  }, other), children);
};

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string
};
var _default = Breadcrumb;
exports.default = _default;