import React from 'react';
import markdown from './README.mdx';
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
} from './SubNavigation';
import Search from '../Search';
import Button from '../Button';
import Link from '../Link';

export default {
  title: 'Components/Navigations/SubNavigation',
  component: SubNavigation,
  subcomponents: {
    SubNavigationHeader,
    SubNavigationTitle,
    SubNavigationLink,
    SubNavigationFilter,
    SubNavigationContent,
    SubNavigationList,
    SubNavigationGroup,
    SubNavigationItem,
  },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const RegularSubNavigation = (args) => (
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

const sourcecode = `
import {
  SubNavigation , SubNavigationHeader, SubNavigationTitle, SubNavigationLink, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem,
  Button, Search, Link
} from "@un/react";

<SubNavigation>
  <SubNavigationHeader>
    <SubNavigationTitle>
      The Title
    </SubNavigationTitle>
    <SubNavigationLink>
      <Button small>
        The SubPage Link
      </Button>
    </SubNavigationLink>
    <SubNavigationFilter>
      <Search
        className="some-class"
        id="search-2"
        labelText="Filter"
        onChange={() => {}}
        placeholder="Filter"
      />
    </SubNavigationFilter>
  </SubNavigationHeader>
  <SubNavigationContent>
    <SubNavigationList>
      <SubNavigationGroup
        columns={3}
        title="First List"
      >
        <SubNavigationItem>
          <Link
            href="https://go.docs.wfp.org"
            target="_blank"
          >
            GoDocs
          </Link>
        </SubNavigationItem>
        <SubNavigationItem>
          <Link
            href="https://go.docs.wfp.org"
            target="_blank"
          >
            GoDocs
          </Link>
        </SubNavigationItem>
        <SubNavigationItem>
          <Link
            href="https://go.docs.wfp.org"
            target="_blank"
          >
            GoDocs
          </Link>
        </SubNavigationItem>
      </SubNavigationGroup>
      <SubNavigationGroup title="Second List of Items">
        <SubNavigationItem>
          <Link
            href="https://go.docs.wfp.org"
            target="_blank"
          >
            GoDocs
          </Link>
        </SubNavigationItem>
        <SubNavigationItem>
          <Link
            href="https://go.docs.wfp.org"
            target="_blank"
          >
            GoDocs
          </Link>
        </SubNavigationItem>
      </SubNavigationGroup>
    </SubNavigationList>
  </SubNavigationContent>
</SubNavigation>
`;

RegularSubNavigation.story = {
  name: 'Regular',
  parameters: {
    docs: {
      source: {
        code: sourcecode,
      },
    },
  },
};
