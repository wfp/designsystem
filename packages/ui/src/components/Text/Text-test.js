import React from 'react';
import Text from '../Text';
import { shallow, mount } from 'enzyme';

describe('Text', () => {
    describe('Renders as expected', () => {
        const wrapper = shallow(<Text>test child here</Text>);

        it('renders as expected ', () => {
            expect(wrapper.length).toBe(1);
        })

        it('should render classes as exected', () => {
            const textWrapper = () => wrapper.find('div.wfp--text');
            expect(textWrapper().hasClass('wfp--text')).toBe(true);
        })
    });

});