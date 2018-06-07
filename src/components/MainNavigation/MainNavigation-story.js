import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MainNavigation, MainNavigationItem, SubMenuList, SubMenuSection, SubMenuItem } from '../MainNavigation';
import Search from '../Search';
import Link from '../Link';
import User from '../User';


storiesOf('MainNavigation', module)
  .addWithInfo(
    'default',
    `
      The MainNavigation is used across all applications, it is the starting point of the application and offers the top level navigation items.
    `,
    () => (
      <MainNavigation
        logo={<a href="#">WFP UI</a>}>
        <MainNavigationItem
          subNavigation={
            <div>
              <h3>Hello World</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          }>
					<Link href="http://communities.wfp.org" target="_blank">Communities</Link>
				</MainNavigationItem>
				<MainNavigationItem
          subNavigation={
            <div>
              <h3>Manuals</h3>
              <SubMenuList>
                <SubMenuSection title="List Items">
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                </SubMenuSection>
                <SubMenuSection title="List Items">
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                  <SubMenuItem><Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link></SubMenuItem>
                </SubMenuSection>
              </SubMenuList>
            </div>
          }>
					<Link href="http://manuals.wfp.org" target="_blank">Manuals</Link>
				</MainNavigationItem>
        <MainNavigationItem>
          <Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link>
        </MainNavigationItem>
        <MainNavigationItem>
          <Link href="http://opweb.wfp.org" target="_blank">OPweb</Link>
        </MainNavigationItem>      
				<MainNavigationItem>
					<Search
            size="medium"
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
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          }>
          <User
            ellipsis
            title="Max Mustermann long name"/>
        </MainNavigationItem>    
      </MainNavigation>
    )
  );
