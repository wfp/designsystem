"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@wfp/icons-react");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "hometext"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;

var BreadcrumbHome = function BreadcrumbHome(_ref) {
  var className = _ref.className,
      hometext = _ref.hometext,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = (0, _classnames.default)("".concat(prefix, "--breadcrumb-home"), className);
  return /*#__PURE__*/_react.default.createElement(_iconsReact.Home16 //icon={iconHome}
  , _extends({
    fill: "#0b77c2",
    width: "14",
    height: "14",
    description: hometext,
    className: classNames
  }, other));
};

BreadcrumbHome.propTypes = {
  /**
   * Specify an optional className to be added to the `Home` Icon
   */
  className: _propTypes.default.string,

  /**
   * Specify an optional text for the `Home` Icon
   */
  hometext: _propTypes.default.string
};
var _default = BreadcrumbHome;
exports.default = _default;