import React from 'react';
import {BannerNavigation, BannerNavigationItem} from '../BannerNavigation';
import { shallow } from 'enzyme';

describe('BannerNavigation', ()=>{

    describe('renders as expected', ()=>{
        const wrapper = shallow(<BannerNavigation>Items placed here</BannerNavigation>);

        const bannerWrapper = () => wrapper.find('div.wfp--banner-navigation'); 

        describe('bannerWrapper', () => {
            it('renders as expected', () => {
                expect(bannerWrapper().length).toBe(1);
            });

            it('renders default classes as expected', () => {
                expect(bannerWrapper().hasClass('wfp--banner-navigation')).toEqual(true);
            });

            it('renders unoredered list as expected', () => {
                expect(bannerWrapper().find('ul').length).toBe(1);
            });

            
        })
    })
})


describe('BannerNavigationItem', ()=>{

    describe('renders as expected', ()=>{
        const wrapper = shallow(<BannerNavigationItem>Items placed here</BannerNavigationItem>);

            it('renders as expected', () => {
                expect(wrapper.length).toBe(1);
            });

            it('renders default classes as expected', () => {
                expect(wrapper.hasClass('wfp--banner-navigation__item')).toEqual(true);
            });

            it('renders unoredered list as expected', () => {
                expect(wrapper.find('li').length).toBe(1);
            });
    })
})