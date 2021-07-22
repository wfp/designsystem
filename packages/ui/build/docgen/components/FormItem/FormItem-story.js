"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|FormItem', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_FormItem.default, null, /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
    id: "number-input-1"
  }));
});