"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["className", "id", "labelText", "onChange", "indeterminate", "hideLabel", "wrapperClassName", "inputRef", "title"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;
/**
 * Checkboxes are used for a list of options where the user may select multiple options, including all or none. */

var Checkbox = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
      id = props.id,
      labelText = props.labelText,
      _onChange = props.onChange,
      indeterminate = props.indeterminate,
      hideLabel = props.hideLabel,
      wrapperClassName = props.wrapperClassName,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? ref : _props$inputRef,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      other = _objectWithoutProperties(props, _excluded);

  var customId = id ? id : other.name;
  var input;
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--checkbox-label"), className);
  var innerLabelClasses = (0, _classnames.default)(_defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--form-item"), "".concat(prefix, "--checkbox-wrapper"), wrapperClassName);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, other, {
    type: "checkbox",
    onChange: function onChange(evt) {
      _onChange(evt, evt.target.checked, customId);
    },
    className: "wfp--checkbox",
    id: customId,
    ref: function ref(el) {
      if (el) {
        el.indeterminate = indeterminate;
      }

      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (Object(inputRef) === inputRef) {
        inputRef.current = el;
      }
    }
  })), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: customId,
    className: labelClasses,
    title: title || null
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: innerLabelClasses
  }, labelText)));
});

Checkbox.propTypes = {
  /**
   * Specify whether the underlying input should be checked
   */
  checked: _propTypes.default.bool,

  /**
   * Specify whether the underlying input should be checked by default
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * Specify whether the Checkbox is in an indeterminate state
   */
  indeterminate: _propTypes.default.bool,

  /**
   * Specify an optional className to be applied to the <label> node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the Checkbox should be disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide an `id` to uniquely identify the Checkbox input
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Provide a label to provide a description of the Checkbox input that you are
   * exposing to the user
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Receives three arguments: true/false, the checkbox's id, and the dom event.
   */
  onChange: _propTypes.default.func,

  /**
   * Specify a title for the <label> node for the Checkbox
   */
  title: _propTypes.default.string,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  wrapperClassName: _propTypes.default.string
};
Checkbox.defaultProps = {
  onChange: function onChange() {},
  indeterminate: false
};
var _default = Checkbox;
exports.default = _default;