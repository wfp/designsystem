"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _FormWizard = _interopRequireDefault(require("../FormWizard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  tabs: function tabs() {
    return {};
  }
};
(0, _react2.storiesOf)('Components|FormWizard', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_FormWizard.default, _extends({}, props.tabs(), {
    sidebar: /*#__PURE__*/_react.default.createElement("div", null, "The Sidebar content")
  }), "The Main content");
});