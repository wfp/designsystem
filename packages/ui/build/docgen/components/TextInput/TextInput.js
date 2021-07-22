"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var _excluded = ["disabled", "labelText", "className", "id", "formItemClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "inputRef", "pattern", "required"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

var TextInput = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames;

  var disabled = props.disabled,
      labelText = props.labelText,
      className = props.className,
      id = props.id,
      formItemClassName = props.formItemClassName,
      placeholder = props.placeholder,
      type = props.type,
      onChange = props.onChange,
      onClick = props.onClick,
      hideLabel = props.hideLabel,
      invalid = props.invalid,
      invalidText = props.invalidText,
      helperText = props.helperText,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? ref : _props$inputRef,
      pattern = props.pattern,
      required = props.required,
      other = _objectWithoutProperties(props, _excluded);

  var textInputClasses = (0, _classnames.default)("".concat(prefix, "--text"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--text--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix, "--text--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--text--required"), required), _classNames));
  var newProps = {
    disabled: disabled,
    id: id
  };
  return /*#__PURE__*/_react.default.createElement(_Input.default, _extends({}, props, {
    formItemClassName: formItemClassName
  }), function (e) {
    return /*#__PURE__*/_react.default.createElement("input", _extends({
      pattern: pattern,
      type: type
    }, other, newProps, {
      ref: inputRef,
      className: textInputClasses
    }, e));
  });
});

TextInput.propTypes = {
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
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node,

  /**
   * Specify a custom `name` for the &lt;input&gt;
   */
  name: _propTypes.default.string,

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
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

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
  helperText: _propTypes.default.node
};
TextInput.defaultProps = {
  className: 'wfp--text-input',
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: ''
};
var _default = TextInput;
exports.default = _default;