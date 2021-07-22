import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainNavigation from '../MainNavigation';
import MainNavigationItem from '../MainNavigationItem';
import Search from '../Search';
import Link from '../Link';
import User from '../User';
storiesOf('Components|MainNavigation', module).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'rtl'
    }
  }, story());
}).add('Right to left',
/*`
    The MainNavigation is used across all applications, it is the starting point of the application and offers the top level navigation items.
  `,*/
function () {
  return /*#__PURE__*/React.createElement(MainNavigation, {
    logo: "WFP UI"
  }, /*#__PURE__*/React.createElement(MainNavigationItem, {
    subNavigation: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Hello World"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))
  }, /*#__PURE__*/React.createElement(Link, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E")), /*#__PURE__*/React.createElement(MainNavigationItem, {
    subNavigation: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "\u0623\u062D\u0643\u0645"))
  }, /*#__PURE__*/React.createElement(Link, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "\u0630\u0627\u062A")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "\u0648\u062D\u062A\u0649")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "\u0623\u0644\u0645\u0627\u0646\u064A\u0627")), /*#__PURE__*/React.createElement(MainNavigationItem, null, /*#__PURE__*/React.createElement(Search, {
    small: true,
    id: "search-2",
    labelText: "\u0628\u062D\u062B",
    placeHolderText: "\u0628\u062D\u062B",
    onChange: action('onChange')
  })), /*#__PURE__*/React.createElement(MainNavigationItem, {
    className: "wfp--main-navigation__user",
    subNavigation: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Hello World"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))
  }, /*#__PURE__*/React.createElement(User, {
    title: "\u0648\u0627\u0644\u0646\u0641\u064A\u0633"
  })));
});