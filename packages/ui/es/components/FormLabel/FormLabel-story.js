import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';
var additionalProps = {
  className: 'some-class'
};
storiesOf('Components|FormLabel', module).add('Default', function () {
  return /*#__PURE__*/React.createElement(FormLabel, additionalProps, "Label");
});