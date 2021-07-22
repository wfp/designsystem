"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _InfoBar = _interopRequireDefault(require("./InfoBar"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|InfoBar', module).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_InfoBar.default, null, "InfoBar with content. ", /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#"
  }, "Click here"), " to do something.");
});