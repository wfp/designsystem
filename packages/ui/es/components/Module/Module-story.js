import React from 'react';
import { storiesOf } from '@storybook/react';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';
import Wrapper from '../Wrapper';
import 'flexboxgrid/dist/flexboxgrid.css';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

var props = function props() {
  return {
    className: text('Additional class (className)', false),
    noMargin: boolean('Disable margin (noMargin)', false),
    fullHeight: boolean('Adapt to parents height (fullHeight)', false),
    light: boolean('Styling for white background (light)', false),
    dark: boolean('Styling with dark content (dark)', false),
    withHover: boolean('Add hover class (withHover)', false)
  };
};

storiesOf('Components|Module', module).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wfp--module__background",
    style: {
      height: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Wrapper, {
    pageWidth: "narrow"
  }, story()));
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(Module, props(), /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/React.createElement(ModuleFooter, null, "Module Footer Example"));
}).add('Multiple Headers',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/React.createElement(Module, {
    className: "some-class"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('No Header',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/React.createElement(Module, {
    className: "some-class"
  }, /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('No Header - Centered Content',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/React.createElement(Module, {
    className: "some-class"
  }, /*#__PURE__*/React.createElement(ModuleBody, {
    centered: true
  }, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")));
}).add('Dark',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/React.createElement(Module, {
    dark: true,
    className: "some-class"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/React.createElement(ModuleFooter, null, "Module Footer Example"));
}).add('Light',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. Module components can be
  'single' or 'double' with the default as 'double'.
   ModuleHeader and ModuleBody components hold the content of the
  Module
`,*/
function () {
  return /*#__PURE__*/React.createElement(Module, {
    light: true,
    className: "some-class"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")), /*#__PURE__*/React.createElement(ModuleFooter, null, "Module Footer Example"));
}).add('With Grid',
/*`
  Modules are used to organize content in a structural manner.
   Modules are separated into different components. They can also use a css grid system.
   The use of flexboxgrid is recommended.
`,*/
function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))), /*#__PURE__*/React.createElement(Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))), /*#__PURE__*/React.createElement(Module, {
    className: "col-xs-12 col-md-6 col-lg-4"
  }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Module Example"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement("p", null, "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/React.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))));
});