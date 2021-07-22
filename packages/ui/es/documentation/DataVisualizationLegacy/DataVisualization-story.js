/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Data visualization', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Data visualization",
    subTitle: "Guidelines"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://brand.manuals.wfp.org/en/data-visualization-guidance/",
    target: "_blank"
  }, "More Information"), ' ', "on data visualization."));
});