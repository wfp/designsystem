"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormItem = _interopRequireDefault(require("../FormItem"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "formItemClassName", "id", "labelText", "hideLabel", "onChange", "onClick", "invalid", "invalidText", "inputRef", "helperText", "fullWidth", "viewOnly"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//import useDetectPrint from '../../internal/useDetectPrint';
var prefix = _settings.default.prefix;
/** A textarea is an input dedicated for a large volume of text. It may be used in a variety of components like forms, comment sections, and forums. */

var TextArea = function TextArea(_ref) {
  var _classNames2;

  var className = _ref.className,
      formItemClassName = _ref.formItemClassName,
      id = _ref.id,
      labelText = _ref.labelText,
      hideLabel = _ref.hideLabel,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      inputRef = _ref.inputRef,
      helperText = _ref.helperText,
      fullWidth = _ref.fullWidth,
      viewOnly = _ref.viewOnly,
      other = _objectWithoutProperties(_ref, _excluded);

  /* TODO: Implement print preview for inputs with automated overflow
  const isPrinting = useDetectPrint();
  */
  var textareaProps = {
    id: id,
    onChange: function onChange(evt) {
      if (!other.disabled) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled) {
        _onClick(evt);
      }
    }
  };
  var textareaClasses = (0, _classnames.default)("".concat(prefix, "--text-area"), className, _defineProperty({}, "".concat(prefix, "--textarea-fullwidth"), fullWidth));
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var label = labelText ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var helperTextClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));
  var error = invalid ? /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--form-requirement"
  }, invalidText) : null;
  var input = invalid ? /*#__PURE__*/_react.default.createElement("textarea", _extends({}, other, textareaProps, {
    ref: inputRef,
    className: textareaClasses,
    "data-invalid": true
  })) : /*#__PURE__*/_react.default.createElement("textarea", _extends({}, other, {
    ref: inputRef
  }, textareaProps, {
    className: textareaClasses
  }));
  var helper = helperText ? /*#__PURE__*/_react.default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return /*#__PURE__*/_react.default.createElement(_FormItem.default, {
    className: formItemClassName
  }, label, input, helper, error);
};

TextArea.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: _propTypes.default.string,
  // /**
  //  * Specify the `cols` attribute for the underlying &lt;textarea&gt; node
  //  */
  // cols: PropTypes.number,

  /**
   * Optionally provide the default value of the &lt;textarea&gt;
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;textarea&gt;
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;textarea&gt; is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the &lt;textarea&gt;
   */
  placeholder: _propTypes.default.string,

  /**
   * Specify the rows attribute for the &lt;textarea&gt;
   */
  rows: _propTypes.default.number,

  /**
   * Provide the current value of the &lt;textarea&gt;
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.bool]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether you want `textarea` width to be 100%, this will overide cols set
   */
  fullWidth: _propTypes.default.bool,

  /**
   * Specify whether you want `textarea` is view only
   */
  viewOnly: _propTypes.default.bool
};
TextArea.defaultProps = {
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  placeholder: '',
  rows: 4,
  invalid: false,
  invalidText: '',
  helperText: '',
  fullWidth: true
};
var _default = TextArea;
exports.default = _default;