function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';
import { ToastContainer, toast } from 'react-toastify';
import notificationStyle from './Notification';
import Icon from '../Icon';
import { iconCheckmarkGlyph } from '@wfp/icons';
import Button from '../Button';
var displayTypes = {
  'default (default)': 'default',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning',
  'error (error)': 'error'
};
var props = {
  regular: function regular() {
    return {
      hideProgressBar: boolean('hideProgressBar (hideProgressBar)', true),
      autoClose: number('Auto close (autoClose)', 229000),
      type: select('Display Type (type)', displayTypes, undefined)
    };
  }
};
storiesOf('Components|Notification', module).addDecorator(withKnobs).add('Default (experimental)', function () {
  var notify = function notify() {
    toast('A regular message');
  };

  var notifyAll = function notifyAll() {
    toast.success( /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      icon: iconCheckmarkGlyph
    }), " Wow so easy!"));
    toast.success('Wow so easy!');
    toast.warn('Please check again!');
    toast.error('Something went terribly wrong!');
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: notify
  }, "Regular notification"), ' ', /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    onClick: notifyAll
  }, "All Notifications"), /*#__PURE__*/React.createElement(ToastContainer, _extends({}, notificationStyle, props.regular())));
});