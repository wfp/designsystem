"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Link = _interopRequireDefault(require("../components/Link"));

var _Page = _interopRequireDefault(require("./Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'zz'
  }
}).add('Accessibility', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Accessibility standards",
    subTitle: "UX Standards"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Accessible design not only helps users with disabilities; it provides better user experiences for everyone. All components follow the", ' ', /*#__PURE__*/_react.default.createElement("b", null, "WCAG AA standards"), "."), /*#__PURE__*/_react.default.createElement("p", null, "All patterns are perceivable, operable, and understandable to users, even when using a screen reader or other assistive technology. However, how you use these elements also affects the accessibility of a product."), /*#__PURE__*/_react.default.createElement("p", null, "Please find additional information about accessibility in the links below."), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility",
    target: "_blank"
  }, "Accessibility standards of the Carbon Design System")));
});