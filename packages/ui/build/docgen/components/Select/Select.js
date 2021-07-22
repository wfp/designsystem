"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _Input = _interopRequireDefault(require("../Input"));

var _excluded = ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel", "small", "invalid", "invalidText", "helperText", "light", "name", "inputRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

var Select = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      id = props.id,
      inline = props.inline,
      labelText = props.labelText,
      disabled = props.disabled,
      children = props.children,
      iconDescription = props.iconDescription,
      hideLabel = props.hideLabel,
      small = props.small,
      invalid = props.invalid,
      invalidText = props.invalidText,
      helperText = props.helperText,
      light = props.light,
      name = props.name,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? ref : _props$inputRef,
      other = _objectWithoutProperties(props, _excluded);

  var usedId = id ? id : name;
  var selectClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--select--inline"), inline), _defineProperty(_classNames, "".concat(prefix, "--select--small"), small), _defineProperty(_classNames, "".concat(prefix, "--select--light"), light), _defineProperty(_classNames, "".concat(prefix, "--select--invalid"), invalid), _defineProperty(_classNames, "".concat(prefix, "--select--disabled"), disabled), _defineProperty(_classNames, className, className), _classNames));
  var ariaProps = {};

  if (invalid) {
    //TODO: check if correct
    ariaProps['aria-describedby'] = usedId;
  }

  var input = function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: selectClasses
    }, /*#__PURE__*/_react.default.createElement("select", _extends({}, other, ariaProps, {
      id: usedId,
      name: name,
      className: "".concat(prefix, "--select-input"),
      disabled: disabled || undefined,
      "data-invalid": invalid || undefined,
      "aria-invalid": invalid || undefined,
      ref: inputRef
    }), children), /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: _icons.iconCaretDown,
      className: "".concat(prefix, "--select__arrow"),
      description: iconDescription
    }));
  }();

  return /*#__PURE__*/_react.default.createElement(_Input.default, props, function () {
    return input;
  });
});

Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: _propTypes.default.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: _propTypes.default.string,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: _propTypes.default.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: _propTypes.default.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `<input>` changes
   */
  onChange: _propTypes.default.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: _propTypes.default.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.bool]),

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: _propTypes.default.bool,

  /**
   * Specify whether you want the small version of this control
   */
  small: _propTypes.default.bool
};
Select.defaultProps = {
  disabled: false,
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = Select;
exports.default = _default;