"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _FormItem = _interopRequireDefault(require("../FormItem"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["additional", "addonBefore", "addonAfter", "labelText", "children", "className", "iconDescription", "id", "formItemClassName", "inputWrapperClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "required"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/**
 * Input is a wrapper for custom inputs providing the label, helperText and errors. */

var Input = function Input(_ref) {
  var _classNames, _classNames2;

  var additional = _ref.additional,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter,
      labelText = _ref.labelText,
      children = _ref.children,
      className = _ref.className,
      iconDescription = _ref.iconDescription,
      id = _ref.id,
      formItemClassName = _ref.formItemClassName,
      inputWrapperClassName = _ref.inputWrapperClassName,
      placeholder = _ref.placeholder,
      type = _ref.type,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      required = _ref.required,
      other = _objectWithoutProperties(_ref, _excluded);

  var calculatedId = id ? id : name;
  var inputProps = {
    id: calculatedId,
    onChange: function onChange(evt) {
      if (!other.disabled && !other.readOnly) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled && !other.readOnly) {
        _onClick(evt);
      }
    },
    placeholder: placeholder,
    type: type
  };
  var errorId = calculatedId + '-error-msg';
  var inputClasses = (0, _classnames.default)("".concat(prefix, "--input"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--input--light"), light), _defineProperty(_classNames, "".concat(prefix, "--input--invalid"), invalid), _classNames));
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel || !labelText), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var inputWrapperClasses = (0, _classnames.default)("".concat(prefix, "--input-wrapper"), inputWrapperClassName);
  var helperTextClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));

  var errorIcon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconWarningGlyph,
    fill: "#c5192d"
  });

  var label = /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: calculatedId,
    className: labelClasses
  }, labelText && labelText, required && '*');

  var error = invalid ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, errorIcon, ' ', /*#__PURE__*/_react.default.createElement("span", null, _typeof(invalid) === 'object' && invalid.message ? invalid.message : typeof invalid === 'string' ? invalid : invalidText ? invalidText : 'required')) : null;
  var elementProps = invalid ? _objectSpread(_objectSpread(_objectSpread({}, other), inputProps), {}, {
    'data-invalid': true,
    'aria-invalid': true,
    'aria-describedby': errorId,
    className: inputClasses
  }) : _objectSpread(_objectSpread(_objectSpread({}, other), inputProps), {}, {
    className: inputClasses
  });
  var helper = helperText ? /*#__PURE__*/_react.default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return /*#__PURE__*/_react.default.createElement(_FormItem.default, {
    className: formItemClassName,
    inline: other.inline
  }, label, helper, additional, /*#__PURE__*/_react.default.createElement("div", {
    className: inputWrapperClasses
  }, addonBefore && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--input-addon-before")
  }, addonBefore), children(elementProps), addonAfter && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--input-addon-after")
  }, addonAfter)), error);
};

Input.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: _propTypes.default.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: _propTypes.default.string,

  /**
   * Specify an optional className to be applied to the input wrapper node
   */
  inputWrapperClassName: _propTypes.default.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: _propTypes.default.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: _propTypes.default.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.object]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: _propTypes.default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool
};
Input.defaultProps = {
  className: 'wfp--input',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = Input;
exports.default = _default;