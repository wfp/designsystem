import React from 'react';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbHome,
  Tabs,
  Tab,
} from '@wfp/react';

function NavigationSecondary() {
  return (
    <SecondaryNavigation additional="additional Information" pageWidth="lg">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/#">
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>
      <SecondaryNavigationTitle>The page title</SecondaryNavigationTitle>
      <Tabs
        ariaLabel="listbox"
        customTabContent
        role="navigation"
        selected={0}
        triggerHref="#">
        <Tab
          href="#"
          label="Tab label 1"
          onClick={() => {}}
          onKeyDown={function noRefCheck() {}}
          role="presentation"
          selected={false}
          tabIndex={0}>
          <div>sbjbjhb</div>
        </Tab>
        <Tab
          href="#"
          label="Tab label 2"
          onClick={function noRefCheck() {}}
          onKeyDown={function noRefCheck() {}}
          role="presentation"
          selected={false}
          tabIndex={1}
        />
        <Tab
          href="#"
          label="Tab label 3"
          onClick={function noRefCheck() {}}
          onKeyDown={function noRefCheck() {}}
          role="presentation"
          selected={false}
          tabIndex={2}
        />
        <Tab
          href="#"
          label="Tab label 4"
          onClick={function noRefCheck() {}}
          onKeyDown={function noRefCheck() {}}
          role="presentation"
          selected={false}
          tabIndex={3}
        />
      </Tabs>
      {/* </SecondaryNavigation>
        <SecondaryNavigation>
            <Breadcrumb>
                <BreadcrumbItem>
                <a href="/#">
                    <BreadcrumbHome />
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem href="#">
                Breadcrumb 2
                </BreadcrumbItem>
                <BreadcrumbItem disableLink>
                Breadcrumb 3
                </BreadcrumbItem>
            </Breadcrumb>
            <SecondaryNavigationTitle>
                The page title
            </SecondaryNavigationTitle>
            <Tabs customContent>
            <Tab label="Label 1">
                <div className="some-content"> 
                Assisting 91.4 million people in around 83 countries each year, the World Food Programme (WFP) is 
                the leading humanitarian organization saving lives and changing lives, delivering food assistance in 
                emergencies and working with communities to improve nutrition and build resilience. As the international 
                community has committed to end hunger, achieve food security and improved nutrition by 2030, 
                one in nine people worldwide still do not have enough to eat. Food and food-related assistance lie 
                at the heart of the struggle to break the cycle of hunger and poverty. On any given day, WFP has 5,000 trucks, 
                20 ships and 92 planes on the move, delivering food and other assistance to those in most need. Every year, 
                we distribute more than 15 billion rations at an estimated average cost per ration of US$ 0.31. 
                These numbers lie at the roots of WFP’s unparalleled reputation as an emergency responder, 
                one that gets the job done quickly at scale in the most difficult environments. 
                WFP’s efforts focus on emergency assistance, relief and rehabilitation, development aid and special operations. 
                Two-thirds of our work is in conflict-affected countries where people are three times more likely to be 
                undernourished than those living in countries without conflict.
                </div>
            </Tab>
            <Tab label="Label 2">
                <div className="some-content">
                    Content for second tab goes here.
                </div>
            </Tab>
            <Tab label="Label 3">
                <div className="some-content">
                Content for third tab goes here.
                </div>
            </Tab>
            <Tab
                label="Label 4">
                <div className="some-content">
                Content for fourth tab goes here.
                </div>
            </Tab>
            </Tabs>
           */}
    </SecondaryNavigation>
  );
}

export default NavigationSecondary;
