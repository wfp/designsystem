import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import MainNavigation from '.';
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

export default {
  title: 'Components/Navigations/MainNavigation',
  component: MainNavigation,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    previewWidth: 'full'
  }
};



export const Regular = (args) => (
  <MainNavigation {...args}>
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
                      small
                      id="search-2"
                      labelText="Filter"
                      placeHolderText="Filter list"
                    />
                    {/* onChange={() => {
                        alert('Apply Filter');
                      }} */}
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
            <User
              ellipsis
              name="Max Mustermann long name"
              missingImage="letter"
            />
          </MainNavigationItem>
          <MainNavigationItem
            className="wfp--main-navigation__user"
            subNavigation={
              <SubNavigation style={{width: '100px'}}>
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
        </React.Fragment>
      );
    }}
  </MainNavigation>
);

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

const sourcecode =(type)=>{
  return `import { Button,User, Search } from "@wfp/ui";
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
    SubNavigationItem
  } from "@wfp/ui";
  
  const Navigation = () => {
    return (
      <MainNavigation >
                  
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
                  small
                  id="search-2"
                  labelText="Filter"
                  placeHolderText="Filter list"
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
        <Link href="https://go.docs.wfp.org" target="_blank">
          Section 3
        </Link>
      </MainNavigationItem>
      <MainNavigationItem>
          ${type}
      </MainNavigationItem>
      <MainNavigationItem>
          <Search
          kind="main"
          id="search-2"
          placeHolderText="Search"
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
              <Link >Close Menu</Link> 
              </SubNavigationContent>
          </SubNavigation>
          }>
          <User
          ellipsis
          name="Max Mustermann long name"
          missingImage="letter"
          />
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
      )
    }
  
  export default Navigation;
  `
}




Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
      source: {
        code: sourcecode(`<Link href="http://opweb.wfp.org" target="_blank">
            Section 4
          </Link>`)
      }
    },
  },
};


export const RegularWithButton = (args) => (
  <MainNavigation {...args}>
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
                      small
                      id="search-2"
                      labelText="Filter"
                      placeHolderText="Filter list"
                    />
                    {/* onChange={() => {
                        alert('Apply Filter');
                      }} */}
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
            <Button kind="navigation" type="button">
              Button
            </Button>
          </MainNavigationItem>
          <MainNavigationItem>
            <Search
              kind="main"
              id="search-2"
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
            <User
              ellipsis
              name="Max Mustermann long name"
              missingImage="letter"
            />
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
        </React.Fragment>
      );
    }}
  </MainNavigation>
);

RegularWithButton.story = {
  parameters: {
    docs: {
      storyDescription: `MainMavigation example with button option`,
      source: {
        code: sourcecode(`<Button kind="navigation" type="button">
            Button
          </Button>`)
      }
    },
  },
};