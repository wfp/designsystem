import React from 'react';
import markdown from './README.mdx';
import SidebarItem from './SidebarItem';
import Tag from '../Tag';
export default {
  title: 'Components/UI Elements/SidebarItem',
  component: SidebarItem,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown
  }
};
export var Regular = function Regular(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(SidebarItem, args));
};
Regular.args = {
  title: "Title",
  content: "content",
  subContent: 'sub content',
  additionalInfo: 'Additional',
  hintInfo: /*#__PURE__*/React.createElement(Tag, null, "hint")
};
export var NoImage = function NoImage(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(SidebarItem, args));
};
NoImage.args = {
  title: "831 students",
  content: "409 boys, 422 girls",
  subContent: 'meal served',
  additionalInfo: 'Friday, 21.02.20',
  noImage: true,
  hintInfo: /*#__PURE__*/React.createElement(Tag, {
    type: "warning"
  }, "not synced")
};