function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Button from '../Button';
import Hero from '.';
var kinds = {
  'Landscape (landscape)': 'landscape',
  'Landscape Light (landscape-light)': 'landscape-light',
  'Split (split)': 'split',
  'Hero (hero)': 'hero',
  'Page splash (splash)': 'splash',
  'Page splash image (splash-image)': 'splash-image',
  'Page splash compact (splash-compact)': 'splash-compact',
  'Related content (related)': 'related',
  Teaser: 'teaser'
};
var buttons = {
  regular: /*#__PURE__*/React.createElement(Button, null, "Read More"),
  inverse: /*#__PURE__*/React.createElement(Button, {
    kind: "inverse"
  }, "Read More")
};
var buttonKinds = {
  'Hero default (inverse)': 'inverse',
  'Hero default (regular)': 'regular'
};
var props = {
  set: function set() {
    return {
      className: 'some-class',
      kind: select('Card kind (kind)', kinds, 'landscape'),
      title: text('Title (title)', 'The Climate Adaption Mangement and Innovation Initiative'),
      metadata: text('Metadata (metadata)', 'Another Category'),
      moreButton: select('More element (more)', buttonKinds, 'inverse'),
      subTitle: text('Subtitle (subTitle)', 'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.'),
      image: text('Image URL (image)', 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg'),
      url: text('Link (url)', 'http://www.wfp.org/'),
      isExternal: boolean('Is external (isExternal)', false),
      isLink: boolean('Is link (isLink)', true)
    };
  }
};
storiesOf('Components|Hero', module).addDecorator(withKnobs).addParameters({
  jest: ['Card-test']
}).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, story());
}).add('Default (experimental)', function () {
  var setProps = props.set();
  return /*#__PURE__*/React.createElement(Hero, _extends({}, setProps, {
    more: buttons[setProps.moreButton]
  }));
});