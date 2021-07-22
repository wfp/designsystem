"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Content page', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Content Page",
    subTitle: "Regular Content Page"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Where to use?"), /*#__PURE__*/_react.default.createElement("p", null, "This is currently a draft."));
});