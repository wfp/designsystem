function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import FormGroup from '../FormGroup';
import Checkbox from '../Checkbox';
import CheckboxSkeleton from '../Checkbox/Checkbox.Skeleton';

var props = function props() {
  return {
    className: 'some-class',
    labelText: text('Label text (labelText)', 'Checkbox label'),
    indeterminate: boolean('Intermediate (indeterminate)', false),
    disabled: boolean('Disabled (disabled)', false),
    hideLabel: boolean('No label (hideLabel)', false),
    wrapperClassName: text('Wrapper CSS class name (wrapperClassName)', ''),
    onChange: action('onChange')
  };
};

storiesOf('Components|Checkbox', module).addDecorator(withKnobs).add('checked', function () {
  var checkboxProps = props();
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "wfp--fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/React.createElement(Checkbox, _extends({
    defaultChecked: true
  }, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/React.createElement(Checkbox, _extends({
    defaultChecked: true
  }, checkboxProps, {
    id: "checkbox-label-2"
  })));
}).add('unchecked', function () {
  var checkboxProps = props();
  return /*#__PURE__*/React.createElement("fieldset", {
    className: "wfp--fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxProps, {
    id: "checkbox-label-2"
  })));
}).add('inline', function () {
  var checkboxProps = props();
  return /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--fieldset__inline"
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxProps, {
    id: "checkbox-label-2"
  }))));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CheckboxSkeleton, null));
});