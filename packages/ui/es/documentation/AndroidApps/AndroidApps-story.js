/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Link from '../../components/Link';
import Blockquote from '../../components/Blockquote';
import Page from '../Page';
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('Android apps', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "Android apps",
    subTitle: "UX Standards"
  }, /*#__PURE__*/React.createElement(Blockquote, {
    title: "In development",
    type: "warning"
  }, "This page is subject to change and will be updated soon."), /*#__PURE__*/React.createElement("p", null, "Internal Applications often only have to work on Android devices, therefor the design should be based the principles of the Googles Material UI."), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/React.createElement("li", null, "Use", ' ', /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Design|Guidelines', 'Colours')
  }, "WFP's branding colours")), /*#__PURE__*/React.createElement("li", null, "Use", ' ', /*#__PURE__*/React.createElement(Link, {
    onClick: linkTo('Design|Guidelines', 'Typography')
  }, "Open Sans"), ' ', "as font"), /*#__PURE__*/React.createElement("li", null, "Use shadows only to highlight important elements"), /*#__PURE__*/React.createElement("li", null, "Keep in mind that applications often run on low-end devices with lacking network coverage")), /*#__PURE__*/React.createElement("img", {
    alt: "Toolkit",
    style: {
      width: '110%',
      height: 'auto',
      marginTop: '2em',
      marginBottom: '2em',
      marginLeft: '-5%'
    },
    src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "internal/mobile-android-general.png")
  }), /*#__PURE__*/React.createElement("p", null, "Use the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://material.io/tools/",
    target: "_blank"
  }, "Android Material Editor"), ' ', "as a starting point."), /*#__PURE__*/React.createElement("h4", null, "Supported devices"), /*#__PURE__*/React.createElement("p", null, "Check your target audience before starting the development. Usually WFP's applications only need to work on Android."), /*#__PURE__*/React.createElement("ul", {
    className: "wfp--story__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: "https://material.io/develop/android/",
    target: "_blank"
  }, "Google Material UI Android development"))));
});