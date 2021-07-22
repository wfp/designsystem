"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _MainNavigation = _interopRequireDefault(require("../MainNavigation"));

var _MainNavigationItem = _interopRequireDefault(require("../MainNavigationItem"));

var _Search = _interopRequireDefault(require("../Search"));

var _Link = _interopRequireDefault(require("../Link"));

var _User = _interopRequireDefault(require("../User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|MainNavigation', module).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      direction: 'rtl'
    }
  }, story());
}).add('Right to left',
/*`
    The MainNavigation is used across all applications, it is the starting point of the application and offers the top level navigation items.
  `,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_MainNavigation.default, {
    logo: "WFP UI"
  }, /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, {
    subNavigation: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, {
    subNavigation: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "\u0623\u062D\u0643\u0645"))
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "\u0630\u0627\u062A")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "\u0648\u062D\u062A\u0649")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "\u0623\u0644\u0645\u0627\u0646\u064A\u0627")), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    small: true,
    id: "search-2",
    labelText: "\u0628\u062D\u062B",
    placeHolderText: "\u0628\u062D\u062B",
    onChange: (0, _addonActions.action)('onChange')
  })), /*#__PURE__*/_react.default.createElement(_MainNavigationItem.default, {
    className: "wfp--main-navigation__user",
    subNavigation: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))
  }, /*#__PURE__*/_react.default.createElement(_User.default, {
    title: "\u0648\u0627\u0644\u0646\u0641\u064A\u0633"
  })));
});