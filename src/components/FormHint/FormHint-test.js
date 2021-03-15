import React from 'react';
import FormHint from '../FormHint';
import { shallow, mount } from 'enzyme';

describe('FormHint', () => {
    describe('Renders as expected', () => {
        const wrapper = shallow(<FormHint>formhint</FormHint>);

        it('renders <Tooltip> as the main wrapper', () => {
            expect(wrapper.exists('.wfp--form-hint')).toBe(true);
        })
    });
});