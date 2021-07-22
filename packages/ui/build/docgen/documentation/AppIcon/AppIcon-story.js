"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Page = _interopRequireDefault(require("../Page"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var fileSizes = [120, 152, 160, 167, 180, 192, 300];
(0, _react2.storiesOf)('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('App icons', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "App icons",
    subTitle: "Icons for Android & iOS"
  }, /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    warning: true,
    title: "Work in progress"
  }, "Please notice that this page is currently a draft."), /*#__PURE__*/_react.default.createElement("p", null, "All WFP apps should use a custom made icon to be distinguishable. By using the branding colors the icon should be recognizable as an WFP app."), /*#__PURE__*/_react.default.createElement("p", null, "For Android Apps please follow the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://developer.android.com/google-play/resources/icon-design-specifications",
    target: "_blan"
  }, "Guidelines")), /*#__PURE__*/_react.default.createElement("p", null, "Mobile operating systems automatically add the name of the app near the icon, thus allowing users to distinguish different WFP apps in case more than one is installed on a user device.", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "http://newgo.wfp.org/how-do-i/create-a-wfp-app-icon",
    target: "_blank"
  }, "More Information")), /*#__PURE__*/_react.default.createElement("h3", null, "Sizes"), /*#__PURE__*/_react.default.createElement("img", {
    alt: "WFP Icon",
    style: {
      border: '1px solid #E5E5E5',
      width: 100,
      height: 100
    },
    src: "".concat(process.env.STORYBOOK_ASSETS, "app/WFP_APP_ICON_300x300.png")
  }), /*#__PURE__*/_react.default.createElement("br", null), fileSizes.map(function (fileSize) {
    return /*#__PURE__*/_react.default.createElement(_Link.default, {
      small: true,
      style: {
        marginRight: '0.5em',
        fontSize: '0.7em'
      },
      target: "_blank",
      href: "".concat(process.env.STORYBOOK_ASSETS, "app/WFP_APP_ICON_").concat(fileSize, "x").concat(fileSize, ".png")
    }, fileSize, " x ", fileSize, "px");
  }));
});