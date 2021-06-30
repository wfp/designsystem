import React from 'react';
import Story from '../Story';
import { shallow } from 'enzyme';

describe('Story', () => {
    describe('Renders as expected', () => {
        const wrapper = shallow(<Story className="some-class" >Content</Story>)

        it('has classes as expected', () => {
            expect(wrapper.exists('.wfp--story')).toBe(true);
           
        })

        it('should allow for custom classes to be applied', () => {
            expect(wrapper.hasClass('some-class')).toEqual(true);
        });

        
    });

    
})