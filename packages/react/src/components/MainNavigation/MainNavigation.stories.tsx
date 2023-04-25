import React from 'react';
//import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { MainNavigation, MainNavigationExternal } from '.';
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
  title: 'Components/Navigation/MainNavigation',
  component: MainNavigation,
  subcomponents: { MainNavigationExternal },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    //mdx: markdown,
    previewWidth: 'full',
  },
};

export const Regular = (args) => (
  <MainNavigation {...args}>
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
                kind="main"
                id="search-2"
                labelText="Filter"
                placeholder="Filter list"
              />
              {/* onChange={() => {
                        alert('Apply Filter');
                      }} */}
            </SubNavigationFilter>
          </SubNavigationHeader>
          <SubNavigationContent>
            <SubNavigationList>
              <SubNavigationGroup title="First List" columns={1}>
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
        placeholder="Search"
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
              <Button kind="secondary" small>
                Logout
              </Button>
            </SubNavigationLink>
          </SubNavigationHeader>
          <SubNavigationContent>
            Additional content can be placed here.
            <br />
            Demo for internal close action:{' '}
            <Link /*onClick={() => onChangeSub('close')}*/>Close Menu</Link>
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

Regular.args = {
  logo: 'WFP',
};

const description = `
You can customize the content by using \`MainNavigation\`.
`;

const sourcecode = (type) => {
  return `import { Button,User, Search } from "@wfp/react";
  import {
    MainNavigationExternal,
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
  } from "@wfp/react";

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
                  kind="main"
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
          placeholder="Search"
          />
      </MainNavigationItem>
      <MainNavigationItem
          className="wfp--main-navigation__user"
          subNavigation={
          <SubNavigation>
              <SubNavigationHeader>
              <SubNavigationTitle>Welcome Lorem!</SubNavigationTitle>
              <SubNavigationLink>
                  <Button kind="secondary" small>
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
  `;
};

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
      source: {
        code: sourcecode(`<Link href="http://opweb.wfp.org" target="_blank">
            Section 4
          </Link>`),
      },
    },
  },
};

export const RegularWithButton = (args) => (
  <MainNavigation {...args}>
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
                placeholder="Filter list"
              />
              {/* onChange={() => {
                        alert('Apply Filter');
                      }} */}
            </SubNavigationFilter>
          </SubNavigationHeader>
          <SubNavigationContent>
            <SubNavigationList>
              <SubNavigationGroup title="First List" columns={1}>
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
        placeholder="Search"
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
              <Button kind="secondary" small>
                Logout
              </Button>
            </SubNavigationLink>
          </SubNavigationHeader>
          <SubNavigationContent>
            Additional content can be placed here.
            <br />
            Demo for internal close action:{' '}
            <Link /*onClick={() => onChangeSub('close')}*/>Close Menu</Link>
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

RegularWithButton.args = {
  logo: 'WFP',
};

RegularWithButton.story = {
  parameters: {
    docs: {
      storyDescription: `MainMavigation example with button option`,
      source: {
        code: sourcecode(`<Button kind="navigation" type="button">
            Button
          </Button>`),
      },
    },
  },
};

export const External = (args) => (
  <MainNavigationExternal {...args}>
    <>
      <MainNavigationItem external>
        <a>First link</a>
      </MainNavigationItem>
      <MainNavigationItem external>
        <a>Second link</a>
      </MainNavigationItem>
      {/* <li className={`wfp--main-navigation-ext__site-link`}>
    <Button kind="accent" small>
      Accent link
    </Button>
  </li> */}
    </>
  </MainNavigationExternal>
);

const Languages = () => (
  <>
    <li className={`wfp--language-ext__dropdown-option`}>
      <a>English</a>
    </li>
    <li className={`wfp--language-ext__dropdown-option`}>
      <a>French</a>
    </li>
    <li className={`wfp--language-ext__dropdown-option`}>
      <a>Spanish</a>
    </li>
  </>
);

const UserDropdownDetails = () => (
  <>
    <li className={`wfp--user-ext__profile-item`}>
      <span className={`wfp--user-ext__profile-label`}>Email:</span>
      <span className={`wfp--user-ext__profile-value`}>
        <Link inline>user@wfp.com</Link>
      </span>
    </li>
    <li className={`wfp--user-ext__profile-item`}>
      <span className={`wfp--user-ext__profile-label`}>Job title:</span>
      <span className={`wfp--user-ext__profile-value`}>Supply chain</span>
    </li>
    <li className={`wfp--user-ext__profile-item`}>
      <span className={`wfp--user-ext__profile-label`}>Country:</span>
      <span className={`wfp--user-ext__profile-value`}>Somalia</span>
    </li>
    <li className={`wfp--user-ext__profile-item`}>
      <span className={`wfp--user-ext__profile-label`}>Organization:</span>
      <span className={`wfp--user-ext__profile-value`}>
        The United Nations World food Programme (WFP)
      </span>
    </li>
    <div className={`wfp--user-ext__profile-actions`}>
      <Link className={`wfp--user-ext__profile-edit`} inline>
        Edit profile
      </Link>
      <Button kind="secondary" small>
        Log out
      </Button>
    </div>
  </>
);

External.args = {
  productName: (
    <>
      Product <br /> Name
    </>
  ),
  languageList: <Languages />,
  userDetails: <UserDropdownDetails />,
  username: 'Max Mustermann',
};

// Increase the size of the story's wrapper to show the mobile menu
const externalStoryStyles = {
  height: '400px',
};

External.story = {
  parameters: {
    docs: {
      storyDescription: 'Add a description',
    },
  },
  decorators: [
    (Story) => (
      <div style={externalStoryStyles}>
        <Story />
      </div>
    ),
  ],
};
