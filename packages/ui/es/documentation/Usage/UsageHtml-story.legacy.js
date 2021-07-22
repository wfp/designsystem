/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
storiesOf('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'z'
  }
}).add('HTML', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "HTML Usage",
    subTitle: "Use the UI Kit without react.js"
  }, /*#__PURE__*/React.createElement("h3", null, "Vanilla.js"), /*#__PURE__*/React.createElement("p", null, "The JS components are built using React, but that does not limit their usage to just React applications. You can render any component in any JavaScript application with ReactDOM.render. Think of it like using a jQuery plugin."), /*#__PURE__*/React.createElement(Blockquote, {
    title: "Usage without react",
    kind: "code"
  }, /*#__PURE__*/React.createElement(PrismCode, {
    component: "pre",
    className: "language-js"
  }, "// Sample overriding settings\nimport ReactDOM from 'react-dom';\nimport { Button } from \"@wfp/ui\";\n\nconst myContainerElement = document.getElementById(\"container\");\n\n// with JSX\nReactDOM.render(<Button>Simple Button</Button>, myContainerElement);\n\n// with vanilla JS, use React.createElement\nReactDOM.render(\n    React.createElement(Button, {\n        className: Classes.SMALL,\n        children: 'Simple button'\n    }),\n    myContainerElement\n);\n")), /*#__PURE__*/React.createElement("p", null, "To remove the component from the DOM and clean up, unmount it:"), /*#__PURE__*/React.createElement(Blockquote, {
    title: "Unmount component",
    kind: "code"
  }, /*#__PURE__*/React.createElement(PrismCode, {
    component: "pre",
    className: "language-js"
  }, "ReactDOM.unmountComponentAtNode(myContainerElement);\n")), /*#__PURE__*/React.createElement("p", null, "Check out the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://reactjs.org/docs/react-api.html",
    target: "_blank"
  }, "React API docs"), ' ', "for more details."), /*#__PURE__*/React.createElement("h3", null, "Usage with Google Chrome"), /*#__PURE__*/React.createElement("p", null, ' ', "Many parts of the UI Kit can be used with html/css only. Download the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://developers.google.com/web/tools/chrome-devtools/"
  }, "Google Chrome DevTools"), ". Right-click on any component, click", ' ', /*#__PURE__*/React.createElement("span", {
    className: "wfp--inline-highlight"
  }, "Inspect"), ", and you'll see the html of that component which can be copied and reused."));
});