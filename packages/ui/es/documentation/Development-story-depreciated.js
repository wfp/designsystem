/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Development', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Development",
    subTitle: "Help improving the UI Kit"
  }, /*#__PURE__*/React.createElement("p", null, "Development is made on a GitHub repository. Feel free create an Issue or submit a pull request.", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://github.com/wfp/ui"
  }, "Project on GitHub")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("iframe", {
    title: "GitHub Like",
    src: "https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large",
    frameBorder: "0",
    scrolling: "0",
    width: "160px",
    height: "30px"
  }), /*#__PURE__*/React.createElement("h3", null, "NPM"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.npmjs.com/package/@wfp/ui"
  }, "Package on npm")));
});