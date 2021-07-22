import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationLink, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem } from '../SubNavigation';
import Search from '../Search';
import Button from '../Button';
import Link from '../Link';
storiesOf('Components|SubNavigation', module).add('default',
/*`
    The SubNavigation is used as a part of the MainNavigation is used across all applications and offers the secondary level navigation items.
  `,*/
function () {
  return /*#__PURE__*/React.createElement(SubNavigation, null, /*#__PURE__*/React.createElement(SubNavigationHeader, null, /*#__PURE__*/React.createElement(SubNavigationTitle, null, "The Title"), /*#__PURE__*/React.createElement(SubNavigationLink, null, /*#__PURE__*/React.createElement(Button, {
    small: true
  }, "The SubPage Link")), /*#__PURE__*/React.createElement(SubNavigationFilter, null, /*#__PURE__*/React.createElement(Search, {
    className: "some-class",
    small: true,
    id: "search-2",
    labelText: "Filter",
    placeHolderText: "Filter",
    onChange: function onChange() {
      alert('Apply Filter');
    }
  }))), /*#__PURE__*/React.createElement(SubNavigationContent, null, /*#__PURE__*/React.createElement(SubNavigationList, null, /*#__PURE__*/React.createElement(SubNavigationGroup, {
    title: "First List",
    columns: true
  }, /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs"))), /*#__PURE__*/React.createElement(SubNavigationGroup, {
    title: "Second List of Items"
  }, /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React.createElement(SubNavigationItem, null, /*#__PURE__*/React.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs"))))));
});