"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _StepNavigation = _interopRequireDefault(require("../StepNavigation"));

var _StepNavigationItem = _interopRequireDefault(require("../StepNavigationItem"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleTabClick = function handleTabClick(index) {
  _this.setState({
    page: index
  });
};

var props = function props() {
  return {
    className: 'additional-class',
    vertical: (0, _addonKnobs.boolean)('Display vertical (vertical)', false),
    small: (0, _addonKnobs.boolean)('Small size (small)', false),
    selectedPage: (0, _addonKnobs.number)('Currently selected page (selectedPage)', 1),
    handleTabClick: handleTabClick
  };
};

(0, _react2.storiesOf)('Components|StepNavigation', module).addDecorator(_addonKnobs.withKnobs).add('Default (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement(_StepNavigation.default, props(), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Item without Status",
    page: 0
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Active Item",
    page: 1
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Not started Item",
    page: 2,
    status: "not-started"
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Warning Item",
    page: 3,
    status: "warning"
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Complete Item",
    page: 4,
    status: "complete"
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Skipped Item",
    page: 4,
    status: "skip"
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Disabled Item",
    page: 5,
    status: "disabled"
  }), /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
    label: "Locked Item",
    page: 6,
    status: "locked"
  }));
});