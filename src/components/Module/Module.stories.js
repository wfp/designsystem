import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';

export default {
  title: 'Components/Module',
  component: Module,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <Module {...args}>
    <ModuleHeader>Module Example</ModuleHeader>
    <ModuleBody>
      <p>
        Lorem Ipsum is dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </ModuleBody>
    <ModuleFooter>Module Footer Example</ModuleFooter>
  </Module>
);

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
