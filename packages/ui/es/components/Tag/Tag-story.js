function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
var types = typesList.reduce(function (o, type) {
  return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, type, "".concat(type, " (").concat(type, ")")));
}, {});
storiesOf('Components|Tag', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Tag, {
    className: "some-class",
    type: select('Tag type (type)', types, 'wfp')
  }, text('Content (children)', 'This is a tag'));
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement(TagSkeleton, null);
});