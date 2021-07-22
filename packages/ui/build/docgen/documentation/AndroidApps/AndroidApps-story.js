"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonLinks = require("@storybook/addon-links");

var _Link = _interopRequireDefault(require("../../components/Link"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Page = _interopRequireDefault(require("../Page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Android apps', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "Android apps",
    subTitle: "UX Standards"
  }, /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "In development",
    type: "warning"
  }, "This page is subject to change and will be updated soon."), /*#__PURE__*/_react.default.createElement("p", null, "Internal Applications often only have to work on Android devices, therefor the design should be based the principles of the Googles Material UI."), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, "Use", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Design|Guidelines', 'Colours')
  }, "WFP's branding colours")), /*#__PURE__*/_react.default.createElement("li", null, "Use", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    onClick: (0, _addonLinks.linkTo)('Design|Guidelines', 'Typography')
  }, "Open Sans"), ' ', "as font"), /*#__PURE__*/_react.default.createElement("li", null, "Use shadows only to highlight important elements"), /*#__PURE__*/_react.default.createElement("li", null, "Keep in mind that applications often run on low-end devices with lacking network coverage")), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Toolkit",
    style: {
      width: '110%',
      height: 'auto',
      marginTop: '2em',
      marginBottom: '2em',
      marginLeft: '-5%'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/mobile-android-general.png")
  }), /*#__PURE__*/_react.default.createElement("p", null, "Use the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://material.io/tools/",
    target: "_blank"
  }, "Android Material Editor"), ' ', "as a starting point."), /*#__PURE__*/_react.default.createElement("h4", null, "Supported devices"), /*#__PURE__*/_react.default.createElement("p", null, "Check your target audience before starting the development. Usually WFP's applications only need to work on Android."), /*#__PURE__*/_react.default.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://material.io/develop/android/",
    target: "_blank"
  }, "Google Material UI Android development"))));
});