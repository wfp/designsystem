"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Module = require("../Module");

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

require("flexboxgrid/dist/flexboxgrid.css");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    className: (0, _addonKnobs.text)('Additional class (className)', false),
    noMargin: (0, _addonKnobs.boolean)('Disable margin (noMargin)', false),
    fullHeight: (0, _addonKnobs.boolean)('Adapt to parents height (fullHeight)', false),
    light: (0, _addonKnobs.boolean)('Styling for white background (light)', false),
    dark: (0, _addonKnobs.boolean)('Styling with dark content (dark)', false),
    withHover: (0, _addonKnobs.boolean)('Add hover class (withHover)', false)
  };
};

(0, _react2.storiesOf)('Components|Module', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--module__background",
    style: {
      height: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
    pageWidth: "narrow"
  }, story()));
}).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, props(), /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/_react.default.createElement(_Module.ModuleFooter, null, "Module Footer Example"));
}).add('Multiple Headers',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "some-class"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('No Header',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "some-class"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('No Header - Centered Content',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "some-class"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, {
    centered: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('Dark',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    dark: true,
    className: "some-class"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/_react.default.createElement(_Module.ModuleFooter, null, "Module Footer Example"));
}).add('Light',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement(_Module.Module, {
    light: true,
    className: "some-class"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/_react.default.createElement(_Module.ModuleFooter, null, "Module Footer Example"));
}).add('With Grid',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. They can also use a css grid system.
   The use of flexboxgrid is recommended.
`,*/
function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))), /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))), /*#__PURE__*/_react.default.createElement(_Module.Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/_react.default.createElement(_Module.ModuleHeader, null, "Module Example"), /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/_react.default.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))));
});