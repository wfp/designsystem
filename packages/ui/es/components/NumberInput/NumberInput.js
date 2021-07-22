var _excluded = ["additional", "className", "disabled", "formItemClassName", "id", "hideLabel", "hideControls", "labelText", "max", "min", "step", "invalid", "invalidText", "onChange", "onClick", "helperText", "light", "allowEmpty", "inputRef", "pattern"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input';
var prefix = settings.prefix;

function PropTypeEmptyString(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    var value = props[propName];

    if (typeof value === 'string' && value !== '') {
      return new Error(propName + ' in ' + componentName + ' is not an empty string');
    }
  }

  return null;
}

var countDecimals = function countDecimals(value) {
  if (Math.floor(value) === value) return 0;
  return value.split('.')[1].length || 0;
};

var capMin = function capMin(min, value) {
  return isNaN(min) || !min && min !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.max(min, value);
};

var capMax = function capMax(max, value) {
  return isNaN(max) || !max && max !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.min(max, value);
};
/** The number input component is used for entering numeric values and includes controls for incrementally increasing or decreasing the value */


var NumberInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var additional = props.additional,
      className = props.className,
      disabled = props.disabled,
      formItemClassName = props.formItemClassName,
      id = props.id,
      hideLabel = props.hideLabel,
      hideControls = props.hideControls,
      labelText = props.labelText,
      max = props.max,
      min = props.min,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      invalid = props.invalid,
      invalidText = props.invalidText,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      helperText = props.helperText,
      light = props.light,
      allowEmpty = props.allowEmpty,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? ref : _props$inputRef,
      _props$pattern = props.pattern,
      pattern = _props$pattern === void 0 ? '[0-9]*' : _props$pattern,
      other = _objectWithoutProperties(props, _excluded);

  var initialValue = capMax(max, capMin(min, props.value));

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    setValue(props.value);
  }, [props.value]);
  var newInputRef = useRef(null);

  var _inputRef = inputRef ? inputRef : newInputRef;

  var handleChange = function handleChange(evt) {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(parseFloat(evt.target.value), evt);
    }
  };

  var handleArrowClick = function handleArrowClick(evt, direction) {
    var valueState = typeof value === 'string' ? Number(value) : value;
    valueState = isNaN(valueState) ? 0 : valueState;
    var conditional = direction === 'down' ? min !== undefined && valueState > min || min === undefined : max !== undefined && valueState < max || max === undefined;
    valueState = direction === 'down' ? valueState - step : valueState + parseFloat(step);
    valueState = capMax(max, capMin(min, valueState));
    valueState = parseFloat(valueState.toFixed(countDecimals(step)));

    if (!disabled && conditional) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      evt.target.value = parseFloat(valueState);
      onClick(evt, direction);
      setValue(valueState);
      onChange(valueState, evt, direction);
    }
  };

  var numberInputClasses = classNames("".concat(prefix, "--number"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix, "--number--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--number--nocontrols"), hideControls), _classNames));
  var newProps = {
    disabled: disabled,
    id: id,
    max: max,
    min: min,
    step: step,
    onChange: handleChange,
    value: value
  };
  var buttonProps = {
    disabled: disabled,
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    formItemClassName: numberInputClasses
  }), function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefix, "--number__controls")
    }, /*#__PURE__*/React.createElement("button", _extends({
      className: "".concat(prefix, "--number__control-btn up-icon")
    }, buttonProps, {
      onClick: function onClick(evt) {
        return handleArrowClick(evt, 'up');
      }
    }), "+"), /*#__PURE__*/React.createElement("button", _extends({
      className: "".concat(prefix, "--number__control-btn down-icon")
    }, buttonProps, {
      onClick: function onClick(evt) {
        return handleArrowClick(evt, 'down');
      }
    }), "\u2212"), /*#__PURE__*/React.createElement("input", _extends({
      type: "number",
      pattern: pattern
    }, other, newProps, {
      ref: _inputRef
    })));
  });
});
NumberInput.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

  /**
   * The maximum value.
   */
  max: PropTypes.number,

  /**
   * The minimum value.
   */
  min: PropTypes.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes.number,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: PropTypes.oneOfType([PropTypeEmptyString, PropTypes.number]),

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

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
  light: PropTypes.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes.bool
};
export default NumberInput;