"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  regular: /*#__PURE__*/_react.default.createElement(_Button.default, null, "Read More"),
  inverse: /*#__PURE__*/_react.default.createElement(_Button.default, {
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
      kind: (0, _addonKnobs.select)('Card kind (kind)', kinds, 'landscape'),
      title: (0, _addonKnobs.text)('Title (title)', 'The Climate Adaption Mangement and Innovation Initiative'),
      metadata: (0, _addonKnobs.text)('Metadata (metadata)', 'Another Category'),
      moreButton: (0, _addonKnobs.select)('More element (more)', buttonKinds, 'inverse'),
      subTitle: (0, _addonKnobs.text)('Subtitle (subTitle)', 'Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming.'),
      image: (0, _addonKnobs.text)('Image URL (image)', 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg'),
      url: (0, _addonKnobs.text)('Link (url)', 'http://www.wfp.org/'),
      isExternal: (0, _addonKnobs.boolean)('Is external (isExternal)', false),
      isLink: (0, _addonKnobs.boolean)('Is link (isLink)', true)
    };
  }
};
(0, _react2.storiesOf)('Components|Hero', module).addDecorator(_addonKnobs.withKnobs).addParameters({
  jest: ['Card-test']
}).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, story());
}).add('Default (experimental)', function () {
  var setProps = props.set();
  return /*#__PURE__*/_react.default.createElement(_.default, _extends({}, setProps, {
    more: buttons[setProps.moreButton]
  }));
});