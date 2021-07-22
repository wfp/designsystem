"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _ContentSwitcher = _interopRequireDefault(require("../ContentSwitcher"));

var _Switch = _interopRequireDefault(require("../Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var icons = {
  None: 'None',
  'Add with filled circle (iconAddGlyph from `@wfp-ui`)': 'iconAddGlyph',
  'Search (iconSearch from `@wfp-ui`)': 'iconSearch'
};
var iconMap = {
  iconAddGlyph: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconAddGlyph
  }),
  iconSearch: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconSearch
  })
};
var kinds = {
  'Anchor (anchor)': 'anchor',
  'Button (button)': 'button'
};
var props = {
  contentSwitcher: function contentSwitcher() {
    return {
      onChange: (0, _addonActions.action)('onChange'),
      small: (0, _addonKnobs.boolean)('Small styling (small)', false)
    };
  },
  switch: function _switch() {
    return {
      onClick: (0, _addonActions.action)('onClick - Switch'),
      kind: (0, _addonKnobs.select)('Button kind (kind in <Switch>)', kinds, 'anchor'),
      href: (0, _addonKnobs.text)('The link href (href in <Switch>)', ''),
      icon: iconMap[(0, _addonKnobs.select)('Icon (icon in <Switch>)', icons, 'none')]
    };
  }
};
(0, _react2.storiesOf)('Components|ContentSwitcher', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  var switchProps = props.switch();
  return /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, props.contentSwitcher(), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "one",
    text: "First section"
  }, switchProps)), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "two",
    text: "Second section"
  }, switchProps)), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "three",
    text: "Third section"
  }, switchProps)));
}).add('Selected', function () {
  var switchProps = props.switch();
  return /*#__PURE__*/_react.default.createElement(_ContentSwitcher.default, _extends({}, props.contentSwitcher(), {
    selectedIndex: 1
  }), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "one",
    text: "First section"
  }, switchProps)), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "two",
    text: "Second section"
  }, switchProps)), /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({
    name: "three",
    text: "Third section"
  }, switchProps)));
});