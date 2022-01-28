import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';

describe('RadioButtonGroup', () => {
  describe('renders as expected', () => {
    const wrapper = mount(
      <RadioButtonGroup defaultSelected="female" name="gender">
        <RadioButton labelText="Male" value="male" />
        <RadioButton labelText="Female" value="female" />
      </RadioButtonGroup>
    );

    describe('wrapping div', () => {
      const div = wrapper.first('div');

      it('renders a div', () => {
        expect(div.length).toEqual(1);
      });

      it('sets classes that are passed via className prop', () => {
        wrapper.setProps({ className: 'extra-class' });
        expect(div.hasClass('extra-class'));
      });

      it('sets disabled attribute if disabled prop is set', () => {
        wrapper.setProps({ disabled: true });
        expect(wrapper.first().props().disabled).toEqual(true);
      });
    });

    describe('children', () => {
      const radioButton = () => wrapper.find(RadioButton);

      it('renders expected number of children', () => {
        expect(radioButton().length).toEqual(2);
      });

      it('should set expected props on children', () => {
        const firstChild = radioButton().first();
        expect(firstChild.props().value).toEqual('male');
      });
    });
  });



  describe('Getting derived state from props', () => {
    const wrapper = shallow(
      <RadioButtonGroup
        defaultSelected="male"
        name="gender">
        <RadioButton labelText="Male" value="male" />
        <RadioButton labelText="Female" value="female" />
      </RadioButtonGroup>
    );

    it('should initialize the current selection from props', () => {
      console.log("state", wrapper);
      expect(wrapper.state().selected).toEqual('male');
    });

  });
});
