"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("./Page"));

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Development', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Development",
    subTitle: "Help improving the UI Kit"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Development is made on a GitHub repository. Feel free create an Issue or submit a pull request.", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/wfp/ui"
  }, "Project on GitHub")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("iframe", {
    title: "GitHub Like",
    src: "https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large",
    frameBorder: "0",
    scrolling: "0",
    width: "160px",
    height: "30px"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "NPM"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.npmjs.com/package/@wfp/ui"
  }, "Package on npm")));
});