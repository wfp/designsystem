"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Credits;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Credits() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://brand.manuals.wfp.org/",
    target: "_blank"
  }, "The World Food Programme\u2019s (WFP) Branding Guidance"), ' ', "was published first in 2009 and has now been effectively implemented across the organization, strengthening WFP\u2019s brand image through consistent representation. This new version shall reflect the changes in technology."), /*#__PURE__*/_react.default.createElement("h3", null, "The UI Kit is be heavily based on"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/carbon-design-system/carbon-components",
    target: "_blank"
  }, "Carbon Design System by IBM")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://designsystem.digital.gov/page-templates",
    target: "_blank"
  }, "U.S. Webdesign System")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/frederik-jacques/sketch-favicon-exporter-template",
    target: "_blank"
  }, "Sketch Favicon Exporter Template"))), /*#__PURE__*/_react.default.createElement("h3", null, "Contributing"), /*#__PURE__*/_react.default.createElement("p", null, "Development is made on a GitHub repository. Feel free create an Issue or submit a pull request.", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://github.com/wfp/ui",
    target: "_blank"
  }, "Project on GitHub")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("iframe", {
    title: "GitHub Like",
    src: "https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large",
    frameBorder: "0",
    scrolling: "0",
    width: "160px",
    height: "30px"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "NPM"), /*#__PURE__*/_react.default.createElement("p", null, "npm is a package manager for the JavaScript programming language. All versions of the UI Kit will be published there.", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://www.npmjs.com/package/@wfp/ui",
    target: "_blank"
  }, "View package on npm")));
}