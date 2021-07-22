"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _InputGroup = _interopRequireDefault(require("../InputGroup"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

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
      name: (0, _addonKnobs.text)('The form control name (name in <InputGroup>)', 'input-group'),
      valueSelected: (0, _addonKnobs.select)('Value of the selected button (valueSelected in <InputGroup>)', values, 'default-selected'),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <InputGroup>)', 'Radio button group label'),
      helperText: (0, _addonKnobs.text)('Helper text (labelText in <InputGroup>)', 'Radio button group helper'),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  radio: function radio() {
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled in <RadioButton>)', false),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <RadioButton>)', 'Radio button label')
    };
  }
};
(0, _react2.storiesOf)('Components|InputGroup', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  var radioProps = props.radio();
  return /*#__PURE__*/_react.default.createElement(_InputGroup.default, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "standard",
    id: "radio-1"
  }, radioProps)), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "default-selected",
    id: "radio-2"
  }, radioProps)), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "disabled",
    id: "radio-3"
  }, radioProps)));
});