"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _SubNavigation = require("../SubNavigation");

var _Search = _interopRequireDefault(require("../Search"));

var _Button = _interopRequireDefault(require("../Button"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|SubNavigation', module).add('default',
/*`
    The SubNavigation is used as a part of the MainNavigation is used across all applications and offers the secondary level navigation items.
  `,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigation, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationHeader, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationTitle, null, "The Title"), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationLink, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    small: true
  }, "The SubPage Link")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationFilter, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    className: "some-class",
    small: true,
    id: "search-2",
    labelText: "Filter",
    placeHolderText: "Filter",
    onChange: function onChange() {
      alert('Apply Filter');
    }
  }))), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationContent, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationList, null, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationGroup, {
    title: "First List",
    columns: true
  }, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs"))), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationGroup, {
    title: "Second List of Items"
  }, /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/_react.default.createElement(_SubNavigation.SubNavigationItem, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs"))))));
});