import React from 'react';
import { storiesOf } from '@storybook/react';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

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

storiesOf('SubNavigation', module)
  .addDecorator(withReadme([readme]))
  .add(
    'default',
    /*`
      The SubNavigation is used as a part of the MainNavigation is used across all applications and offers the secondary level navigation items.
    `,*/
    () => (
      <SubNavigation>
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
    )
  );
