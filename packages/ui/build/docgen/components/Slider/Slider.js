"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _Input = _interopRequireDefault(require("../Input"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _excluded = ["additional", "ariaLabelInput", "className", "disabled", "formatLabel", "formItemClassName", "fullWidth", "id", "inputType", "hideLabel", "hideControls", "hideTextInput", "labelText", "min", "minLabel", "max", "maxLabel", "step", "invalid", "invalidText", "onChange", "onClick", "helperText", "allowEmpty", "inputRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _settings.default.prefix;

var defaultFormatLabel = function defaultFormatLabel(value, label) {
  return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
};

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
/** Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value. */


function Slider(props) {
  var _classNames;

  var additional = props.additional,
      ariaLabelInput = props.ariaLabelInput,
      className = props.className,
      disabled = props.disabled,
      _props$formatLabel = props.formatLabel,
      formatLabel = _props$formatLabel === void 0 ? defaultFormatLabel : _props$formatLabel,
      formItemClassName = props.formItemClassName,
      fullWidth = props.fullWidth,
      id = props.id,
      inputType = props.inputType,
      hideLabel = props.hideLabel,
      hideControls = props.hideControls,
      hideTextInput = props.hideTextInput,
      labelText = props.labelText,
      min = props.min,
      minLabel = props.minLabel,
      max = props.max,
      maxLabel = props.maxLabel,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      invalid = props.invalid,
      invalidText = props.invalidText,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      helperText = props.helperText,
      allowEmpty = props.allowEmpty,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, _excluded);

  var initialValue = props.value;

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setValue(props.value);
  }, [props.value]);
  var newInputRef = (0, _react.useRef)(null);

  var _inputRef = inputRef ? inputRef : newInputRef;

  var handleChange = function handleChange(evt) {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;

      if (evt.target.value > max) {
        setValue(max);
        onChange(parseFloat(max), evt);
      }
      /* else if (evt.target.value < min) {
      setValue(evt.target.value);
      onChange(parseFloat(min), evt);
      }*/
      else {
          setValue(evt.target.value);
          onChange(parseFloat(evt.target.value), evt);
        }
    }
  };

  var numberInputClasses = (0, _classnames.default)("".concat(prefix, "--slider--wrapper"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--slider--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix, "--slider--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--slider--nocontrols"), hideControls), _classNames));
  var sliderContainerClasses = (0, _classnames.default)("".concat(prefix, "--slider-container"), _defineProperty({}, "".concat(prefix, "--slider-container--full-width"), fullWidth));
  var newProps = {
    disabled: disabled,
    id: id,
    max: max,
    min: min,
    step: step,
    onChange: handleChange,
    value: value
  };
  var inputClasses = (0, _classnames.default)("".concat(prefix, "--input"), "".concat(prefix, "--slider-text-input"));
  var sliderClasses = (0, _classnames.default)("".concat(prefix, "--slider"), _defineProperty({}, "".concat(prefix, "--slider--disabled"), disabled), className);
  var sliderRangeWrapperClasses = (0, _classnames.default)("".concat(prefix, "--slider__range-wrapper"), _defineProperty({}, "".concat(prefix, "--slider__range-wrapper--disabled"), disabled), className);
  var valueMinimal = value < min ? min : value;
  return /*#__PURE__*/_react.default.createElement(_Input.default, _extends({}, props, {
    formItemClassName: numberInputClasses
  }), function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: sliderContainerClasses
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefix, "--slider__range-label")
    }, formatLabel(min, minLabel)), /*#__PURE__*/_react.default.createElement("div", {
      className: sliderRangeWrapperClasses
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefix, "--slider__range-before"),
      style: {
        width: "".concat((valueMinimal - min) / (max - min) * 100, "%")
      }
    }), /*#__PURE__*/_react.default.createElement("input", _extends({
      className: sliderClasses,
      type: "range"
    }, other, newProps, {
      ref: _inputRef
    }))), /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefix, "--slider__range-label")
    }, formatLabel(max, maxLabel)), !hideTextInput && /*#__PURE__*/_react.default.createElement(_TextInput.default, {
      disabled: disabled,
      type: inputType,
      id: "input-for-slider",
      className: inputClasses,
      value: value,
      onChange: handleChange,
      labelText: "",
      "aria-label": ariaLabelInput
    }));
  });
}

Slider.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: _propTypes.default.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: _propTypes.default.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: _propTypes.default.node,

  /**
   * The minimum value.
   */
  min: _propTypes.default.number.isRequired,

  /**
   * The label associated with the minimum value.
   */
  minLabel: _propTypes.default.string,

  /**
   * The maximum value.
   */
  max: _propTypes.default.number.isRequired,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: _propTypes.default.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: _propTypes.default.func,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: _propTypes.default.string,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: _propTypes.default.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: _propTypes.default.string,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: _propTypes.default.number,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: _propTypes.default.oneOfType([PropTypeEmptyString, _propTypes.default.number]),

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
   * Provide additional component that is used alongside the input for customization
   */
  additional: _propTypes.default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: _propTypes.default.bool,

  /**
   * Use the width of the parent element
   */
  fullWidth: _propTypes.default.bool
};
Slider.defaultProps = {
  fullWidth: false,
  hideTextInput: false,
  step: 1,
  disabled: false,
  minLabel: '',
  maxLabel: '',
  inputType: 'number',
  ariaLabelInput: 'Slider number input',
  min: 0
};
var _default = Slider;
exports.default = _default;