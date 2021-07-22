/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleComponent from '../../documentation/SingleComponent';
import Credits from '../Credits';
storiesOf('Components|Credits', module).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement(SingleComponent, null, story());
}).add('Default (depreciated)', function () {
  return /*#__PURE__*/React.createElement(Credits, {
    info: "Photo: WFP/ Rein Skullerud"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Default illustration",
    style: {
      width: '700px',
      height: 'auto'
    },
    src: "http://www1.wfp.org/sites/default/files/images/hp_yem_20170717_wfp-reem_nada_0109_3.jpg"
  }));
});