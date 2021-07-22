"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _FormHint = _interopRequireDefault(require("./FormHint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    className: 'some-class',
    children: (0, _addonKnobs.text)('Label text (labelText)', 'Lorem Ipsum')
  };
};

(0, _react2.storiesOf)('Components|FormHint', module).addDecorator(_addonKnobs.withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "wfp--label",
    htmlFor: "input"
  }, "The Label ", /*#__PURE__*/_react.default.createElement(_FormHint.default, props()));
});