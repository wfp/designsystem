function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
var values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled'
};
var props = {
  group: function group() {
    return {
      name: text('The form control name (name in <RadioButtonGroup>)', 'radio-button-group'),
      valueSelected: select('Value of the selected button (valueSelected in <RadioButtonGroup>)', values, 'default-selected'),
      labelText: text('Label text (labelText in <RadioButtonGroup>)', 'Radio button group label'),
      helperText: text('Helper text (labelText in <RadioButtonGroup>)', 'Radio button group helper'),
      vertical: boolean('Vertical (vertical in <RadioButtonGroup>)', false),
      onChange: action('onChange')
    };
  },
  radio: function radio() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled in <RadioButton>)', false),
      labelText: text('Label text (labelText in <RadioButton>)', 'Radio button label')
    };
  },
  check: function check() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled in <Checkbox>)', false),
      labelText: text('Label text (labelText in <Checkbox>)', 'Checkbox label')
    };
  }
};
storiesOf('Components|RadioButtonGroup', module).addDecorator(withKnobs).add('Default', function () {
  var radioProps = props.radio();
  return /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "standard",
    id: "radio-1"
  }, radioProps, {
    labelText: "Radio button label 1"
  })), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "default-selected",
    id: "radio-2"
  }, radioProps, {
    labelText: "Radio button label 2"
  })), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "disabled",
    id: "radio-3"
  }, radioProps, {
    labelText: "Radio 1"
  })));
}).add('Checkbox', function () {
  var checkProps = props.check();
  return /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/React.createElement(Checkbox, _extends({
    value: "standard",
    id: "radio-1"
  }, checkProps)), /*#__PURE__*/React.createElement(Checkbox, _extends({
    value: "default-selected",
    id: "radio-2"
  }, checkProps)), /*#__PURE__*/React.createElement(Checkbox, _extends({
    value: "disabled",
    id: "radio-3"
  }, checkProps)));
});