"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Data visualization', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Data visualization",
    subTitle: "Guidelines"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://brand.manuals.wfp.org/en/data-visualization-guidance/",
    target: "_blank"
  }, "More Information"), ' ', "on data visualization."));
});