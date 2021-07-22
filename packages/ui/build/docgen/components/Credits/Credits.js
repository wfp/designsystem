"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["children", "className", "info"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Credits are mostly used when a photo need a source attribution. */

var Credits = function Credits(_ref) {
  var children = _ref.children,
      className = _ref.className,
      info = _ref.info,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames.default)("".concat(prefix, "--credits"), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--credits__info")
  }, info), children);
};

Credits.propTypes = {
  /**
  Specify the image or content
  */
  children: _propTypes.default.node,

  /**
  Additional className which will be added
  */
  className: _propTypes.default.string,

  /**
  Specifiy the info content
  */
  info: _propTypes.default.string
};
var _default = Credits;
exports.default = _default;