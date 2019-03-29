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
  <MainNavigation logo={<a href="http://www.wfp.org">WFP UI</a>}>
    {({ onChangeSub }) => {
      return (
        <React.Fragment>
          <MainNavigationItem>
            <Link href="http://communities.wfp.org" target="_blank">
              Communities
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
              Manuals
            </Link>
          </MainNavigationItem>
          <MainNavigationItem>
            <Link href="https://go.docs.wfp.org" target="_blank">
              GoDocs
            </Link>
          </MainNavigationItem>
          <MainNavigationItem>
            <Link href="http://opweb.wfp.org" target="_blank">
              OPweb
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
              <div>
                <h3>Hello World</h3>
                <Link
                  onClick={() => onChangeSub(undefined, undefined, 'close')}>
                  Close Demo
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquya.
                </p>
              </div>
            }>
            <User ellipsis title="Max Mustermann long name" />
          </MainNavigationItem>
        </React.Fragment>
      );
    }}
  </MainNavigation>
));
