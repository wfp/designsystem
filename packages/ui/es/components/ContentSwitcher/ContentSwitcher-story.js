function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { iconAddGlyph, iconSearch } from '@wfp/icons';
import Icon from '../Icon';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../Switch';
var icons = {
  None: 'None',
  'Add with filled circle (iconAddGlyph from `@wfp-ui`)': 'iconAddGlyph',
  'Search (iconSearch from `@wfp-ui`)': 'iconSearch'
};
var iconMap = {
  iconAddGlyph: /*#__PURE__*/React.createElement(Icon, {
    icon: iconAddGlyph
  }),
  iconSearch: /*#__PURE__*/React.createElement(Icon, {
    icon: iconSearch
  })
};
var kinds = {
  'Anchor (anchor)': 'anchor',
  'Button (button)': 'button'
};
var props = {
  contentSwitcher: function contentSwitcher() {
    return {
      onChange: action('onChange'),
      small: boolean('Small styling (small)', false)
    };
  },
  switch: function _switch() {
    return {
      onClick: action('onClick - Switch'),
      kind: select('Button kind (kind in <Switch>)', kinds, 'anchor'),
      href: text('The link href (href in <Switch>)', ''),
      icon: iconMap[select('Icon (icon in <Switch>)', icons, 'none')]
    };
  }
};
storiesOf('Components|ContentSwitcher', module).addDecorator(withKnobs).add('Default', function () {
  var switchProps = props.switch();
  return /*#__PURE__*/React.createElement(ContentSwitcher, props.contentSwitcher(), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "one",
    text: "First section"
  }, switchProps)), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "two",
    text: "Second section"
  }, switchProps)), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "three",
    text: "Third section"
  }, switchProps)));
}).add('Selected', function () {
  var switchProps = props.switch();
  return /*#__PURE__*/React.createElement(ContentSwitcher, _extends({}, props.contentSwitcher(), {
    selectedIndex: 1
  }), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "one",
    text: "First section"
  }, switchProps)), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "two",
    text: "Second section"
  }, switchProps)), /*#__PURE__*/React.createElement(Switch, _extends({
    name: "three",
    text: "Third section"
  }, switchProps)));
});