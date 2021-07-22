function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Toggle from '../Toggle';
import ToggleSkeleton from '../Toggle/Toggle.Skeleton';

var toggleProps = function toggleProps() {
  return {
    className: 'some-class',
    toggled: boolean('Toggled (toggled)', false),
    labelA: text('Label for untoggled state (labelA)', 'Off'),
    labelB: text('Label for toggled state (labelB)', 'On'),
    onChange: action('onChange'),
    onToggle: action('onToggle')
  };
};

storiesOf('Components|Toggle', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Toggle, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement(ToggleSkeleton, null);
});