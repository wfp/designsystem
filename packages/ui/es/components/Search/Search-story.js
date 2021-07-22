function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Search from '../Search';
import SearchSkeleton from '../Search/Search.Skeleton';
var options = {
  large: 'large',
  small: 'small',
  banner: 'banner',
  main: 'main',
  light: 'light',
  None: undefined
};

var props = function props() {
  return {
    className: 'some-class',
    //light: boolean('Light variant (light)', false),
    kind: select('Kind (kind)', options, undefined),
    name: text('Form item name (name)', ''),
    value: text('Value (value)', ''),
    labelText: text('Label text (labelText)', 'Search'),
    closeButtonLabelText: text('The label text for the close button (closeButtonLabelText)', ''),
    placeHolderText: text('Placeholder text (placeHolderText)', 'Search'),
    onChange: action('onChange')
  };
};

storiesOf('Components|Search', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Search, _extends({}, props(), {
    id: "search-1"
  }));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/React.createElement(SearchSkeleton, null), "\xA0", /*#__PURE__*/React.createElement(SearchSkeleton, {
    small: true
  }));
});