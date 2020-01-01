/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import ReadMore from '../ReadMore';
import Truncate from 'react-truncate';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import Button from '../Button';

const moreText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntet dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

const collapsed = (
  <Truncate lines={1} ellipsis="...">
    {moreText}
  </Truncate>
);

const props = {
  regular: () => ({
    className: 'some-class',
    collapsed: collapsed,
    children: text('The expanded content (children)', moreText),
    expandText: text('Expand text (expandText)', undefined),
    collapseText: text('Collapse text (collapseText)', undefined),
    maxHeight: number('Collapsed maximum Height (maxHeight)', undefined),
    fade: boolean('Fade (fade)', false),
  }),
  fade: () => ({
    className: 'some-class',
    children: text('The expanded content (children)', moreText),
    expandText: text('Expand text (expandText)', undefined),
    collapseText: text('Collapse text (collapseText)', undefined),
    maxHeight: number('Collapsed maximum Height (maxHeight)', 50),
    fade: boolean('Fade (fade)', true),
  }),
  customButton: () => ({
    className: 'some-class',
    children: text('The expanded content (children)', moreText),
    expandLink: <Button>Expand</Button>,
    collapseLink: <Button>Collapse</Button>,
    maxHeight: number('Collapsed maximum Height (maxHeight)', 50),
    fade: boolean('Fade (fade)', true),
  }),
};

storiesOf('Components|ReadMore', module)
  .addDecorator(withKnobs)
  .add('Default (experimental)', () => <ReadMore {...props.regular()} />)
  .add('Fade & animate (experimental)', () => <ReadMore {...props.fade()} />)
  .add('Custom Buttons', () => <ReadMore {...props.customButton()} />);
