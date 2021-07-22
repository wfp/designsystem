var _excluded = ["disabled", "labelText", "className", "id", "formItemClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "inputRef", "pattern", "required"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input/Input';
var prefix = settings.prefix;
/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

var TextInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
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

  var textInputClasses = classNames("".concat(prefix, "--text"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--text--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix, "--text--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--text--required"), required), _classNames));
  var newProps = {
    disabled: disabled,
    id: id
  };
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    formItemClassName: formItemClassName
  }), function (e) {
    return /*#__PURE__*/React.createElement("input", _extends({
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
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node,

  /**
   * Specify a custom `name` for the &lt;input&gt;
   */
  name: PropTypes.string,

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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
  helperText: PropTypes.node
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
export default TextInput;