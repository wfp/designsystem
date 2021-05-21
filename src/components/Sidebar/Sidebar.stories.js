import React, { useState } from 'react';

import markdown from './README.mdx';
import Sidebar, {
  SidebarHeader,
  SidebarBackButton,
  SidebarScroll,
} from './Sidebar';
import DATA from './PHONEBOOK.json';
import User from '../User';
import { List, ListItem } from '../List';
import MainNavigation from '../MainNavigation';
import Item from '../Item';
import Empty from '../Empty';
import Search from '../Search';
import Tag from '../Tag';
import sidebarTwig from './Sidebar.twig';

export default {
  title: 'Components/Content Related/Sidebar',
  component: Sidebar,
  subcomponents: { SidebarHeader, SidebarBackButton, SidebarScroll },
  parameters: {
    status: 'released',
    mdx: markdown,
    previewWidth: 'full',
    twig: sidebarTwig
  },
};

export const Regular = (args) => {
  const [active, setActive] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <MainNavigation pageWidth="full" />
      <Sidebar
        {...args}
        active={active}
        sidebar={
          <>
            <SidebarHeader>
              <Search />
            </SidebarHeader>
            <Item
              additional="Yesterday"
              hint={<Tag kind="wfp">Hint</Tag>}
              kind="horizontal"
              subContent="subcontent"
              title="A title is shown"
              wrapper="sidebar"
              onClick={() => setActive(true)}
            />
          </>
        }
        sidebarMobileHeader={
          <>
            <SidebarBackButton onClick={() => setActive(false)}>
              Back
            </SidebarBackButton>
            <div>Detail page</div>
          </>
        }>
        {active ? (
          <Item
            additional="Yesterday"
            hint={<Tag kind="wfp">Hint</Tag>}
            kind="large"
            showAdditionalIcon
            subContent="This is the subContent. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
            title="A title is shown"
            wrapper="button">
            nonumy eirmod tempor invidunt
          </Item>
        ) : (
          <Empty title="Content here">
            When an item is selected, its corresponding content will be shown
            here
          </Empty>
        )}
      </Sidebar>
    </div>
  );
};

export const Phonebook = (args) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [search, setSearch] = useState();
  const selectedUserData = DATA.find((e) => e.id === selectedUserId);

  const searchResults = search
    ? DATA.filter((e) =>
        e.full_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : DATA;
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <MainNavigation pageWidth="full" />
      <Sidebar
        active={selectedUserId}
        sidebarMobileHeader={
          <>
            <SidebarBackButton onClick={() => setSelectedUserId()}>
              Back
            </SidebarBackButton>
            <div>Detail page</div>
          </>
        }
        sidebar={
          <>
            <SidebarHeader>
              <Search onChange={(e) => setSearch(e)} />
            </SidebarHeader>
            <SidebarScroll>
              {searchResults && searchResults.length > 0 ? (
                searchResults.map((user, key) => (
                  <Item
                    active={selectedUserId === user.id}
                    key={key}
                    image={
                      user.profile_image ? (
                        <img alt={user.full_name} src={user.profile_image} />
                      ) : undefined
                    }
                    title={user.full_name}
                    children={user.email}
                    subContent={user.phone_number}
                    kind="horizontal"
                    wrapper="sidebar"
                    onClick={() => setSelectedUserId(user.id)}
                    noImage
                  />
                ))
              ) : (
                <Empty title="No results">Please check your search</Empty>
              )}
            </SidebarScroll>
          </>
        }>
        {selectedUserData ? (
          <div
            style={{
              backgroundColor: '#fff',
              padding: '1rem',
            }}>
            <User
              id={selectedUserData.staff_id}
              alt="avatar"
              description={
                <List small>
                  <ListItem>{selectedUserData.job_title}</ListItem>
                </List>
              }
              image={selectedUserData.profile_image}
              name={selectedUserData.full_name}
              style={{
                borderBottom: '1px solid #edf1f3',
                padding: '1rem 0 2rem 0',
                marginBottom: '1rem',
              }}
            />
            <div>
              <div
                style={{
                  borderBottom: '1px solid #edf1f3',
                  padding: '1rem 0',
                }}>
                <h4>Bio</h4>
                <List small>
                  <ListItem>{selectedUserData.bio}</ListItem>
                </List>
              </div>

              <div
                style={{
                  borderBottom: '1px solid #edf1f3',
                  padding: '1rem 0',
                }}>
                <h4>Contact</h4>
                <List small>
                  <ListItem>email: {selectedUserData.email}</ListItem>
                  <ListItem>phone: {selectedUserData.phone_number}</ListItem>
                </List>
              </div>

              <div style={{ padding: '1rem 0' }}>
                <h4>Location</h4>
                <List small>
                  <ListItem>country: {selectedUserData.country}</ListItem>
                </List>
              </div>
            </div>
          </div>
        ) : (
          <Empty title="No user selected">Please select a user</Empty>
        )}
      </Sidebar>
    </div>
  );
};
