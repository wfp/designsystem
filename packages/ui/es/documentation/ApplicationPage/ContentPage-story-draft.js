/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Content page', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Content Page",
    subTitle: "Regular Content Page"
  }, /*#__PURE__*/React.createElement("h3", null, "Where to use?"), /*#__PURE__*/React.createElement("p", null, "This is currently a draft."));
});