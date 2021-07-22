"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _List = require("../../components/List");

var _addonLinks = require("@storybook/addon-links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Core', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Typography', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Typography",
    subTitle: "Typefaces & Spacings"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Typefaces"), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans is the typeface for user interfaces; it\u2019s a round, humanist sans-serif, with incredibly warm appeal. It can be used for both headlines and paragraphs alike, as well as for interface elements."), /*#__PURE__*/_react.default.createElement("h3", null, "How to use it"), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans is already included in the WFP UI's CSS. If you don't want to include the font you can use set", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--inline-highlight"
  }, "$css--font-face: false;"), ' ', "inside scss."), /*#__PURE__*/_react.default.createElement("h3", null, "Other languages & styles"), /*#__PURE__*/_react.default.createElement("p", null, "Open Sans provides various font styles and special language character sets, which can be found on", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://fonts.google.com/specimen/Open+Sans",
    target: "_blank"
  }, "Open Sans on fonts.google.com")), /*#__PURE__*/_react.default.createElement("h3", null, "DNS Naming"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://newgo.wfp.org/documents/dns-conventions/",
    target: "_blank"
  }, "This guide"), ' ', "explains rules for DNS namespace conventions."), /*#__PURE__*/_react.default.createElement("h2", null, "Default formating"), /*#__PURE__*/_react.default.createElement("p", null, "See the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Button', 'Second')
  }, "Story component"), " for applying default styling."), /*#__PURE__*/_react.default.createElement("h2", null, "Headings"), /*#__PURE__*/_react.default.createElement("p", null, "Headings help to add a hierarchy to a page, and they are key identifiers for users reading a page. They should be used in an order that is relevant to the content of a page."), /*#__PURE__*/_react.default.createElement(_Blockquote.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Heading 1"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "2.25rem (36px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/_react.default.createElement("h2", null, "Heading 2"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "1.75rem (28px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/_react.default.createElement("h3", null, "Heading 3"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "1.25rem (20px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/_react.default.createElement("h4", null, "Heading 4"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "1.125rem (18px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/_react.default.createElement("h5", null, "Heading 5"), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "1rem (16px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "600"))), /*#__PURE__*/_react.default.createElement(_Blockquote.default, null, /*#__PURE__*/_react.default.createElement("h5", null, "Paragraph"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", /*#__PURE__*/_react.default.createElement("sup", null, /*#__PURE__*/_react.default.createElement("a", {
    id: "anker3",
    title: "",
    href: "#fn3"
  }, "3")), ". At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."), /*#__PURE__*/_react.default.createElement(_List.List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-size"
  }, "1rem (16px)"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "line-height"
  }, "1.6"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    title: "font-weight"
  }, "400"))));
});