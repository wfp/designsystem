"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Button = _interopRequireDefault(require("../Button"));

var _types = require("../../prop-types/types");

var _excluded = ["children", "customButton", "id", "onKeyDown", "buttonTriggerText", "buttonTriggerClassName", "triggerButtonKind", "disabled", "handleSubmit", "shouldCloseAfterSubmit"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/** Modal Wrapper component to encapsulate your Modal within a button. */
var ModalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(ModalWrapper, _React$Component);

  var _super = _createSuper(ModalWrapper);

  function ModalWrapper(props) {
    var _this;

    _classCallCheck(this, ModalWrapper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      }, function () {
        _this.triggerButton.current && _this.triggerButton.current.focus();
        if (_this.props.handleClose) _this.props.handleClose();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnRequestSubmit", function () {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          shouldCloseAfterSubmit = _this$props.shouldCloseAfterSubmit;

      if (handleSubmit && handleSubmit()) {
        if (shouldCloseAfterSubmit) {
          _this.handleClose();
        }
      }
    });

    _this.triggerButton = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(ModalWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          customButton = _this$props2.customButton,
          id = _this$props2.id,
          _onKeyDown = _this$props2.onKeyDown,
          buttonTriggerText = _this$props2.buttonTriggerText,
          buttonTriggerClassName = _this$props2.buttonTriggerClassName,
          triggerButtonKind = _this$props2.triggerButtonKind,
          disabled = _this$props2.disabled,
          handleSubmit = _this$props2.handleSubmit,
          shouldCloseAfterSubmit = _this$props2.shouldCloseAfterSubmit,
          other = _objectWithoutProperties(_this$props2, _excluded);

      var props = _objectSpread(_objectSpread({}, other), {}, {
        open: this.state.isOpen,
        onRequestClose: this.handleClose,
        onRequestSubmit: this.handleOnRequestSubmit
      });

      var customButtonEl = customButton ? /*#__PURE__*/_react.default.cloneElement(customButton, {
        disabled: disabled,
        onClick: this.handleOpen,
        inputref: this.triggerButton
      }) : undefined;
      return /*#__PURE__*/_react.default.createElement("div", {
        role: "presentation",
        className: "wfp--modal__wrapper",
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 27) {
            _this2.handleClose();

            _onKeyDown(evt);
          }
        }
      }, customButton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customButtonEl) : /*#__PURE__*/_react.default.createElement(_Button.default, {
        id: id,
        className: buttonTriggerClassName,
        disabled: disabled,
        kind: triggerButtonKind,
        onClick: this.handleOpen,
        inputref: this.triggerButton
      }, buttonTriggerText), /*#__PURE__*/_react.default.createElement(_Modal.default, props, children));
    }
  }]);

  return ModalWrapper;
}(_react.default.Component);

exports.default = ModalWrapper;

_defineProperty(ModalWrapper, "propTypes", {
  status: _propTypes.default.string,

  /**
   * Specify a function to open the Modal.
   */
  handleOpen: _propTypes.default.func,
  children: _propTypes.default.node,

  /**
   * Specify a custom trigger `Button`.
   */
  customButton: _propTypes.default.element,
  id: _propTypes.default.string,

  /**
   * Specify the text for the trigger `Button`.
   */
  buttonTriggerText: _propTypes.default.node,

  /**
   * Specify a `class` for the trigger `Button`.
   */
  buttonTriggerClassName: _propTypes.default.string,
  modalLabel: _propTypes.default.string,
  modalHeading: _propTypes.default.string,
  modalText: _propTypes.default.string,
  passiveModal: _propTypes.default.bool,
  withHeader: _propTypes.default.bool,
  modalBeforeContent: _propTypes.default.bool,
  primaryButtonText: _propTypes.default.string,
  secondaryButtonText: _propTypes.default.string,

  /**
   * Specify a `function` which is triggered when submitting the `Modal`.
   */
  handleSubmit: _propTypes.default.func,
  handleClose: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  triggerButtonKind: _types.ButtonTypes.buttonKind,

  /**
   * Specify if `Modal` should be closed after submitting.
   */
  shouldCloseAfterSubmit: _propTypes.default.bool
});

_defineProperty(ModalWrapper, "defaultProps", {
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
  triggerButtonKind: 'primary',
  disabled: false,
  onKeyDown: function onKeyDown() {}
});