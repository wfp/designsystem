function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["value"];

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

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import warning from 'warning';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var RadioButtonGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtonGroup, _React$Component);

  var _super = _createSuper(RadioButtonGroup);

  function RadioButtonGroup() {
    var _this;

    _classCallCheck(this, RadioButtonGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selected: _this.props.valueSelected || _this.props.defaultSelected
    });

    _defineProperty(_assertThisInitialized(_this), "getRadioButtons", function () {
      var children = React.Children.map(_this.props.children, function (radioButton) {
        var _radioButton$props = radioButton.props,
            value = _radioButton$props.value,
            other = _objectWithoutProperties(_radioButton$props, _excluded);
        /* istanbul ignore if */


        if (radioButton.props.hasOwnProperty('checked')) {
          process.env.NODE_ENV !== "production" ? warning(false, "Instead of using the checked property on the RadioButton, set\n            the defaultSelected property or valueSelected property on the RadioButtonGroup.") : void 0;
        }

        return /*#__PURE__*/React.createElement(RadioButton, _extends({}, other, {
          name: _this.props.name,
          key: value,
          value: value,
          onChange: _this.handleChange,
          checked: value === _this.state.selected
        }));
      });
      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newSelection, value, evt) {
      if (newSelection !== _this.state.selected) {
        _this.setState({
          selected: newSelection
        });

        _this.props.onChange(newSelection, _this.props.name, evt);
      }
    });

    return _this;
  }

  _createClass(RadioButtonGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          labelText = _this$props.labelText,
          helperText = _this$props.helperText,
          controlled = _this$props.controlled,
          vertical = _this$props.vertical,
          hideLabel = _this$props.hideLabel,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "".concat(prefix, "--radio-button-group") : _this$props$className;
      var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var wrapperClasses = classNames("".concat(prefix, "--form-item"), _defineProperty({}, "".concat(prefix, "--radio-button-group__vertical"), vertical));
      var label = labelText ? /*#__PURE__*/React.createElement("span", {
        className: labelClasses
      }, labelText) : null;
      var helper = helperText ? /*#__PURE__*/React.createElement("div", {
        className: "wfp--form__helper-text"
      }, helperText) : null; // console.warn(
      //   'RadioButtonGroup is depreciated and will be removed in the next versions. Use InputGroup instead'
      // );

      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/React.createElement("div", {
        className: className,
        disabled: disabled
      }, label, helper, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--radio-button-group-inside")
      }, controlled ? this.getRadioButtons() : children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var valueSelected = _ref.valueSelected,
          defaultSelected = _ref.defaultSelected;
      var prevValueSelected = state.prevValueSelected;
      return prevValueSelected === valueSelected ? null : {
        selected: valueSelected || defaultSelected,
        prevValueSelected: valueSelected
      };
    }
  }]);

  return RadioButtonGroup;
}(React.Component);

_defineProperty(RadioButtonGroup, "propTypes", {
  /**
   * Provide a collection of <RadioButton> components to render in the group
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide an optional className to be applied to the container node
   */
  controlled: PropTypes.bool,

  /**
   * Specify the <RadioButton> to be selected by default
   */
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify the name of the underlying `input` nodes
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify whether the group is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange: PropTypes.func,

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the elements should be displayed vertically.
   */
  vertical: PropTypes.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node
});

_defineProperty(RadioButtonGroup, "defaultProps", {
  onChange:
  /* istanbul ignore next */
  function onChange() {},
  controlled: false
});

export { RadioButtonGroup as default };