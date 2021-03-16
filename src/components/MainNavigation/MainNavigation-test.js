import React from 'react';
import MainNavigation from '../MainNavigation';
import MainNavigationItem from '../MainNavigationItem';
import Link from '../Link';
import { shallow } from 'enzyme';

describe('MainNavigation', () => {
    describe('Renders as expected', () => {
        const wrapper = shallow(<MainNavigation className="some-class">Content</MainNavigation>)

        it('has classes as expected', () => {
            expect(wrapper.exists('.wfp--main-navigation')).toBe(true);
           
        })

        it('should allow for custom classes to be applied', () => {
            expect(wrapper.hasClass('some-class')).toEqual(true);
          });

        it('has children as expected', () => {
            expect(wrapper.find("ul").length).toBe(1);
        })

        
    });

    
})