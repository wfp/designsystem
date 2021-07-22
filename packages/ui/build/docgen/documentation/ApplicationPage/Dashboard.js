"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dashboard;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _Module = require("../../components/Module");

var _Page = _interopRequireDefault(require("../Page"));

var _addonLinks = require("@storybook/addon-links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
function Dashboard() {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Dashboard design",
    subTitle: "Operational & Analytical applications"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "When to use it?"), /*#__PURE__*/_react.default.createElement("p", null, "Use the Dashboard pattern whenever you have to display data with a high content density."), /*#__PURE__*/_react.default.createElement("h4", null, "Operational dashboard (Application)"), /*#__PURE__*/_react.default.createElement("p", null, "Operational dashboards aim to impart information quickly to users as they are engaged in time-sensitive tasks. Main goals of the operational dashboard are to present all the information the user needs to take action and provide him with the tools for entering the information. The dasboard should help users to be quick, proactive, and efficient."), /*#__PURE__*/_react.default.createElement("h4", null, "Analytical dashboard"), /*#__PURE__*/_react.default.createElement("p", null, "Analytical dashboards provide the user with information used for analysis and decision making, and are less time sensitive and not focused on taking action. A primary goal is to help users make the best sense of the data, analyze trends and drive decision making."), /*#__PURE__*/_react.default.createElement("h3", null, "When not to use?"), /*#__PURE__*/_react.default.createElement("p", null, "Avoid using the dashboard pattern for editorial pages or pages where the content can't be structured."), /*#__PURE__*/_react.default.createElement("h3", null, "How to use it?"), /*#__PURE__*/_react.default.createElement("p", null, "Place ", /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Components', 'Module')
  }, "Modules (sometimes called Cards)"), " inside a ", /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Components', 'Wrapper')
  }, "Wrapper"), " component.", /*#__PURE__*/_react.default.createElement("br", null), " An example can be found ", /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Templates', 'Application Page')
  }, " here"), "."), /*#__PURE__*/_react.default.createElement("h4", null, "What are Modules?"), /*#__PURE__*/_react.default.createElement("p", null, "Modules are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_Module.Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Contained"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "A Module is identifiable as a single, contained unit."))), /*#__PURE__*/_react.default.createElement(_Module.Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Independent"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "A Module can stand alone, without relying on surrounding elements for context."))), /*#__PURE__*/_react.default.createElement(_Module.Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Individual"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "A card cannot merge with another card, or divide into multiple cards.")))), "Source: https://material.io/design/components/cards.html#anatomy", /*#__PURE__*/_react.default.createElement("p", null, "Put the name in the top left corner, align controls or actions to the top right corner of the Module and place the information in the content. The ModuleFooter can be used to show additional functionality like sharing or exporting."), /*#__PURE__*/_react.default.createElement("p", null, "Using Modules has additional benefits of flexibility when it comes to responsive design."), /*#__PURE__*/_react.default.createElement("p", null, "If possible use the full width of the screen as maximal width."), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c",
    target: "_blank"
  }, "10 rules for better dashboard design by UX Planet")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://material.io/design/components/cards.html",
    target: "_blank"
  }, "Cards in Material UI"))));
}