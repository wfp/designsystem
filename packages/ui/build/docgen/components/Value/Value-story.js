"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Value = _interopRequireDefault(require("../Value"));

var _Unit = _interopRequireDefault(require("../Unit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
var props = function props() {
  return {
    className: 'some-class',
    title: (0, _addonKnobs.text)('The title (title)', 'Value title'),
    value: /*#__PURE__*/_react.default.createElement(_Unit.default, {
      type: "Usd",
      input: "thousand",
      output: "million",
      showZero: true,
      hideEmpty: true
    }, "1234567"),
    secondaryValue: /*#__PURE__*/_react.default.createElement(_Unit.default, {
      type: "Usd",
      input: "thousand",
      output: "million",
      showZero: true,
      hideEmpty: true
    }, "1234567"),
    onClick: function (handler) {
      return function (evt) {
        evt.preventDefault(); // Prevent link from being followed for demo purpose

        handler(evt);
      };
    }((0, _addonActions.action)('onClick'))
  };
};

(0, _react2.storiesOf)('Components|Value (experimental)', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Value.default, props());
});