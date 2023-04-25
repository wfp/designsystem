import React from 'react';
import { Button, User, Search, Link } from '@wfp/react';
import {
  MainNavigation,
  MainNavigationItem,
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationLink,
  SubNavigationContent,
  SubNavigationFilter,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem,
} from '@wfp/react';

const Navigation = () => {
  return (
    <MainNavigation>
      <MainNavigationItem>
        <Link to="/">Main</Link>
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
                  small
                  id="search-2"
                  labelText="Filter"
                  placeholder="Filter list"
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
                      Lorem Ipsum et jomen
                    </Link>
                  </SubNavigationItem>
                </SubNavigationGroup>
              </SubNavigationList>
            </SubNavigationContent>
          </SubNavigation>
        }>
        <Link href="http://manuals.wfp.org" target="_blank">
          Section2
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Link href="http://opweb.wfp.org" target="_blank">
          Section 3
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Link href="http://opweb.wfp.org" target="_blank">
          Section 4
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
        <Search kind="main" placeholder="Search" />
        {/* onChange={action('onChange')} */}
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
              Demo for internal close action: <Link>Close Menu</Link>
              {/* onClick={() => onChangeSub('close')} */}
            </SubNavigationContent>
          </SubNavigation>
        }>
        <User ellipsis name="Max Mustermann long name" missingImage="letter" />
      </MainNavigationItem>
      <MainNavigationItem
        className="wfp--main-navigation__user"
        subNavigation={
          <SubNavigation>
            <SubNavigationHeader>
              <SubNavigationTitle>Choose language</SubNavigationTitle>
            </SubNavigationHeader>
            <SubNavigationContent>
              <SubNavigationList>
                <SubNavigationGroup>
                  <SubNavigationItem>
                    <Link href="#">English</Link>
                  </SubNavigationItem>
                  <SubNavigationItem>
                    <Link href="#">
                      French <i>(français)</i>
                    </Link>
                  </SubNavigationItem>
                  <SubNavigationItem>
                    <Link href="#">
                      German <i>(deutsch)</i>
                    </Link>
                  </SubNavigationItem>
                </SubNavigationGroup>
              </SubNavigationList>
            </SubNavigationContent>
          </SubNavigation>
        }>
        <span>EN</span>
      </MainNavigationItem>
    </MainNavigation>
  );
};

export default Navigation;
