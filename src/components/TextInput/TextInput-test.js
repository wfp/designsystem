/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import TextInput from '../TextInput';
import { mount, shallow } from 'enzyme';

describe('TextInput', () => {
  describe('renders as expected', () => {
    const wrapper = mount(
      <TextInput
        id="test"
        className="extra-class"
        labelText="testlabel"
        helperText="testHelper"
        name="name"
      />
    );

    const textInput = () => wrapper.find('input');

    describe('input', () => {
      it('renders as expected', () => {
        expect(textInput().length).toBe(1);
      });

      it('should add extra classes that are passed via className', () => {
        expect(textInput().hasClass('extra-class')).toEqual(true);
      });

      it('should set type as expected', () => {
        expect(textInput().props().type).toEqual('text');
        wrapper.setProps({ type: 'email' });
        expect(textInput().props().type).toEqual('email');
      });

      it('should set value as expected', () => {
        expect(textInput().props().defaultValue).toEqual(undefined);
        wrapper.setProps({ defaultValue: 'test' });
        expect(textInput().props().defaultValue).toEqual('test');
      });

      it('should set disabled as expected', () => {
        expect(textInput().props().disabled).toEqual(false);
        wrapper.setProps({ disabled: true });
        expect(textInput().props().disabled).toEqual(true);
      });

      it('should set placeholder as expected', () => {
        expect(textInput().props().placeholder).not.toBeDefined();
        wrapper.setProps({ placeholder: 'Enter text' });
        expect(textInput().props().placeholder).toEqual('Enter text');
      });
    });

    describe('label', () => {
      wrapper.setProps({ labelText: 'Email Input' });
      const renderedLabel = wrapper.find('label');

      it('renders a label', () => {
        expect(renderedLabel.length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(renderedLabel.hasClass('wfp--label')).toEqual(true);
      });

      it('should set label as expected', () => {
        expect(renderedLabel.text()).toEqual('Email Input');
      });
    });

    describe('helper', () => {
      it('renders a helper', () => {
        const renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.length).toEqual(1);
      });

      it('renders children as expected', () => {
        wrapper.setProps({
          helperText: (
            <span>
              This helper text has <a href="#">a link</a>.
            </span>
          ),
        });
        const renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.props().children).toEqual(
          <span>
            This helper text has <a href="#">a link</a>.
          </span>
        );
      });

      it('should set helper text as expected', () => {
        wrapper.setProps({ helperText: 'Helper text' });
        const renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.text()).toEqual('Helper text');
      });
    });
  });

  describe('events', () => {
    describe('disabled textinput', () => {
      const onClick = jest.fn();
      const onChange = jest.fn();

      const wrapper = mount(
        <TextInput
          id="test"
          labelText="testlabel"
          onClick={onClick}
          onChange={onChange}
          disabled
          name="name"
        />
      );

      const input = wrapper.children();

      it('should not invoke onClick', () => {
        input.simulate('click');
        expect(onClick).not.toBeCalled();
      });

      it('should not invoke onChange', () => {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });

    describe('enabled textinput', () => {
      const onClick = jest.fn();
      const onChange = jest.fn();

      const wrapper = mount(
        <TextInput
          labelText="testlabel"
          id="test"
          onClick={onClick}
          onChange={onChange}
          name="name"
        />
      );

      const inputt = wrapper.find('input');

      it('should invoke onClick when input is clicked', () => {
        inputt.simulate('click');
        expect(onClick).toBeCalled();
      });
    });
  });
});
