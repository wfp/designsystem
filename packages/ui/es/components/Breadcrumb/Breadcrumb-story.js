/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbHome from '../BreadcrumbHome';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';

var props = function props() {
  return {
    className: 'some-class',
    onClick: action('onClick')
  };
};

storiesOf('Components|Breadcrumb', module).addParameters({
  jest: ['Breadcrumb']
}).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Breadcrumb, props(), /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/React.createElement(BreadcrumbHome, null))), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    disableLink: true
  }, "Breadcrumb 3"));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement(BreadcrumbSkeleton, null);
});