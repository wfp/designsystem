"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _reactPrism = _interopRequireDefault(require("react-prism"));

var _Page = _interopRequireDefault(require("../Page"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

var _Link = _interopRequireDefault(require("../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'z'
  }
}).add('HTML', function () {
  return /*#__PURE__*/_react.default.createElement(_Page.default, {
    title: "HTML Usage",
    subTitle: "Use the UI Kit without react.js"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Vanilla.js"), /*#__PURE__*/_react.default.createElement("p", null, "The JS components are built using React, but that does not limit their usage to just React applications. You can render any component in any JavaScript application with ReactDOM.render. Think of it like using a jQuery plugin."), /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "Usage without react",
    kind: "code"
  }, /*#__PURE__*/_react.default.createElement(_reactPrism.default, {
    component: "pre",
    className: "language-js"
  }, "// Sample overriding settings\nimport ReactDOM from 'react-dom';\nimport { Button } from \"@wfp/ui\";\n\nconst myContainerElement = document.getElementById(\"container\");\n\n// with JSX\nReactDOM.render(<Button>Simple Button</Button>, myContainerElement);\n\n// with vanilla JS, use React.createElement\nReactDOM.render(\n    React.createElement(Button, {\n        className: Classes.SMALL,\n        children: 'Simple button'\n    }),\n    myContainerElement\n);\n")), /*#__PURE__*/_react.default.createElement("p", null, "To remove the component from the DOM and clean up, unmount it:"), /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "Unmount component",
    kind: "code"
  }, /*#__PURE__*/_react.default.createElement(_reactPrism.default, {
    component: "pre",
    className: "language-js"
  }, "ReactDOM.unmountComponentAtNode(myContainerElement);\n")), /*#__PURE__*/_react.default.createElement("p", null, "Check out the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://reactjs.org/docs/react-api.html",
    target: "_blank"
  }, "React API docs"), ' ', "for more details."), /*#__PURE__*/_react.default.createElement("h3", null, "Usage with Google Chrome"), /*#__PURE__*/_react.default.createElement("p", null, ' ', "Many parts of the UI Kit can be used with html/css only. Download the", ' ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "https://developers.google.com/web/tools/chrome-devtools/"
  }, "Google Chrome DevTools"), ". Right-click on any component, click", ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--inline-highlight"
  }, "Inspect"), ", and you'll see the html of that component which can be copied and reused."));
});