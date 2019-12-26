import { create } from '@storybook/theming';
import colors from '../src/globals/data/colors.js';
import React, { Component } from 'react';

export default create({
  base: 'light',

  colorPrimary: 'red',
  //colorSecondary: 'deepskyblue',

  // UI
  /*appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,
  */

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  /*barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: colors.main.hex,
  */

  // Form colors
  /*inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  */

  brandTitle: 'WFP <span style="font-weight: 400">UI-KIT</span>',
  brandUrl: 'https://wfp.org/UIGuide',
});
