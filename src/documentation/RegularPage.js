import PropTypes from 'prop-types';
import React from 'react';

import Link from '../components/Link';
import Footer from '../components/Footer';
import Search from '../components/Search';

import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from '../components/SecondaryNavigation';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import BreadcrumbHome from '../components/BreadcrumbHome';

import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

import Button from '../components/Button';

import {
  MainNavigation,
  MainNavigationItem,
} from '../components/MainNavigation';

import {
  SubNavigationList,
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationContent,
  SubNavigationGroup,
  SubNavigationFilter,
  SubNavigationItem,
  SubNavigationLink,
} from '../components/SubNavigation';
import User from '../components/User';

const props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
    inline: true,
  },
  tab: {
    className: 'another-class',
  },
};

const renderAnchor = props => {
  return <a href={props.href}>{props.label}</a>;
};

const Page = ({ children, withoutSecondary, withoutSecondaryTabs }) => {
  return (
    <div>
      <MainNavigation logo={<a href="http://www.wfp.org">WFP UI</a>}>
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
                    small
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
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        At vero eos
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        At vero eos
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Dolore magna
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Consetetur sadipscing
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
                      </Link>
                    </SubNavigationItem>
                  </SubNavigationGroup>
                  <SubNavigationGroup title="Second List of Items" columns>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        At vero eos
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        At vero eos
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Nonumy eirmod
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Consetetur sadipscing
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Dolore magna
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Nonumy eirmod
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Dolore magna
                      </Link>
                    </SubNavigationItem>
                    <SubNavigationItem>
                      <Link href="https://go.docs.wfp.org" target="_blank">
                        Sadipscing elitr
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
          />
        </MainNavigationItem>
        <MainNavigationItem
          className="wfp--main-navigation__user"
          subNavigation={
            <div>
              <h3>Hello World</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquya.
              </p>
            </div>
          }>
          <User ellipsis title="Max Mustermann long name" />
        </MainNavigationItem>
      </MainNavigation>

      {!withoutSecondary && (
        <SecondaryNavigation
          additional="additional Information"
          pageWidth="narrow">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/#">
                <BreadcrumbHome />
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
          </Breadcrumb>
          <SecondaryNavigationTitle>The Page Title</SecondaryNavigationTitle>
          {!withoutSecondaryTabs && (
            <Tabs {...props.tabs} customTabContent={true}>
              <Tab
                {...props.tab}
                label="Tab label 1"
                href="http://www.de.wfp.org"
                renderAnchor={renderAnchor}
              />
              <Tab
                {...props.tab}
                label="Tab label 2"
                href="http://www.es.wfp.org"
                renderAnchor={renderAnchor}
              />
              <Tab
                {...props.tab}
                label="Tab label 3"
                href="http://www.us.wfp.org"
                renderAnchor={renderAnchor}
              />
              <Tab
                {...props.tab}
                label="Tab label 4"
                href="http://www.fr.wfp.org"
                renderAnchor={renderAnchor}
              />
            </Tabs>
          )}
        </SecondaryNavigation>
      )}

      {children}

      <Footer
        className="some-class"
        metaContent="WFP UI Kit version 1.0 – powered by RMT with full support of concerned divisions which are responsible for the accuracy of the content"
        pageWidth="narrow">
        <div className="wfp--footer-info">
          <div className="wfp--footer-info__item">
            <p className="wfp--footer-label">A label</p>
            <Link href="http://www.wfp.org">First Link</Link>
            <Link href="http://www.wfp.org">Second Link</Link>
          </div>
          <div className="wfp--footer-info__item">
            <p className="wfp--footer-label">Another label</p>
            <Link href="http://www.go.wfp.org">WFP go</Link>
            <Link href="http://www.wfp.org">Second Link</Link>
          </div>
        </div>
      </Footer>
    </div>
  );
};

Page.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
