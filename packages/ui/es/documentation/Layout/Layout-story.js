/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import { List, ListItem } from '../../components/List';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Layout', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Layout",
    subTitle: "Layout & Grid"
  }, /*#__PURE__*/React.createElement("p", null, "[Add Image here]"), /*#__PURE__*/React.createElement("p", null, "The basic structure of your webapplication is defined by the layout. To choose the right approach it is important to know about the data density and structure."), /*#__PURE__*/React.createElement("h2", null, "Option 1: Fluid width layout (for applications)"), /*#__PURE__*/React.createElement("p", null, "Fluid width allows the design the expand based on the user's settings, which is a good thing."), /*#__PURE__*/React.createElement("p", null, "This is especially useful for productive application with a high data density, because no space is wasted."), /*#__PURE__*/React.createElement("p", null, "Unfortunally, in edge cases the line lengths may get too long to be easily readable."), /*#__PURE__*/React.createElement("p", null, "The width of the grid and content area grows exponentially and the margin always remain at 5%. The width of each column continuiously grows and gutters remain at 20px."), /*#__PURE__*/React.createElement("h3", null, "Use fluid width layout for:"), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "dashboards"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "large tables"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "productive applications")), /*#__PURE__*/React.createElement("h2", null, "Option 2: Max width (for text)"), /*#__PURE__*/React.createElement("p", null, "[Add Image here]"), /*#__PURE__*/React.createElement("p", null, "Fixed width layouts give you a maximum width of the content you are displaying. This helps avoiding edge cases and issues like too long text."), /*#__PURE__*/React.createElement("p", null, "The max width is 1200px, with the margins growing exponentially past that point. Content and columns are centered on page and the margins grow equally on left and right of content. If a side panel exists with a max width layout, then the panel should stick to the edges of the viewport with the exponential margin between the grid columns and the panel. This is not an ideal usecase."), /*#__PURE__*/React.createElement(List, {
    kind: "bullet"
  }, /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "blogs"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "news articles"), /*#__PURE__*/React.createElement(ListItem, {
    kind: "checkmark"
  }, "in certain circumstances forms")));
});