function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import RadioButton from '../RadioButton';
import RadioButtonSkeleton from '../RadioButton/RadioButton.Skeleton';

var radioProps = function radioProps() {
  return {
    className: 'some-class',
    name: text('Form item name (name)', 'test'),
    value: text('Value (value)', 'standard'),
    labelText: text('Label text (labelText)', 'Standard Radio Button'),
    checked: boolean('Checked (checked)', false),
    disabled: boolean('Disabled (disabled)', false),
    onChange: action('onChange')
  };
};

storiesOf('Components|RadioButton', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(RadioButton, _extends({
    id: "radio-1"
  }, radioProps()));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RadioButtonSkeleton, null));
});