// register.js

import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PARAM_KEY = 'myAddon';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : '';
  return <div>{item}</div>;
};

addons.register(ADDON_ID, (api) => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel />
    </AddonPanel>
  );
  const title = 'My Addon';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});
