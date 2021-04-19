import React from 'react';
import AuthLayout from './AuthLayout';
import { shallow } from 'enzyme';

describe('AuthLayout', () => {
    describe('renders as expected', ()=>{
        const wrapper = shallow(
        <AuthLayout>
            <div>This is image content</div>
            <div>Auth content </div>
        </AuthLayout>)

        const authWrapper = () => wrapper.find('div.wfp--auth-wrapper');

        describe('authWrapper', () => {
            it('renders as expected', () => {
                expect(authWrapper().props().children.length).toBe(2)
            })
            it('renders classes as expected', () => {
                expect(authWrapper().hasClass('wfp--auth-wrapper')).toEqual(true)
            })
        })

        const backgroundWrapper = () => wrapper.find('div.wfp--auth-background-wrapper');

        describe('backgroundWrapper', () => {
            it('renders as expected', () => {
                expect(backgroundWrapper().length).toBe(1)
            })
            it('renders classes as expected', () => {
                expect(backgroundWrapper().hasClass('wfp--auth-background-wrapper')).toEqual(true)
            })
        })

        const contentWrapper = () => wrapper.find('div.wfp--auth-content-wrapper');

        describe('contentWrapper', () => {
            it('renders as expected', () => {
                expect(contentWrapper().length).toBe(1)
            })
            it('renders classes as expected', () => {
                expect(contentWrapper().hasClass('wfp--auth-content-wrapper')).toEqual(true)
            })
        })
    })
})