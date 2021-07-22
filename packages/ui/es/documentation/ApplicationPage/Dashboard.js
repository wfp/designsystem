/* eslint-disable no-console */
import React from 'react';
import Link from '../../components/Link';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import Page from '../Page';
import { linkTo } from '@storybook/addon-links';
export default function Dashboard() {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Dashboard design",
    subTitle: "Operational & Analytical applications"
  }, /*#__PURE__*/React.createElement("h3", null, "When to use it?"), /*#__PURE__*/React.createElement("p", null, "Use the Dashboard pattern whenever you have to display data with a high content density."), /*#__PURE__*/React.createElement("h4", null, "Operational dashboard (Application)"), /*#__PURE__*/React.createElement("p", null, "Operational dashboards aim to impart information quickly to users as they are engaged in time-sensitive tasks. Main goals of the operational dashboard are to present all the information the user needs to take action and provide him with the tools for entering the information. The dasboard should help users to be quick, proactive, and efficient."), /*#__PURE__*/React.createElement("h4", null, "Analytical dashboard"), /*#__PURE__*/React.createElement("p", null, "Analytical dashboards provide the user with information used for analysis and decision making, and are less time sensitive and not focused on taking action. A primary goal is to help users make the best sense of the data, analyze trends and drive decision making."), /*#__PURE__*/React.createElement("h3", null, "When not to use?"), /*#__PURE__*/React.createElement("p", null, "Avoid using the dashboard pattern for editorial pages or pages where the content can't be structured."), /*#__PURE__*/React.createElement("h3", null, "How to use it?"), /*#__PURE__*/React.createElement("p", null, "Place ", /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Components', 'Module')
  }, "Modules (sometimes called Cards)"), " inside a ", /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Components', 'Wrapper')
  }, "Wrapper"), " component.", /*#__PURE__*/React.createElement("br", null), " An example can be found ", /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Templates', 'Application Page')
  }, " here"), "."), /*#__PURE__*/React.createElement("h4", null, "What are Modules?"), /*#__PURE__*/React.createElement("p", null, "Modules are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Contained"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "A Module is identifiable as a single, contained unit."))), /*#__PURE__*/React.createElement(Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Independent"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "A Module can stand alone, without relying on surrounding elements for context."))), /*#__PURE__*/React.createElement(Module, {
    light: true,
    className: "col-xs-12 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Individual"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "A card cannot merge with another card, or divide into multiple cards.")))), "Source: https://material.io/design/components/cards.html#anatomy", /*#__PURE__*/React.createElement("p", null, "Put the name in the top left corner, align controls or actions to the top right corner of the Module and place the information in the content. The ModuleFooter can be used to show additional functionality like sharing or exporting."), /*#__PURE__*/React.createElement("p", null, "Using Modules has additional benefits of flexibility when it comes to responsive design."), /*#__PURE__*/React.createElement("p", null, "If possible use the full width of the screen as maximal width."), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c",
    target: "_blank"
  }, "10 rules for better dashboard design by UX Planet")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://material.io/design/components/cards.html",
    target: "_blank"
  }, "Cards in Material UI"))));
}