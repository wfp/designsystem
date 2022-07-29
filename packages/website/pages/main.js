import React from 'react';
import Layout from '../components/Blog/Layout';
import { Sidebar, SidebarHeader, Item, Search } from '@un/react';
import Accordion from '../components/Accordion';

const Main = () => {
  return (
    <Layout>
      <Sidebar
        sidebar={
          <>
            <SidebarHeader style={{ paddingTop: '45px' }}>
              <Search id="search22" />
            </SidebarHeader>
            <Accordion title="Getting Started">
              <Item kind="horizontal" title="Intro" />
              <Item kind="horizontal" title="Installing the Kit" />
              <Item kind="horizontal" title="Using the Kit" />
              <Item kind="horizontal" title="Recommended libraries" />
              <Item kind="horizontal" title="Supported Browsers" />
            </Accordion>
            <Accordion title="Guidelines"></Accordion>
            <Accordion title="Core"></Accordion>
            <Accordion title="Tools & Helpers">
              <Item kind="horizontal" title="Themes" />
              <Item kind="horizontal" title="React" />
              <Item kind="horizontal" title="Figma library" />
              <Item kind="horizontal" title="Styles" />
              <Item kind="horizontal" title="Icons" />
              <Item kind="horizontal" title="Pictograms" />
              <Item kind="horizontal" title="Humanitarian Icons" />
            </Accordion>
            <Accordion title="Components"></Accordion>
          </>
        }>
        jfdsnnd
      </Sidebar>
    </Layout>
  );
};

export default Main;
