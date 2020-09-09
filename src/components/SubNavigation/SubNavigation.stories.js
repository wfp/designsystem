import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationLink,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem,
} from '../SubNavigation';
import Search from '../Search';
import Button from '../Button';
import Link from '../Link';

export default {
  title: 'Components/SubNavigation',
  component: SubNavigation,
  subcomponents: [
    SubNavigationHeader,
    SubNavigationTitle,
    SubNavigationLink,
    SubNavigationFilter,
    SubNavigationContent,
    SubNavigationList,
    SubNavigationGroup,
    SubNavigationItem,
  ],
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <SubNavigation {...args}>
    {' '}
    <SubNavigationHeader>
      <SubNavigationTitle>The Title</SubNavigationTitle>
      <SubNavigationLink>
        <Button small>The SubPage Link</Button>
      </SubNavigationLink>

      <SubNavigationFilter>
        <Search
          className="some-class"
          small
          id="search-2"
          labelText="Filter"
          placeHolderText="Filter"
          onChange={() => {
            alert('Apply Filter');
          }}
        />
      </SubNavigationFilter>
    </SubNavigationHeader>
    <SubNavigationContent>
      <SubNavigationList>
        <SubNavigationGroup title="First List" columns>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
        </SubNavigationGroup>
        <SubNavigationGroup title="Second List of Items">
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
          <SubNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </SubNavigationItem>
        </SubNavigationGroup>
      </SubNavigationList>
    </SubNavigationContent>
  </SubNavigation>
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
