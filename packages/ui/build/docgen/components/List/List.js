"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.List = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "colon", "kind", "small"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** List component show a number of connected items written consecutively, typically one below the other. */

var List = function List(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      colon = _ref.colon,
      kind = _ref.kind,
      small = _ref.small,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames2.default)("".concat(prefix, "--list"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--list--").concat(kind), kind), _defineProperty(_classnames, "".concat(prefix, "--list--small"), small), _defineProperty(_classnames, "".concat(prefix, "--list--colon"), colon), _classnames));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, kind == "ordered" ? /*#__PURE__*/_react.default.createElement("ol", _extends({
    className: classNames
  }, other), children) : /*#__PURE__*/_react.default.createElement("ul", _extends({
    className: classNames
  }, other), children));
};

exports.List = List;
List.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: _propTypes.default.node,

  /**
   * Specify a custom className
   */
  className: _propTypes.default.string,

  /**
   * Specify if colons should be used
   */
  colon: _propTypes.default.bool,

  /**
   * Specify a kind.
   */
  kind: _propTypes.default.oneOf(['unstyled', 'simple-inline', 'details', 'unordered', 'ordered', 'tooltip']),

  /**
   * Specify if the List should be small
   */
  small: _propTypes.default.bool
};
List.defaultProps = {
  kind: 'unstyled',
  colon: false,
  small: false
};
var _default = List;
exports.default = _default;