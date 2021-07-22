"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _List = require("../List");

var _addonKnobs = require("@storybook/addon-knobs");

var _User = _interopRequireDefault(require("../User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kinds = {
  'Avatar (avatar)': 'avatar',
  'First letter of last name (letter)': 'letter'
};
var UserProps = {
  default: function _default() {
    return {
      alt: (0, _addonKnobs.text)('Alternative Text (alt)', 'The Alt Text'),
      description: (0, _addonKnobs.text)('Description (extendedDescription)', undefined),
      extendedDescription: (0, _addonKnobs.text)('Extended description (extendedDescription)', undefined),
      missingImage: (0, _addonKnobs.select)('Icon (icon in <Switch>)', kinds, 'avatar'),
      ellipsis: (0, _addonKnobs.boolean)('Ellipsis (ellipsis)', false),
      className: 'some-class',
      image: (0, _addonKnobs.text)('Image (image)', undefined),
      name: (0, _addonKnobs.text)('User name (name)', 'Max Mustermann'),
      small: (0, _addonKnobs.boolean)('Small (small)', false)
    };
  },
  description: function description() {
    return {
      alt: (0, _addonKnobs.text)('Alternative Text (alt)', 'The Alt Text'),
      description: /*#__PURE__*/_react.default.createElement(_List.List, {
        kind: "simple",
        small: true
      }, /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Business Support Assistant G4"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Fixed Term")),
      extendedDescription: /*#__PURE__*/_react.default.createElement(_List.List, {
        kind: "simple",
        small: true
      }, /*#__PURE__*/_react.default.createElement(_List.ListItem, {
        title: "First level supervisor"
      }, "Marie Curie"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
        title: "Mrc"
      }, "Tanzania Country Office"), /*#__PURE__*/_react.default.createElement(_List.ListItem, {
        title: "Head of unit"
      }, "Max Planck")),
      ellipsis: (0, _addonKnobs.boolean)('Ellipsis (ellipsis)', false),
      className: 'some-class',
      image: (0, _addonKnobs.text)('Image (image)', undefined),
      name: (0, _addonKnobs.text)('User name (name)', 'Albert Einstein'),
      small: (0, _addonKnobs.boolean)('Small (small)', false)
    };
  }
};
(0, _react2.storiesOf)('Components|User', module).addDecorator(_addonKnobs.withKnobs).addParameters({
  jest: ['User-test']
}).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_User.default, UserProps.default());
}).add('With Description', function () {
  return /*#__PURE__*/_react.default.createElement(_User.default, UserProps.description());
});