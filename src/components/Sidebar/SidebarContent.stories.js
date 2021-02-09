import React, { useState } from 'react';

import markdown from './README.mdx';
import Sidebar from './Sidebar';
import { SidebarHeader, SidebarBackButton } from './Sidebar';
import DATA from './PHONEBOOK.json';
import User from '../User';
import { List, ListItem } from '../List';
import MainNavigation from '../MainNavigation';
import Item from '../Item';
import Empty from '../Empty';
import Search from '../Search';

export default {
  title: 'Templates/SidebarContent',
  parameters: {
    status: 'released',
    mdx: markdown,
    previewWidth: 'full',
  },
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
    <>
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
        sidebarContent={
          <>
            <SidebarHeader>
              <Search
                placeHolderText="Type to search user"
                onChange={(e) => setSearch(e)}
              />
            </SidebarHeader>
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((user, key) => (
                <Item
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
          </>
        }>
        {selectedUserData ? (
          <div
            style={{
              backgroundColor: '#fff',
              overflow: 'scroll',
              padding: '1rem',
              height: '100vh',
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
    </>
  );
};
/*
export const Regular = (args) => {
  const sidebarSchema = {
    title: 'full_name',
    content: 'email',
    subContent: 'phone_number',
  };

  const content = (
    <div style={{ padding: '1rem' }}>
      <div>
        <Text kind="title">Report preview year 2020</Text>
      </div>
      <Item
        additionalInfo="Friday, 21.02.20"
        content="409 boys, 422 girls"
        hintInfo={<Tag type="warning">not synced</Tag>}
        noImage
        subContent="meal served"
        title="831 students"
      />
    </div>
  );
  return (
    <>
      <MainNavigation />
      <Sidebar
        data={DATA}
        sidebarItemSchema={sidebarSchema}
        content={content}
      />
    </>
  );
};*/
