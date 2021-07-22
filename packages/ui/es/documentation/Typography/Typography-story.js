/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
import { linkTo } from '@storybook/addon-links';
storiesOf('Design|Core', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Typography', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Typography",
    subTitle: "Typefaces & Spacings"
  }, /*#__PURE__*/React.createElement("h3", null, "Typefaces"), /*#__PURE__*/React.createElement("p", null, "Open Sans is the typeface for user interfaces; it\u2019s a round, humanist sans-serif, with incredibly warm appeal. It can be used for both headlines and paragraphs alike, as well as for interface elements."), /*#__PURE__*/React.createElement("h3", null, "How to use it"), /*#__PURE__*/React.createElement("p", null, "Open Sans is already included in the WFP UI's CSS. If you don't want to include the font you can use set", ' ', /*#__PURE__*/React.createElement("span", {
    className: "wfp--inline-highlight"
  }, "$css--font-face: false;"), ' ', "inside scss."), /*#__PURE__*/React.createElement("h3", null, "Other languages & styles"), /*#__PURE__*/React.createElement("p", null, "Open Sans provides various font styles and special language character sets, which can be found on", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://fonts.google.com/specimen/Open+Sans",
    target: "_blank"
  }, "Open Sans on fonts.google.com")), /*#__PURE__*/React.createElement("h3", null, "DNS Naming"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://newgo.wfp.org/documents/dns-conventions/",
    target: "_blank"
  }, "This guide"), ' ', "explains rules for DNS namespace conventions."), /*#__PURE__*/React.createElement("h2", null, "Default formating"), /*#__PURE__*/React.createElement("p", null, "See the", ' ', /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Button', 'Second')
  }, "Story component"), " for applying default styling."), /*#__PURE__*/React.createElement("h2", null, "Headings"), /*#__PURE__*/React.createElement("p", null, "Headings help to add a hierarchy to a page, and they are key identifiers for users reading a page. They should be used in an order that is relevant to the content of a page."), /*#__PURE__*/React.createElement(Blockquote, null, /*#__PURE__*/React.createElement("h1", null, "Heading 1"), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "2.25rem (36px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/React.createElement("h2", null, "Heading 2"), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "1.75rem (28px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/React.createElement("h3", null, "Heading 3"), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "1.25rem (20px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/React.createElement("h4", null, "Heading 4"), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "1.125rem (18px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "600")), /*#__PURE__*/React.createElement("h5", null, "Heading 5"), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "1rem (16px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.25"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "600"))), /*#__PURE__*/React.createElement(Blockquote, null, /*#__PURE__*/React.createElement("h5", null, "Paragraph"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", /*#__PURE__*/React.createElement("sup", null, /*#__PURE__*/React.createElement("a", {
    id: "anker3",
    title: "",
    href: "#fn3"
  }, "3")), ". At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."), /*#__PURE__*/React.createElement(List, {
    kind: "simple",
    colon: true,
    small: true
  }, /*#__PURE__*/React.createElement(ListItem, {
    title: "font-size"
  }, "1rem (16px)"), /*#__PURE__*/React.createElement(ListItem, {
    title: "line-height"
  }, "1.6"), /*#__PURE__*/React.createElement(ListItem, {
    title: "font-weight"
  }, "400"))));
});