"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var additionalProps = {
  className: 'some-class'
};
(0, _react2.storiesOf)('Components|FormLabel', module).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_FormLabel.default, additionalProps, "Label");
});