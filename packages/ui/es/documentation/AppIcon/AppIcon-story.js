/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';
import Link from '../../components/Link';
var fileSizes = [120, 152, 160, 167, 180, 192, 300];
storiesOf('Design|Guidelines', module).addParameters({
  options: {
    showPanel: false,
    isToolshown: false
  }
}).add('App icons', function () {
  return /*#__PURE__*/React.createElement(Page, {
    title: "App icons",
    subTitle: "Icons for Android & iOS"
  }, /*#__PURE__*/React.createElement(Blockquote, {
    warning: true,
    title: "Work in progress"
  }, "Please notice that this page is currently a draft."), /*#__PURE__*/React.createElement("p", null, "All WFP apps should use a custom made icon to be distinguishable. By using the branding colors the icon should be recognizable as an WFP app."), /*#__PURE__*/React.createElement("p", null, "For Android Apps please follow the", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "https://developer.android.com/google-play/resources/icon-design-specifications",
    target: "_blan"
  }, "Guidelines")), /*#__PURE__*/React.createElement("p", null, "Mobile operating systems automatically add the name of the app near the icon, thus allowing users to distinguish different WFP apps in case more than one is installed on a user device.", ' ', /*#__PURE__*/React.createElement(Link, {
    href: "http://newgo.wfp.org/how-do-i/create-a-wfp-app-icon",
    target: "_blank"
  }, "More Information")), /*#__PURE__*/React.createElement("h3", null, "Sizes"), /*#__PURE__*/React.createElement("img", {
    alt: "WFP Icon",
    style: {
      border: '1px solid #E5E5E5',
      width: 100,
      height: 100
    },
    src: "".concat(process.env.STORYBOOK_ASSETS, "app/WFP_APP_ICON_300x300.png")
  }), /*#__PURE__*/React.createElement("br", null), fileSizes.map(function (fileSize) {
    return /*#__PURE__*/React.createElement(Link, {
      small: true,
      style: {
        marginRight: '0.5em',
        fontSize: '0.7em'
      },
      target: "_blank",
      href: "".concat(process.env.STORYBOOK_ASSETS, "app/WFP_APP_ICON_").concat(fileSize, "x").concat(fileSize, ".png")
    }, fileSize, " x ", fileSize, "px");
  }));
});