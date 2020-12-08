import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import markdown from './README.mdx';
import ApplicationPage from './ApplicationPage';
import DashboardPage from './Dashboard';

export default {
  title: 'Templates/Application page',
  component: ApplicationPage,
  parameters: {
    componentSubtitle: 'Example',
    mdx: markdown,
  },
};

export const Default = (args) => <ApplicationPage />;

export const Dashboard = (args) => <DashboardPage />;

Dashboard.story = {
  parameters: {
    docs: {
      storyDescription: `In cases the applications works with minor restrictions and you just want to inform the user you can show a <InfoBar />.`,
    },
  },
};
