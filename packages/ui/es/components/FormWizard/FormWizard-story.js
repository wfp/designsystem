function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import FormWizard from '../FormWizard';
var props = {
  tabs: function tabs() {
    return {};
  }
};
storiesOf('Components|FormWizard', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(FormWizard, _extends({}, props.tabs(), {
    sidebar: /*#__PURE__*/React.createElement("div", null, "The Sidebar content")
  }), "The Main content");
});