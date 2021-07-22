"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'FormGroup heading'
};
var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text'
};
(0, _react2.storiesOf)('Components|FormGroup', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_FormGroup.default, _extends({}, fieldsetCheckboxProps, {
    className: "wfp--form-long"
  }), /*#__PURE__*/_react.default.createElement(_TextInput.default, TextInputProps), /*#__PURE__*/_react.default.createElement(_TextInput.default, TextInputProps), /*#__PURE__*/_react.default.createElement(_TextInput.default, TextInputProps));
});