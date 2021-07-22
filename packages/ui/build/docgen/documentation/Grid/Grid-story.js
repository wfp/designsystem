"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Link = _interopRequireDefault(require("../../components/Link"));

var _Page = _interopRequireDefault(require("../Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Core', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Grid', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Grid system",
    subTitle: "Recommendations for grid system"
  }, /*#__PURE__*/_react.default.createElement("p", null, "The UI Kit doesn't come with a CSS grid system. We recommend the use of a modern flexbox based grid system like", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://flexboxgrid.com/"
  }, "Flexbox Grid"), ", which is also available as react components."), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://flexboxgrid.com/",
    target: "_blank"
  }, "Flexbox Grid"), ' ', "A grid system based on the flex display property."), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://roylee0704.github.io/react-flexbox-grid/",
    target: "_blank"
  }, "React-FlexBox-Grid"), ' ', "The React module of Flexbox Grid")));
});