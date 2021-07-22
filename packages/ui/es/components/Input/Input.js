var _excluded = ["additional", "addonBefore", "addonAfter", "labelText", "children", "className", "iconDescription", "id", "formItemClassName", "inputWrapperClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "required"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import FormItem from '../FormItem';
import { iconWarningGlyph } from '@wfp/icons';
import Icon from '../Icon';
var prefix = settings.prefix;
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
  var inputClasses = classNames("".concat(prefix, "--input"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--input--light"), light), _defineProperty(_classNames, "".concat(prefix, "--input--invalid"), invalid), _classNames));
  var labelClasses = classNames("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel || !labelText), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var inputWrapperClasses = classNames("".concat(prefix, "--input-wrapper"), inputWrapperClassName);
  var helperTextClasses = classNames("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));
  var errorIcon = /*#__PURE__*/React.createElement(Icon, {
    icon: iconWarningGlyph,
    fill: "#c5192d"
  });
  var label = /*#__PURE__*/React.createElement("label", {
    htmlFor: calculatedId,
    className: labelClasses
  }, labelText && labelText, required && '*');
  var error = invalid ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, errorIcon, ' ', /*#__PURE__*/React.createElement("span", null, _typeof(invalid) === 'object' && invalid.message ? invalid.message : typeof invalid === 'string' ? invalid : invalidText ? invalidText : 'required')) : null;
  var elementProps = invalid ? _objectSpread(_objectSpread(_objectSpread({}, other), inputProps), {}, {
    'data-invalid': true,
    'aria-invalid': true,
    'aria-describedby': errorId,
    className: inputClasses
  }) : _objectSpread(_objectSpread(_objectSpread({}, other), inputProps), {}, {
    className: inputClasses
  });
  var helper = helperText ? /*#__PURE__*/React.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return /*#__PURE__*/React.createElement(FormItem, {
    className: formItemClassName,
    inline: other.inline
  }, label, helper, additional, /*#__PURE__*/React.createElement("div", {
    className: inputWrapperClasses
  }, addonBefore && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--input-addon-before")
  }, addonBefore), children(elementProps), addonAfter && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--input-addon-after")
  }, addonAfter)), error);
};

Input.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the input wrapper node
   */
  inputWrapperClassName: PropTypes.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: PropTypes.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
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
export default Input;