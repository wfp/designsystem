"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _Select = _interopRequireDefault(require("../../components/Select"));

var _TextInput = _interopRequireDefault(require("../../components/TextInput"));

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _SelectItem = _interopRequireDefault(require("../../components/SelectItem"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Form = _interopRequireDefault(require("../../components/Form"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote/Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ComplexForm = function ComplexForm() {
  var _useForm = (0, _reactHookForm.useForm)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors,
      reset = _useForm.reset;

  var onSubmit = function onSubmit(values) {
    setOutput(values);
  };

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      output = _useState2[0],
      setOutput = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_Form.default, {
    longForm: true,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    labelText: "Email TextInput",
    name: "email",
    ref: register({
      required: 'Required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'invalid email address'
      }
    })
  }), errors.email && errors.email.message, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    labelText: "TextInput",
    name: "textinput",
    ref: register({
      validate: function validate(value) {
        return value !== 'admin' || 'Nice try!';
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    name: "numberinput",
    render: function render(props) {
      return /*#__PURE__*/_react.default.createElement(_NumberInput.default, _extends({}, props, {
        labelText: "Number input",
        name: "numberinput",
        step: "0.1"
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_Select.default, {
    name: "select",
    inputRef: register,
    labelText: "Select"
  }, /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "",
    text: "not selected"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "daily",
    text: "daily"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "weekly",
    text: "weekly"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "monthly",
    text: "monthly"
  })), errors.username && errors.username.message, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit"
  }, "Submit"), ' ', /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    kind: "secondary",
    onClick: function onClick() {
      return reset({
        numberinput: 3
      });
    }
  }, "Reset"), /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "Output"
  }, JSON.stringify(output)));
};

var _default = ComplexForm;
exports.default = _default;