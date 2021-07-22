"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _RadioButton2 = _interopRequireDefault(require("../RadioButton/RadioButton.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var radioProps = function radioProps() {
  return {
    className: 'some-class',
    name: (0, _addonKnobs.text)('Form item name (name)', 'test'),
    value: (0, _addonKnobs.text)('Value (value)', 'standard'),
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Standard Radio Button'),
    checked: (0, _addonKnobs.boolean)('Checked (checked)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Components|RadioButton', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    id: "radio-1"
  }, radioProps()));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_RadioButton2.default, null));
});