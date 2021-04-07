import React from 'react';
import Table from '../Table';
import { mount } from 'enzyme';

describe('FormWizard', () => {
    describe('Renders as expected', () => {
        const wrapper = mount(<Table withBorder></Table>);

        it('renders class as expected', () => {
            expect(wrapper.exists('.wfp--table')).toBe(true);
        })

        it('renders class on withBorder prop', () => {
            expect(wrapper.exists('.wfp--table--with-border')).toBe(true);
        })

        it('renders prop as expected', () => {
            expect(wrapper.props().withBorder).toBe(true);
        })
    });

});