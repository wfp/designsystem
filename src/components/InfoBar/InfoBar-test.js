import React from 'react';
import InfoBar from '../InfoBar';
import { shallow } from 'enzyme';

describe('InfoBar', () => {
    describe('renders as expected', ()=>{
        const wrapper = shallow(<InfoBar>Info bar content </InfoBar>);

        it('renders children as exepected', () => {
            expect(wrapper.length).toBe(1);
        })

        it('renders root classes as expected', () => {
            expect(wrapper.hasClass('wfp--info-bar')).toEqual(true);
        })
    })
})