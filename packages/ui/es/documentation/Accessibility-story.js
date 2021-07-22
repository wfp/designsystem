/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
storiesOf('Getting started|Getting started', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
    sort: 'zz'
  }
}).add('Accessibility', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Accessibility standards",
    subTitle: "UX Standards"
  }, /*#__PURE__*/React.createElement("p", null, "Accessible design not only helps users with disabilities; it provides better user experiences for everyone. All components follow the", ' ', /*#__PURE__*/React.createElement("b", null, "WCAG AA standards"), "."), /*#__PURE__*/React.createElement("p", null, "All patterns are perceivable, operable, and understandable to users, even when using a screen reader or other assistive technology. However, how you use these elements also affects the accessibility of a product."), /*#__PURE__*/React.createElement("p", null, "Please find additional information about accessibility in the links below."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://next.carbondesignsystem.com/guidelines/accessibility/overview#carbon-and-accessibility",
    target: "_blank"
  }, "Accessibility standards of the Carbon Design System")));
});