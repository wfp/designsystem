import React from 'react';
import BannerNavigation from './BannerNavigation';
import { shallow } from 'enzyme';

describe('BannerNavigation', ()=>{

    describe('renders as expected', ()=>{
        const wrapper = shallow(<BannerNavigation />);

        const bannerWrapper = () => wrapper.find('div.wfp--banner-navigation'); 

        describe('bannerWrapper', () => {
            it('renders as expected', () => {
                expect(bannerWrapper().length).toBe(1);
            })
        })
    })
})