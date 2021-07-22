import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import FormHint from './FormHint';

var props = function props() {
  return {
    className: 'some-class',
    children: text('Label text (labelText)', 'Lorem Ipsum')
  };
};

storiesOf('Components|FormHint', module).addDecorator(withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/React.createElement("label", {
    className: "wfp--label",
    htmlFor: "input"
  }, "The Label ", /*#__PURE__*/React.createElement(FormHint, props()));
});