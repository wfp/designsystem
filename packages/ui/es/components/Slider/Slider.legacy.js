function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["ariaLabelInput", "className", "hideTextInput", "id", "min", "minLabel", "max", "maxLabel", "formatLabel", "fullWidth", "labelText", "step", "stepMuliplier", "inputType", "required", "disabled", "helperText", "invalid", "invalidText", "hideLabel", "name", "light"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { sliderValuePropSync } from '../../internal/FeatureFlags';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import TextInput from '../TextInput';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var defaultFormatLabel = function defaultFormatLabel(value, label) {
  return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
};
/** Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value. */


var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      value: _this.props.value,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function (evt) {
      if (evt && _this.props.disabled) {
        return;
      }

      if (evt && evt.dispatchConfig) {
        evt.persist();
      }

      if (_this.state.dragging) {
        return;
      }

      _this.setState({
        dragging: true
      });

      requestAnimationFrame(function () {
        _this.setState(function (prevState, props) {
          // Note: In FF, `evt.target` of `mousemove` event can be `HTMLDocument` which doesn't have `classList`.
          // One example is dragging out of browser viewport.
          var fromInput = evt && evt.target && evt.target.classList && evt.target.classList.contains('wfp-slider-text-input');

          var _this$calcValue = _this.calcValue(evt, prevState, props),
              left = _this$calcValue.left,
              newSliderValue = _this$calcValue.newValue;

          var newValue = fromInput ? Number(evt.target.value) : newSliderValue;

          if (prevState.left === left && prevState.value === newValue) {
            return {
              dragging: false
            };
          }

          if (typeof props.onChange === 'function') {
            props.onChange(newValue);
          }

          return {
            dragging: false,
            left: left,
            value: newValue
          };
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calcValue", function (evt, prevState, props) {
      var min = props.min,
          max = props.max,
          step = props.step,
          stepMuliplier = props.stepMuliplier;
      var value = prevState.value;
      var range = max - min;
      var valuePercentage = (value - min) / range * 100;
      var left;
      var newValue;
      left = valuePercentage;
      newValue = value;

      if (evt) {
        var type = evt.type;

        if (type === 'keydown') {
          var direction = {
            40: -1,
            // decreasing
            37: -1,
            // decreasing
            38: 1,
            // increasing
            39: 1 // increasing

          }[evt.which];

          if (direction !== undefined) {
            var multiplier = evt.shiftKey === true ? range / step / stepMuliplier : 1;
            var stepMultiplied = step * multiplier;
            var stepSize = stepMultiplied / range * 100;
            left = valuePercentage + stepSize * direction;
            newValue = Number(value) + stepMultiplied * direction;
          }
        }

        if (type === 'mousemove' || type === 'click' || type === 'touchmove') {
          var clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;

          var track = _this.track.getBoundingClientRect();

          var ratio = (clientX - track.left) / track.width;
          var rounded = min + Math.round(range * ratio / step) * step;
          left = (rounded - min) / range * 100;
          newValue = rounded;
        }
      }

      if (newValue <= Number(min)) {
        left = 0;
        newValue = min;
      }

      if (newValue >= Number(max)) {
        left = 100;
        newValue = max;
      }

      return {
        left: left,
        newValue: newValue
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseStart", function () {
      _this.element.ownerDocument.addEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnd", function () {
      _this.element.ownerDocument.removeEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function () {
      _this.element.ownerDocument.addEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function () {
      _this.element.ownerDocument.removeEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState({
        value: evt.target.value
      });

      _this.updatePosition(evt);
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePosition();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!sliderValuePropSync && !isEqual(nextProps, this.props)) {
        this.updatePosition();
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          ariaLabelInput = _this$props.ariaLabelInput,
          className = _this$props.className,
          hideTextInput = _this$props.hideTextInput,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.inputId = this.inputId || "__wfp-slider_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          min = _this$props.min,
          minLabel = _this$props.minLabel,
          max = _this$props.max,
          maxLabel = _this$props.maxLabel,
          _this$props$formatLab = _this$props.formatLabel,
          formatLabel = _this$props$formatLab === void 0 ? defaultFormatLabel : _this$props$formatLab,
          fullWidth = _this$props.fullWidth,
          labelText = _this$props.labelText,
          step = _this$props.step,
          stepMuliplier = _this$props.stepMuliplier,
          inputType = _this$props.inputType,
          required = _this$props.required,
          disabled = _this$props.disabled,
          helperText = _this$props.helperText,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          hideLabel = _this$props.hideLabel,
          name = _this$props.name,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          value = _this$state.value,
          left = _this$state.left;
      var sliderClasses = classNames('wfp--slider', {
        'wfp--slider--disabled': disabled
      }, className);
      var sliderContainerClasses = classNames('wfp--slider-container', {
        'wfp--slider-container--full-width': fullWidth
      });
      var inputClasses = classNames('wfp--slider-text-input', {
        'wfp--text-input--light': light
      });
      var filledTrackStyle = {
        transform: "translate(0%, -50%) scaleX(".concat(left / 100, ")")
      };
      var thumbStyle = {
        left: "".concat(left, "%")
      };
      var errorId = id + '-error-msg';
      var labelClasses = classNames("".concat(prefix, "--label"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--label--disabled"), other.disabled), _classNames));
      var label = labelText ? /*#__PURE__*/React.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var error = invalid ? /*#__PURE__*/React.createElement("div", {
        className: "wfp--form-requirement",
        id: errorId
      }, invalidText) : null;
      var helper = helperText ? /*#__PURE__*/React.createElement("div", {
        className: "wfp--form__helper-text"
      }, helperText) : null;
      return /*#__PURE__*/React.createElement("div", {
        className: "wfp--form-item"
      }, label, helper, /*#__PURE__*/React.createElement("div", {
        className: sliderContainerClasses
      }, /*#__PURE__*/React.createElement("span", {
        className: "wfp--slider__range-label"
      }, formatLabel(min, minLabel)), /*#__PURE__*/React.createElement("div", _extends({
        className: sliderClasses,
        ref: function ref(node) {
          _this2.element = node;
        },
        onClick: this.updatePosition,
        onKeyPress: this.updatePosition,
        role: "presentation",
        tabIndex: -1
      }, other), /*#__PURE__*/React.createElement("div", {
        className: "wfp--slider__track",
        ref: function ref(node) {
          _this2.track = node;
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "wfp--slider__filled-track",
        style: filledTrackStyle
      }), /*#__PURE__*/React.createElement("div", {
        className: "wfp--slider__thumb",
        role: "slider",
        id: id,
        tabIndex: 0,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        style: thumbStyle,
        onMouseDown: this.handleMouseStart,
        onTouchStart: this.handleTouchStart,
        onKeyDown: this.updatePosition
      }), /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: name,
        value: value,
        required: required,
        min: min,
        max: max,
        step: step,
        onChange: this.handleChange
      })), /*#__PURE__*/React.createElement("span", {
        className: "wfp--slider__range-label"
      }, formatLabel(max, maxLabel)), !hideTextInput && /*#__PURE__*/React.createElement(TextInput, {
        disabled: disabled,
        type: inputType,
        id: "input-for-slider",
        className: inputClasses,
        value: value,
        onChange: this.handleChange,
        labelText: "",
        "aria-label": ariaLabelInput
      })), error);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var value = _ref.value,
          min = _ref.min,
          max = _ref.max;
      var currentValue = state.value,
          prevValue = state.prevValue,
          prevMin = state.prevMin,
          prevMax = state.prevMax;

      if (!sliderValuePropSync || prevValue === value && prevMin === min && prevMax === max) {
        return null;
      }

      var effectiveValue = Math.min(Math.max(prevValue === value ? currentValue : value, min), max);
      return {
        value: effectiveValue,
        left: (effectiveValue - min) / (max - min) * 100,
        prevValue: value,
        prevMin: min,
        prevMax: max
      };
    }
  }]);

  return Slider;
}(Component);

_defineProperty(Slider, "propTypes", {
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The callback to get notified of change in value.
   */
  onChange: PropTypes.func,

  /**
   * The value.
   */
  value: PropTypes.number.isRequired,

  /**
   * The minimum value.
   */
  min: PropTypes.number.isRequired,

  /**
   * The label associated with the minimum value.
   */
  minLabel: PropTypes.string,

  /**
   * The maximum value.
   */
  max: PropTypes.number.isRequired,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: PropTypes.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: PropTypes.func,

  /**
   * The label for the slider.
   */
  labelText: PropTypes.node,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: PropTypes.number,

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys, which will be `(max - min) / stepMuliplier`.
   */
  stepMuliplier: PropTypes.number,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * `true` to disable this slider.
   */
  disabled: PropTypes.bool,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: PropTypes.string,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: PropTypes.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: PropTypes.string,

  /**
   * `true` to use the light version. (experimental)
   */
  light: PropTypes.bool,

  /**
   * Use the width of the parent element
   */
  fullWidth: PropTypes.bool
});

_defineProperty(Slider, "defaultProps", {
  fullWidth: false,
  hideTextInput: false,
  step: 1,
  stepMuliplier: 4,
  disabled: false,
  minLabel: '',
  maxLabel: '',
  inputType: 'number',
  ariaLabelInput: 'Slider number input',
  light: false
});

export { Slider as default };