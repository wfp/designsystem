"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _uniqueId = _interopRequireDefault(require("../../tools/uniqueId"));

var _excluded = ["labelText", "inputRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _settings.default.prefix;
/** Radio buttons represent a group of mutually exclusive choices */

var RadioButton = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.props.onChange(evt, _this.props.value, _this.props.name);
    });

    return _this;
  }

  _createClass(RadioButton, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.uid = this.props.id || (0, _uniqueId.default)();
    }
  }, {
    key: "render",
    value: function render() {
      var wrapperClasses = (0, _classnames.default)('radioButtonWrapper', this.props.className);

      var _this$props = this.props,
          labelText = _this$props.labelText,
          inputRef = _this$props.inputRef,
          other = _objectWithoutProperties(_this$props, _excluded);

      var handleChange = this.props.onChange ? {
        onChange: this.handleChange
      } : {};
      return /*#__PURE__*/_react.default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react.default.createElement("input", _extends({}, other, {
        ref: inputRef,
        type: "radio",
        className: "".concat(prefix, "--radio-button")
      }, handleChange, {
        id: this.uid
      })), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.uid,
        className: "".concat(prefix, "--radio-button__label")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefix, "--radio-button__appearance")
      }), labelText));
    }
  }]);

  return RadioButton;
}(_react.default.Component);

_defineProperty(RadioButton, "propTypes", {
  /**
   * Specify whether the <RadioButton> is currently checked
   */
  checked: _propTypes.default.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the <RadioButton> should be checked by default
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a unique id for the underlying `input` node
   */
  id: _propTypes.default.string,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Provide a name for the underlying `input` node
   */
  name: _propTypes.default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `input` changes
   */
  onChange: _propTypes.default.func,

  /**
   * Specify the value of the <RadioButton>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
});

var _default = function () {
  var forwardRef = function forwardRef(props, ref) {
    return /*#__PURE__*/_react.default.createElement(RadioButton, _extends({}, props, {
      inputRef: ref
    }));
  };

  forwardRef.displayName = 'RadioButton';
  return /*#__PURE__*/_react.default.forwardRef(forwardRef);
}();

exports.default = _default;