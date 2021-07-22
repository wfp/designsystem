function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { SecondaryNavigation, SecondaryNavigationTitle } from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';
import Tabs from '../Tabs';
import Tab from '../Tab';
import { pageWidths } from '../Wrapper';
import { text, select, withKnobs, boolean } from '@storybook/addon-knobs';
var props = {
  secondaryNavigation: function secondaryNavigation() {
    return {
      name: text('The form control name (name in <InputGroup>)', 'input-group'),
      pageWidth: select('Value of the selected button (valueSelected in <InputGroup>)', pageWidths, 'default-selected'),
      labelText: text('Label text (labelText in <InputGroup>)', 'Radio button group label'),
      helperText: text('Helper text (labelText in <InputGroup>)', 'Radio button group helper'),
      vertical: boolean('Vertical (vertical in <InputGroup>)', false)
    };
  },
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
    inline: true
  },
  tab: {
    className: 'another-class'
  }
};
storiesOf('Components|SecondaryNavigation', module).addDecorator(withKnobs).add('default', function () {
  var secondaryNavigationProps = props.secondaryNavigation();
  return /*#__PURE__*/React.createElement(SecondaryNavigation, _extends({}, secondaryNavigationProps, {
    additional: "additional Information"
  }), /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/React.createElement(BreadcrumbHome, null))), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 3")), /*#__PURE__*/React.createElement(SecondaryNavigationTitle, null, "The Page Title"), /*#__PURE__*/React.createElement(Tabs, _extends({}, props.tabs, {
    customTabContent: true
  }), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 1",
    href: "http://www.de.wfp.org"
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 2",
    href: "http://www.es.wfp.org"
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 3",
    href: "http://www.us.wfp.org"
  })), /*#__PURE__*/React.createElement(Tab, _extends({}, props.tab, {
    label: "Tab label 4",
    href: "http://www.fr.wfp.org"
  }))));
}).add('Heading only', function () {
  return /*#__PURE__*/React.createElement(SecondaryNavigation, {
    additional: "additional Information"
  }, /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/React.createElement(BreadcrumbHome, null))), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 3")), /*#__PURE__*/React.createElement(SecondaryNavigationTitle, null, "The Page Title"));
});