import PropTypes from 'prop-types';
import React from 'react';

import Link from '../components/Link';
import Wrapper from '../components/Wrapper';
import Blockquote from '../components/Blockquote';
import { BannerNavigation, BannerNavigationItem } from '../components/BannerNavigation';
import Footer from '../components/Footer';
import Search from '../components/Search';

import { SecondaryNavigation, SecondaryNavigationTitle } from '../components/SecondaryNavigation';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import BreadcrumbHome from '../components/BreadcrumbHome';


import { SecondaryTabs, SecondaryTabsItem } from '../components/SecondaryTabs';

import { MainNavigation, MainNavigationItem, SubMenuList, SubMenuSection, SubMenuItem } from '../components/MainNavigation';
import User from '../components/User';

const Page = ({ children }) => {
  return (
     <div>
      <BannerNavigation pageWidth="narrow">
        <BannerNavigationItem>
          <Link href="http://communities.wfp.org" target="_blank">Communities</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://manuals.wfp.org" target="_blank">Manuals</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://go.docs.wfp.org" target="_blank">GoDocs</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://opweb.wfp.org" target="_blank">OPweb</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://info.wfp.org" target="_blank">IN/FO</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://selfservice.go.wfp.org" target="_blank">Self-service</Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://welearn.wfp.org" target="_blank">WeLearn</Link>
        </BannerNavigationItem>         
        {/*<BannerNavigationItem>
          <Search
            size="small"
            id="search-2"
            labelText="Search"
            placeHolderText="Search"
            onChange={action('onChange')}
          />
        </BannerNavigationItem>*/}
      </BannerNavigation>


      <MainNavigation
        logo="WFP UI">
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
          <User title="Max Mustermann"/>
        </MainNavigationItem>    
      </MainNavigation>



      <SecondaryNavigation
        additional="additional Information"
        pageWidth="narrow"
      >
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

        <SecondaryTabs pageWidth="narrow">
          <SecondaryTabsItem>
            <Link className="active" href="http://communities.wfp.org" target="_blank">First Tab</Link>
          </SecondaryTabsItem>
          <SecondaryTabsItem>
            <Link href="http://manuals.wfp.org" target="_blank">Second Tab</Link>
          </SecondaryTabsItem>
          <SecondaryTabsItem>
            <Link href="https://go.docs.wfp.org" target="_blank">Third Tab</Link>
          </SecondaryTabsItem>       
        </SecondaryTabs>
      </SecondaryNavigation>

      <Wrapper
        background="lighter"
        pageWidth="narrow"
        spacing="md"
      >
        {children}
      </Wrapper>



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
  className: PropTypes.string
};

export default Page;
