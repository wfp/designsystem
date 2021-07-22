import React from 'react';
import { storiesOf } from '@storybook/react';
import { List, ListItem } from '../List';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import User from '../User';
var kinds = {
  'Avatar (avatar)': 'avatar',
  'First letter of last name (letter)': 'letter'
};
var UserProps = {
  default: function _default() {
    return {
      alt: text('Alternative Text (alt)', 'The Alt Text'),
      description: text('Description (extendedDescription)', undefined),
      extendedDescription: text('Extended description (extendedDescription)', undefined),
      missingImage: select('Icon (icon in <Switch>)', kinds, 'avatar'),
      ellipsis: boolean('Ellipsis (ellipsis)', false),
      className: 'some-class',
      image: text('Image (image)', undefined),
      name: text('User name (name)', 'Max Mustermann'),
      small: boolean('Small (small)', false)
    };
  },
  description: function description() {
    return {
      alt: text('Alternative Text (alt)', 'The Alt Text'),
      description: /*#__PURE__*/React.createElement(List, {
        kind: "simple",
        small: true
      }, /*#__PURE__*/React.createElement(ListItem, null, "Business Support Assistant G4"), /*#__PURE__*/React.createElement(ListItem, null, "Fixed Term")),
      extendedDescription: /*#__PURE__*/React.createElement(List, {
        kind: "simple",
        small: true
      }, /*#__PURE__*/React.createElement(ListItem, {
        title: "First level supervisor"
      }, "Marie Curie"), /*#__PURE__*/React.createElement(ListItem, {
        title: "Mrc"
      }, "Tanzania Country Office"), /*#__PURE__*/React.createElement(ListItem, {
        title: "Head of unit"
      }, "Max Planck")),
      ellipsis: boolean('Ellipsis (ellipsis)', false),
      className: 'some-class',
      image: text('Image (image)', undefined),
      name: text('User name (name)', 'Albert Einstein'),
      small: boolean('Small (small)', false)
    };
  }
};
storiesOf('Components|User', module).addDecorator(withKnobs).addParameters({
  jest: ['User-test']
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(User, UserProps.default());
}).add('With Description', function () {
  return /*#__PURE__*/React.createElement(User, UserProps.description());
});