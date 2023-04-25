import React from 'react';

import markdown from './README.mdx';
import ApplicationPage from './ApplicationPage';
import DashboardPage from './Dashboard';

export default {
  title: 'Templates/Application page',
  component: ApplicationPage,
  parameters: {
    componentSubtitle: 'Example',
    mdx: markdown,
    status: 'released',
    previewWidth: 'full',
  },
};

export const Default = (args) => <ApplicationPage />;

Default.story = {
  parameters: {
    docs: {
      source: {
        code: `
import { Wrapper, Module, ModuleHeader, ModuleBody, ModuleFooter } from "@wfp/react";

<Wrapper background="lighter" pageWidth="lg" spacing="md">
<div className="row">
  <Module className="col-xs-12 col-md-6 col-lg-4">
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Content
      </p>
    </ModuleBody>
  </Module>

  <Module className="col-xs-12 col-md-6 col-lg-4">
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Content
      </p>
    </ModuleBody>
  </Module>

  <Module className="col-xs-12 col-md-6 col-lg-4">
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Content
      </p>
    </ModuleBody>
  </Module>

  <Module className="col-xs-12 col-md-6 col-lg-6">
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Content
      </p>
    </ModuleBody>
  </Module>

  <Module className="col-xs-12 col-md-6 col-lg-6">
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Content
      </p>
    </ModuleBody>
  </Module>
</div>
</Wrapper>
      `,
      },
    },
  },
};

/*
export const Dashboard = (args) => <DashboardPage />;

Dashboard.story = {
  parameters: {
    docs: {
      storyDescription: `In cases the applications works with minor restrictions and you just want to inform the user you can show a <InfoBar />.`,
    },
  },
};
*/
