/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Value from '../Value';
import Unit from '../Unit';

var props = function props() {
  return {
    className: 'some-class',
    title: text('The title (title)', 'Value title'),
    value: /*#__PURE__*/React.createElement(Unit, {
      type: "Usd",
      input: "thousand",
      output: "million",
      showZero: true,
      hideEmpty: true
    }, "1234567"),
    secondaryValue: /*#__PURE__*/React.createElement(Unit, {
      type: "Usd",
      input: "thousand",
      output: "million",
      showZero: true,
      hideEmpty: true
    }, "1234567"),
    onClick: function (handler) {
      return function (evt) {
        evt.preventDefault(); // Prevent link from being followed for demo purpose

        handler(evt);
      };
    }(action('onClick'))
  };
};

storiesOf('Components|Value (experimental)', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Value, props());
});