import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';

export default {
  title: 'Components/Module',
  component: Module,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

const BodyContent = () => (
  <>
    <p>
      Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.
    </p>
    <p>
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged.
    </p>
  </>
);

export const Regular = (args) => (
  <Module {...args}>
    <ModuleHeader>Module example</ModuleHeader>
    <ModuleBody>
      <BodyContent />
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
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

export const Dark = (args) => (
  <Module dark>
    <ModuleHeader>Dark module example</ModuleHeader>
    <ModuleBody>
      <BodyContent />
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
  </Module>
);

Dark.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`dark\` prop to highlight a module.`,
    },
  },
};

export const Light = (args) => (
  <Module light>
    <ModuleHeader>Dark module example</ModuleHeader>
    <ModuleBody>
      <BodyContent />
    </ModuleBody>
    <ModuleFooter>Module footer</ModuleFooter>
  </Module>
);

Light.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`light\` prop to show a module on a white background.`,
    },
  },
};

export const WithHover = (args) => (
  <Module light withHover>
    <ModuleBody>
      <BodyContent />
    </ModuleBody>
  </Module>
);

WithHover.story = {
  parameters: {
    docs: {
      storyDescription: `Use the \`light\` prop to show a module on a white background.`,
    },
  },
};
