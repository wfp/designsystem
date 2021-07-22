"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Module = require("../Module");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _settings.default.prefix;
/** The FormWizard is a wrapper for creating Wizard forms. */

var FormWizard = function FormWizard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      formHeader = _ref.formHeader,
      formControls = _ref.formControls,
      sidebar = _ref.sidebar,
      stickySidebar = _ref.stickySidebar;
  var classes = {
    formControls: (0, _classnames.default)("".concat(prefix, "--form-wizard"), _defineProperty({}, "".concat(prefix, "--form-wizard--sticky"), stickySidebar), className)
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.formControls
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--form-wizard__sidebar")
  }, sidebar), /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "".concat(prefix, "--form-wizard__content"),
    noMargin: true
  }, formHeader && /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, formHeader), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, children), formControls && /*#__PURE__*/_react.default.createElement(_Module.ModuleFooter, null, formControls)));
};

FormWizard.propTypes = {
  /**
   * Specify a custom css class
   * which is added to the container
   */
  className: _propTypes.default.string,

  /**
   * Specify the custom
   * main content component
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Specify the custom
   * sidebar component
   */
  sidebar: _propTypes.default.node.isRequired,

  /**
   * Sticky sidebar
   */
  stickySidebar: _propTypes.default.bool
};
FormWizard.defaultProps = {};
var _default = FormWizard;
exports.default = _default;