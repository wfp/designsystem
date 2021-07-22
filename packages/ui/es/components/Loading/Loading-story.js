function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Loading from '../Loading';

var props = function props() {
  return {
    active: boolean('Active (active)', true),
    withOverlay: boolean('With overlay (withOverlay)', false),
    small: boolean('Small (small)', false)
  };
};

storiesOf('Components|Loading', module).addDecorator(withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/React.createElement(Loading, _extends({}, props(), {
    className: 'some-class'
  }));
});