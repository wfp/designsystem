var _this = this;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import StepNavigation from '../StepNavigation';
import StepNavigationItem from '../StepNavigationItem';

var handleTabClick = function handleTabClick(index) {
  _this.setState({
    page: index
  });
};

var props = function props() {
  return {
    className: 'additional-class',
    vertical: boolean('Display vertical (vertical)', false),
    small: boolean('Small size (small)', false),
    selectedPage: number('Currently selected page (selectedPage)', 1),
    handleTabClick: handleTabClick
  };
};

storiesOf('Components|StepNavigation', module).addDecorator(withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/React.createElement(StepNavigation, props(), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Item without Status",
    page: 0
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Active Item",
    page: 1
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Not started Item",
    page: 2,
    status: "not-started"
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Warning Item",
    page: 3,
    status: "warning"
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Complete Item",
    page: 4,
    status: "complete"
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Skipped Item",
    page: 4,
    status: "skip"
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Disabled Item",
    page: 5,
    status: "disabled"
  }), /*#__PURE__*/React.createElement(StepNavigationItem, {
    label: "Locked Item",
    page: 6,
    status: "locked"
  }));
});