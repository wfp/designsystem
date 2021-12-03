import React from 'react';
import FormWizard from '../FormWizard';
import { shallow, mount } from 'enzyme';

describe('FormWizard', () => {
    describe('Renders as expected', () => {
        const wrapper = shallow(<FormWizard sidebar={<div>The Sidebar content</div>}>formhint</FormWizard>);

        it('renders form wizard wrapper', () => {
            expect(wrapper.exists('.wfp--form-wizard')).toBe(true);
        })
    });

    describe('Renders as a sticky sidebar', () => {
        const wrapper = mount(<FormWizard stickySidebar sidebar={<div>The Sidebar content</div>}>formhint</FormWizard>);
      
        it('prop as expected', () => {
            expect(wrapper.props().stickySidebar).toEqual(true);
        })

        it('classes to stickySidebar prop ', () => {
            expect(wrapper.exists('.wfp--form-wizard--sticky')).toBe(true);
        })
    });
});