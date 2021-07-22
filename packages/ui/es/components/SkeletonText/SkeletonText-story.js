/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import SkeletonText from '../SkeletonText';
var widths = {
  '100%': '100%',
  '250px': '250px'
};

var props = function props() {
  return {
    heading: boolean('Skeleton text at a larger size (heading)'),
    paragraph: boolean('Use multiple lines of text (paragraph)'),
    lineCount: number('The number of lines in a paragraph (lineCount)', 3),
    width: select('Width (in px or %) of single line of text or max-width of paragraph lines (width)', widths, '100%')
  };
};

storiesOf('Components|SkeletonText', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px'
    }
  }, /*#__PURE__*/React.createElement(SkeletonText, props()));
});