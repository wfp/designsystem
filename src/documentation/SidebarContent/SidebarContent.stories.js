import React, {useState} from 'react';

import markdown from './README.mdx';
import Sidebar from './Sidebar';
import DATA from './PHONEBOOK.json'
import User from '../../components/User';
import {List, ListItem} from '../../components/List'
import MainNavigation from '../../components/MainNavigation';

export default {
    title: 'Templates/SidebarContent',
    parameters: {
      status: 'released',
      mdx: markdown,
      previewWidth: 'full',
    },
  };

export const Regular = (args) => (
  <Sidebar />
)


export const Sidebarr = (args) => {
  const [content, setContent] = useState(null);

  const updateContent = (user) => {
    const sidebarContent = (
      <div style={{backgroundColor:'#fff', overflow:'scroll', padding:'1rem'}}>
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

