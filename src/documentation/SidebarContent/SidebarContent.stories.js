import React, {useState} from 'react';

import markdown from './README.mdx';
import Sidebar from './Sidebar';
import DATA from './PHONEBOOK.json'
import User from '../../components/User';
import {List, ListItem} from '../../components/List'
import MainNavigation from '../../components/MainNavigation';
import Item from '../../components/SidebarItem/SidebarItem';
import Tag from '../../components/Tag';
import Text from '../../components/Text';

export default {
    title: 'Templates/SidebarContent',
    parameters: {
      status: 'released',
      mdx: markdown,
      previewWidth: 'full',
    },
  };




export const Phonebook = (args) => {
  const [content, setContent] = useState(null);

  const updateContent = (user) => {
    const sidebarContent = (
      <div style={{backgroundColor:'#fff', overflow:'scroll', padding:'1rem', height:'100vh'}}>
      <User
      id={user.staff_id}
      alt="avatar"
      description={<List small><ListItem>{user.job_title}</ListItem></List>}
      image={user.profile_image}
      name={user.full_name}
      style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0 2rem 0', marginBottom:'1rem'}}
      />
      <div>
          <div style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0'}}>
              <h4>Bio</h4>
              <List small>
                  <ListItem>{user.bio}</ListItem>
              </List>
          </div>
          
          <div style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0'}}>
              <h4>Contact</h4>
              <List small>
                  <ListItem>email: {user.email}</ListItem>
                  <ListItem>phone: {user.phone_number}</ListItem>
              </List>
          </div>

          <div style={{padding:'1rem 0'}}>
              <h4>Location</h4>
              <List small>
                  <ListItem>country: {user.country}</ListItem>
              </List>
          </div>
      </div>
  </div>
    )
      setContent(sidebarContent)
  }

  const dataSchema = {
    image: 'profile_image',
    title: 'full_name',
    content:'email',
    subContent: 'phone_number'
  }

  return(
      <>
      <MainNavigation />
      <Sidebar 
        data={DATA} 
        content={content} 
        updateContent={updateContent} 
        sidebarItemSchema={dataSchema} 
        enableSearch={false}
        />
      </>
  )
}

export const Regular = (args) => {
  const sidebarSchema = {
    title: 'full_name',
    content:'email',
    subContent: 'phone_number'
  }

  const content = (
    <div style={{padding: '1rem'}}>
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
  )
  return(
    <>
      <MainNavigation />
      <Sidebar data={DATA} sidebarItemSchema={sidebarSchema} content={content} />
    </>
)
}
