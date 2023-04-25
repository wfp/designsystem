import React from 'react';
import markdown from './README.mdx';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';

import Tabs from '../Tabs';
import Tab from '../Tab';

export default {
  title: 'Components/Navigation/SecondaryNavigation',
  component: SecondaryNavigation,
  subcomponents: { SecondaryNavigationTitle },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    previewWidth: 'full',
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

const sourcecode = (importstatement: string, additional?: string) => {
  return `
  
${importstatement}
        
<SecondaryNavigation additional="additional Information">
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/#">
        <BreadcrumbHome />
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">
      Breadcrumb 2
    </BreadcrumbItem>
    <BreadcrumbItem disableLink>
      Breadcrumb 3
    </BreadcrumbItem>
  </Breadcrumb>
  <SecondaryNavigationTitle>
    The page title
  </SecondaryNavigationTitle>
  ${additional}
</SecondaryNavigation>
  `;
};

const tabsection = `
  <Tabs customTabContent>
    <Tab label="Tab label 1" />
    <Tab label="Tab label 2" />
    <Tab label="Tab label 3" />
    <Tab label="Tab label 4" />
  </Tabs>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: sourcecode(
          `import {SecondaryNavigation, SecondaryNavigationTitle, Breadcrumb, BreadcrumbHome, BreadcrumbItem, Tabs, Tab } from "@wfp/react";`,
          tabsection
        ),
      },
    },
  },
};

export const HeadingOnly = () => (
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
      source: {
        code: sourcecode(
          `import {SecondaryNavigation, SecondaryNavigationTitle, Breadcrumb, BreadcrumbHome, BreadcrumbItem } from "@wfp/react";`
        ),
      },
    },
  },
};
