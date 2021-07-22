"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _SecondaryNavigation = require("./SecondaryNavigation");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _BreadcrumbHome = _interopRequireDefault(require("../BreadcrumbHome"));

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Wrapper = require("../Wrapper");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  secondaryNavigation: function secondaryNavigation() {
    return {
      name: (0, _addonKnobs.text)('The form control name (name in <InputGroup>)', 'input-group'),
      pageWidth: (0, _addonKnobs.select)('Value of the selected button (valueSelected in <InputGroup>)', _Wrapper.pageWidths, 'default-selected'),
      labelText: (0, _addonKnobs.text)('Label text (labelText in <InputGroup>)', 'Radio button group label'),
      helperText: (0, _addonKnobs.text)('Helper text (labelText in <InputGroup>)', 'Radio button group helper'),
      vertical: (0, _addonKnobs.boolean)('Vertical (vertical in <InputGroup>)', false)
    };
  },
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
    inline: true
  },
  tab: {
    className: 'another-class'
  }
};
(0, _react2.storiesOf)('Components|SecondaryNavigation', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  var secondaryNavigationProps = props.secondaryNavigation();
  return /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigation, _extends({}, secondaryNavigationProps, {
    additional: "additional Information"
  }), /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null, /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react.default.createElement(_BreadcrumbHome.default, null))), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 3")), /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigationTitle, null, "The Page Title"), /*#__PURE__*/_react.default.createElement(_Tabs.default, _extends({}, props.tabs, {
    customTabContent: true
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 1",
    href: "http://www.de.wfp.org"
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 2",
    href: "http://www.es.wfp.org"
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 3",
    href: "http://www.us.wfp.org"
  })), /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({}, props.tab, {
    label: "Tab label 4",
    href: "http://www.fr.wfp.org"
  }))));
}).add('Heading only', function () {
  return /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigation, {
    additional: "additional Information"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null, /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react.default.createElement(_BreadcrumbHome.default, null))), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 3")), /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigationTitle, null, "The Page Title"));
});