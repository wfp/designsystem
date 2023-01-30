// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import WfpTheme from './WfpTheme';

addons.setConfig({
  theme: WfpTheme,
});
