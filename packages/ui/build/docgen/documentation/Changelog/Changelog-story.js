"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _CHANGELOG = _interopRequireDefault(require("../../../CHANGELOG.md"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

require("./_changelog.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'zzz'
  }
}).add("What's new in 1.4", function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Changelog",
    subTitle: "Latest updates and versions"
  }, /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "UI-Kit 1.4 is available",
    kind: "warning"
  }, "We've just release the new version of the UI Kit. Get the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://www.npmjs.com/package/@wfp/ui",
    target: "_blank"
  }, "latest version"), ' ', "now or read the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/wfp/ui/blob/master/CHANGELOG.md",
    target: "_blank"
  }, "full changelog.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "changelog"
  }, /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
    source: _CHANGELOG.default
  })));
});