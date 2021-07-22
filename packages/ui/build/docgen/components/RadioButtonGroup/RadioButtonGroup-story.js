"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _RadioButtonGroup = _interopRequireDefault(require("../RadioButtonGroup"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled'
};
var props = {
  group: function group() {
    return {
      name: (0, _addonKnobs.text)('The form control name (name in <RadioButtonGroup>)', 'radio-button-group'),
      valueSelected: (0, _addonKnobs.select)('Value of the selected button (valueSelected in <RadioButtonGroup>)', values, 'default-selected'),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <RadioButtonGroup>)', 'Radio button group label'),
      helperText: (0, _addonKnobs.text)('Helper text (labelText in <RadioButtonGroup>)', 'Radio button group helper'),
      vertical: (0, _addonKnobs.boolean)('Vertical (vertical in <RadioButtonGroup>)', false),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  radio: function radio() {
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled in <RadioButton>)', false),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <RadioButton>)', 'Radio button label')
    };
  },
  check: function check() {
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled in <Checkbox>)', false),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <Checkbox>)', 'Checkbox label')
    };
  }
};
(0, _react2.storiesOf)('Components|RadioButtonGroup', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  var radioProps = props.radio();
  return /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "standard",
    id: "radio-1"
  }, radioProps, {
    labelText: "Radio button label 1"
  })), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "default-selected",
    id: "radio-2"
  }, radioProps, {
    labelText: "Radio button label 2"
  })), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "disabled",
    id: "radio-3"
  }, radioProps, {
    labelText: "Radio 1"
  })));
}).add('Checkbox', function () {
  var checkProps = props.check();
  return /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    value: "standard",
    id: "radio-1"
  }, checkProps)), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    value: "default-selected",
    id: "radio-2"
  }, checkProps)), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    value: "disabled",
    id: "radio-3"
  }, checkProps)));
});