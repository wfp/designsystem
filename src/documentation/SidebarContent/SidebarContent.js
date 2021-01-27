import React, {useMemo, useState} from 'react'

import Search from '../../components/Search';
import MainNavigation from '../../components/MainNavigation';
import User from '../../components/User';
import {List, ListItem} from '../../components/List'
import DATA from './PHONEBOOK.json'
import Footer from '../../components/Footer';
import Link from '../../components/Link';
import EmptyContent from './EmptyContent';
import SidebarItem from '../SidebarItem/SidebarItem';

//This layout is the sidebar and content section that accept children

function Sidebar() {
    const data = useMemo(() => DATA, [])
    const [currentUser, setCurrentUser] = useState(null);
    const [searchedUser, setSearchedUser] = useState('')
    const [userActive, setUserActive] = useState(false)

    const handleUserClick = (data) =>{
        setCurrentUser(data);
        setUserActive(true);
    }

    const handleSearchChanged = (e) => {
        setSearchedUser(e)
    }

    return (
        <>
        <MainNavigation />
        <div className="wfp--sidebar-content__container">
            <div className="wfp--sidebar-item-content" >
                <div style={{padding:'1rem'}}>
                    <Search
                        placeHolderText="Type to search user"
                        onChange={handleSearchChanged}
                    />
                </div>
                {
                    data.filter((val)=>{
                        if(searchedUser == ""){
                            return val;
                        }else if(val.full_name.toLowerCase().includes(searchedUser.toLowerCase())){
                            return val;
                        }

                    }).map((user)=>{
                        return (
                            <SidebarItem
                                key={user.staff_id}
                                image={user.profile_image}
                                title={user.full_name}
                                content={user.email}
                                subContent={user.phone_number}
                                onClick={() => handleUserClick(user)}
                                noImage={false}
                            />
                        )
                    })
                }
                
            </div>
            <div style={{width: '65%'}}>
                {
                        (currentUser)?
                            (
                                <div style={{backgroundColor:'#fff', overflow:'scroll', padding:'1rem'}}>
                                    <User
                                    id={currentUser.staff_id}
                                    alt="avatar"
                                    description={<List small><ListItem>{currentUser.job_title}</ListItem></List>}
                                    image={currentUser.profile_image}
                                    name={currentUser.full_name}
                                    onClick={() => handleUserClick(currentUser.staff_id)}
                                    style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0 2rem 0', marginBottom:'1rem'}}
                                    />
                                    <div>
                                        <div style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0'}}>
                                            <h4>Bio</h4>
                                            <List small>
                                                <ListItem>{currentUser.bio}</ListItem>
                                            </List>
                                        </div>
                                        
                                        <div style={{borderBottom:'1px solid #edf1f3', padding:'1rem 0'}}>
                                            <h4>Contact</h4>
                                            <List small>
                                                <ListItem>email: {currentUser.email}</ListItem>
                                                <ListItem>phone: {currentUser.phone_number}</ListItem>
                                            </List>
                                        </div>

                                        <div style={{padding:'1rem 0'}}>
                                            <h4>Location</h4>
                                            <List small>
                                                <ListItem>country: {currentUser.country}</ListItem>
                                            </List>
                                        </div>
                                    </div>
                                </div>
                            ) : <EmptyContent/>
                        
                }
            </div>
        </div>
                
            <Footer>
            <div className="wfp--footer__info">
                <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">
                    A label
                </p>
                <ul className="wfp--footer__list">
                    <li>
                    <Link href="http://www.wfp.org">
                        First Link
                    </Link>
                    </li>
                    <li>
                    <Link href="http://www.wfp.org">
                        Second Link
                    </Link>
                    </li>
                </ul>
                </div>
                <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">
                    Another label
                </p>
                <ul className="wfp--footer__list">
                    <li>
                    <Link href="http://www.wfp.org">
                        First Link
                    </Link>
                    </li>
                    <li>
                    <Link href="http://www.wfp.org">
                        Second Link
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </Footer>

        </>
    )
}

export default Sidebar