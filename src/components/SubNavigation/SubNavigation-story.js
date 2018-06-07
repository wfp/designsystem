import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem } from '../SubNavigation';
import Search from '../Search';
import Link from '../Link';
import User from '../User';


storiesOf('SubNavigation', module)
  .addWithInfo(
    'default',
    `
      The SubNavigation is used as a part of the MainNavigation is used across all applications and offers the secondary level navigation items.
    `,
    () => (
      <SubNavigation>
        <SubNavigationHeader>
          <SubNavigationTitle>
            The Title
          </SubNavigationTitle>
          <SubNavigationFilter>
             <Search
              className="some-class"
              small
              id="search-2"
              labelText="Filter"
              placeHolderText="Filter"
              onChange={() => {
                console.log('onChange');
              }}
            />
          </SubNavigationFilter>
        </SubNavigationHeader>
        <SubNavigationContent>
          <SubNavigationList>
            <SubNavigationGroup title="First List">
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
            </SubNavigationGroup>
            <SubNavigationGroup title="Second List of Items">
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
              <SubNavigationItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubNavigationItem>
            </SubNavigationGroup>
            </SubNavigationList>
        </SubNavigationContent>
      </SubNavigation>

    )
  );
