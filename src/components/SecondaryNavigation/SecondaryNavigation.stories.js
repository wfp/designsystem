import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';

import Tabs from '../Tabs';
import Tab from '../Tab';
import { pageWidths } from '../Wrapper';

export default {
  title: 'Components/Navigations/SecondaryNavigation',
  component: SecondaryNavigation,
  subcomponents: { SecondaryNavigationTitle },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <SecondaryNavigation {...args} additional="additional Information">
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/#">
          <BreadcrumbHome />
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
    <SecondaryNavigationTitle>The page title</SecondaryNavigationTitle>
    <Tabs customTabContent={true}>
      <Tab label="Tab label 1" href="#" />
      <Tab label="Tab label 2" href="#" />
      <Tab label="Tab label 3" href="#" />
      <Tab label="Tab label 4" href="#" />
    </Tabs>
  </SecondaryNavigation>
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

export const HeadingOnly = (args) => (
  <SecondaryNavigation additional="additional Information">
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/#">
          <BreadcrumbHome />
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
    <SecondaryNavigationTitle>The page title</SecondaryNavigationTitle>
  </SecondaryNavigation>
);

const descriptionHeadingOnly = `
The content of \`SecondaryNavigation\` can be customized. In this example \`SecondaryNavigation\` is used without the \`Tabs\`.
`;

HeadingOnly.story = {
  parameters: {
    docs: {
      storyDescription: descriptionHeadingOnly,
    },
  },
};
