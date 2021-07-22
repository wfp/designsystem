"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateRangePickerInput = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["controlled", "datePicker", "labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "value", "startDateId", "startDatePlaceholderText", "endDateId", "endDatePlaceholderText", "name", "onBlur", "onDragStart", "onDrop", "onFocus"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var DateRangePickerInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateRangePickerInput, _PureComponent);

  var _super = _createSuper(DateRangePickerInput);

  function DateRangePickerInput() {
    var _this;

    _classCallCheck(this, DateRangePickerInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focusedInput: null,
      startDate: _this.props.startDate ? _this.props.startDate : null,
      endDate: _this.props.endDate ? _this.props.endDate : null
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusChange", function (focusedInput) {
      if (!focusedInput && typeof _this.props.onBlur === 'function') {
        _this.props.onBlur();
      }

      _this.setState({
        focusedInput: focusedInput
      });
    });

    return _this;
  }

  _createClass(DateRangePickerInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          controlled = _this$props.controlled,
          datePicker = _this$props.datePicker,
          labelText = _this$props.labelText,
          className = _this$props.className,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          hideLabel = _this$props.hideLabel,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          helperText = _this$props.helperText,
          value = _this$props.value,
          startDateId = _this$props.startDateId,
          startDatePlaceholderText = _this$props.startDatePlaceholderText,
          endDateId = _this$props.endDateId,
          endDatePlaceholderText = _this$props.endDatePlaceholderText,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onDragStart = _this$props.onDragStart,
          onDrop = _this$props.onDrop,
          onFocus = _this$props.onFocus,
          other = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          focusedInput = _this$state.focusedInput,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var DateRangePicker = datePicker;
      var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var label = labelText ? /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var errorMessage = invalid ? /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--form-requirement invalid")
      }, invalidText) : null;
      var helper = helperText ? /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--form__helper-text")
      }, helperText) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, label, helper, /*#__PURE__*/_react.default.createElement(DateRangePicker, _extends({
        endDateId: endDateId,
        endDate: onChange && value ? value.endDate : endDate,
        endDatePlaceholderText: endDatePlaceholderText,
        focusedInput: focusedInput,
        hideKeyboardShortcutsPanel: true,
        onDatesChange: function onDatesChange(_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate;

          if (onChange) {
            onChange({
              startDate: startDate,
              endDate: endDate
            });
          }

          _this2.setState({
            startDate: startDate,
            endDate: endDate
          });
        },
        onFocusChange: this.handleFocusChange,
        startDateId: startDateId,
        startDate: onChange && value ? value.startDate : startDate,
        startDatePlaceholderText: startDatePlaceholderText
      }, other)), errorMessage);
    }
  }]);

  return DateRangePickerInput;
}(_react.PureComponent);

exports.DateRangePickerInput = DateRangePickerInput;
DateRangePickerInput.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date'
};
DateRangePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: _propTypes.default.func.isRequired,

  /**
   * Provide the placeholder for the start input
   */
  startDatePlaceholderText: _propTypes.default.string,

  /**
   * Provide the placeholder for the end input
   */
  endDatePlaceholderText: _propTypes.default.string
};
var _default = DateRangePickerInput;
exports.default = _default;