import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MainNavigation from '../MainNavigation';
import MainNavigationItem from '../MainNavigationItem';

import {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationLink,
  SubNavigationGroup,
  SubNavigationItem,
} from '../SubNavigation';
import Button from '../Button';
import Search from '../Search';
import Link from '../Link';
import User from '../User';

storiesOf('Components|MainNavigation', module).add('default', () => (
  <MainNavigation logo={<a href="http://www.wfp.org">Application name</a>}>
    {({ onChangeSub }) => {
      return (
        <React.Fragment>
          <MainNavigationItem>
            <Link href="http://communities.wfp.org" target="_blank">
              Section 1
            </Link>
          </MainNavigationItem>
          <MainNavigationItem
            subNavigation={
              <SubNavigation>
                <SubNavigationHeader>
                  <SubNavigationTitle>The Title</SubNavigationTitle>
                  <SubNavigationLink>
                    <Button small>The SubPage Link</Button>
                  </SubNavigationLink>

                  <SubNavigationFilter>
                    <Search
                      className="some-class"
                      kind="main"
                      id="search-2"
                      placeHolderText="Filter List"
                    />
                  </SubNavigationFilter>
                </SubNavigationHeader>
                <SubNavigationContent>
                  <SubNavigationList>
                    <SubNavigationGroup title="First List" columns>
                      <SubNavigationItem>
                        <Link href="https://go.docs.wfp.org" target="_blank">
                          Lorem Ipsum et jomen
                        </Link>
                      </SubNavigationItem>
                    </SubNavigationGroup>
                  </SubNavigationList>
                </SubNavigationContent>
              </SubNavigation>
            }>
            <Link href="http://manuals.wfp.org" target="_blank">
              Section 2
            </Link>
          </MainNavigationItem>
          <MainNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              Section 3
            </Link>
          </MainNavigationItem>
          <MainNavigationItem>
            <Link href="http://opweb.wfp.org" target="_blank">
              Section 4
            </Link>
          </MainNavigationItem>
          <MainNavigationItem>
            <Search
              kind="main"
              id="search-2"
              labelText="Search"
              placeHolderText="Search"
              onChange={action('onChange')}
            />
          </MainNavigationItem>
          <MainNavigationItem
            className="wfp--main-navigation__user"
            subNavigation={
              <SubNavigation>
                <SubNavigationHeader>
                  <SubNavigationTitle>Welcome Lorem!</SubNavigationTitle>
                  <SubNavigationLink>
                    <Button secondary small>
                      Logout
                    </Button>
                  </SubNavigationLink>
                </SubNavigationHeader>
                <SubNavigationContent>
                  Additional content can be placed here.
                  <br />
                  Demo for internal close action:{' '}
                  <Link onClick={() => onChangeSub('close')}>Close Menu</Link>
                </SubNavigationContent>
              </SubNavigation>
            }>
            <User ellipsis title="Max Mustermann long name" />
          </MainNavigationItem>
        </React.Fragment>
      );
    }}
  </MainNavigation>
));
