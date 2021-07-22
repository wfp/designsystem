"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _Toggle2 = _interopRequireDefault(require("../Toggle/Toggle.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var toggleProps = function toggleProps() {
  return {
    className: 'some-class',
    toggled: (0, _addonKnobs.boolean)('Toggled (toggled)', false),
    labelA: (0, _addonKnobs.text)('Label for untoggled state (labelA)', 'Off'),
    labelB: (0, _addonKnobs.text)('Label for toggled state (labelB)', 'On'),
    onChange: (0, _addonActions.action)('onChange'),
    onToggle: (0, _addonActions.action)('onToggle')
  };
};

(0, _react2.storiesOf)('Components|Toggle', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Toggle.default, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement(_Toggle2.default, null);
});