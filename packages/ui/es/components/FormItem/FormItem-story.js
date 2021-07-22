import React from 'react';
import { storiesOf } from '@storybook/react';
import FormItem from './FormItem';
import NumberInput from '../NumberInput';
storiesOf('Components|FormItem', module).add('Default', function () {
  return /*#__PURE__*/React.createElement(FormItem, null, /*#__PURE__*/React.createElement(NumberInput, {
    id: "number-input-1"
  }));
});