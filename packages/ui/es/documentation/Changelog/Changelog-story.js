/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
import Changelog from '../../../CHANGELOG.md';
import ReactMarkdown from 'react-markdown';
import './_changelog.scss';
storiesOf('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'zzz'
  }
}).add("What's new in 1.4", function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Changelog",
    subTitle: "Latest updates and versions"
  }, /*#__PURE__*/React.createElement(Blockquote, {
    title: "UI-Kit 1.4 is available",
    kind: "warning"
  }, "We've just release the new version of the UI Kit. Get the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://www.npmjs.com/package/@wfp/ui",
    target: "_blank"
  }, "latest version"), ' ', "now or read the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://github.com/wfp/ui/blob/master/CHANGELOG.md",
    target: "_blank"
  }, "full changelog.")), /*#__PURE__*/React.createElement("div", {
    className: "changelog"
  }, /*#__PURE__*/React.createElement(ReactMarkdown, {
    source: Changelog
  })));
});