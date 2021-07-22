"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "children", "longForm"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** A form is a group of related input controls that allows users to provide data or configure options. */

var Form = function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      longForm = _ref.longForm,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames2.default)("".concat(prefix, "--form"), _defineProperty({}, "".concat(prefix, "--form-long"), longForm === true), className);
  return /*#__PURE__*/_react.default.createElement("form", _extends({
    className: classNames
  }, other), children);
};

Form.propTypes = {
  /**
   * Provide children to be rendered inside of the <form> element
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied on the containing <form> node
   */
  className: _propTypes.default.string,

  /**
   * Default margin is added to each form input
   */
  longForm: _propTypes.default.bool
};
Form.defaultProps = {
  longForm: true
};
var _default = Form;
exports.default = _default;