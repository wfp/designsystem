function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import InputGroup from '../InputGroup';
import RadioButton from '../RadioButton';
var values = {
  standard: 'standard',
  'default-selected': 'default-selected',
  disabled: 'disabled'
};
var props = {
  group: function group() {
    return {
      name: text('The form control name (name in <InputGroup>)', 'input-group'),
      valueSelected: select('Value of the selected button (valueSelected in <InputGroup>)', values, 'default-selected'),
      labelText: text('Label text (labelText in <InputGroup>)', 'Radio button group label'),
      helperText: text('Helper text (labelText in <InputGroup>)', 'Radio button group helper'),
      onChange: action('onChange')
    };
  },
  radio: function radio() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled in <RadioButton>)', false),
      labelText: text('Label text (labelText in <RadioButton>)', 'Radio button label')
    };
  }
};
storiesOf('Components|InputGroup', module).addDecorator(withKnobs).add('Default', function () {
  var radioProps = props.radio();
  return /*#__PURE__*/React.createElement(InputGroup, _extends({
    defaultSelected: "default-selected",
    legend: "Group Legend"
  }, props.group()), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "standard",
    id: "radio-1"
  }, radioProps)), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "default-selected",
    id: "radio-2"
  }, radioProps)), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "disabled",
    id: "radio-3"
  }, radioProps)));
});