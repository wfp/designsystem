"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Loading = _interopRequireDefault(require("../Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = function props() {
  return {
    active: (0, _addonKnobs.boolean)('Active (active)', true),
    withOverlay: (0, _addonKnobs.boolean)('With overlay (withOverlay)', false),
    small: (0, _addonKnobs.boolean)('Small (small)', false)
  };
};

(0, _react2.storiesOf)('Components|Loading', module).addDecorator(_addonKnobs.withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_Loading.default, _extends({}, props(), {
    className: 'some-class'
  }));
});