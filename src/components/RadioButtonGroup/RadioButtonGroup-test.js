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

      // it('should set checked property based on valueSelected prop', () => {
      //   wrapper.setProps({ valueSelected: 'male' });
      //   console.log("vcbnmhgfa",radioButton().first().props())
      //   expect(
      //     radioButton()
      //       .first()
      //       .props().checked
      //   ).toEqual(true);
      //   wrapper.setProps({ valueSelected: 'female' });
      //   expect(
      //     radioButton()
      //       .last()
      //       .props().checked
      //   ).toEqual(true);
      // });

      it('should set expected props on children', () => {
        const firstChild = radioButton().first();
        expect(firstChild.props().value).toEqual('male');
      });
    });
  });

  describe('onChange event', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <RadioButtonGroup onChange={onChange} name="gender">
        <RadioButton labelText="Male" value="male" />
        <RadioButton labelText="Female" value="female" />
      </RadioButtonGroup>
    );

    const firstRadio = wrapper.find(RadioButton).first();
    const args = ['male', 'gender', { test: 'test event' }];

    // it('first child should not have checked set initially', () => {
    //   expect(firstRadio.props().checked).toEqual(false);
    // });

    // it('invoking onChange sets checked on correct child', () => {
    //   firstRadio.props().onChange(...args);
    //   wrapper.update();
    //   expect(
    //     wrapper
    //       .find(RadioButton)
    //       .first()
    //       .props().checked
    //   ).toEqual(true);
    // });

    // it('should invoke onChange with correct arguments', () => {
    //   expect(onChange).toBeCalledWith(...args);
    // });

    it('calling onChange with same args should not call onChange prop', () => {
      onChange.mockClear();
      firstRadio.props().onChange(...args);
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('Getting derived state from props', () => {
    const wrapper = shallow(
      <RadioButtonGroup
        valueSelected="male"
        defaultSelected="female"
        name="gender"
      >
        <RadioButton labelText="Male" value="male" />
        <RadioButton labelText="Female" value="female" />
      </RadioButtonGroup>
    );

    it('should initialize the current selection from props', () => {
      expect(wrapper.state().selected).toEqual('male');
    });

    it('should change the current selection upon change in props', () => {
      wrapper.setProps({ valueSelected: 'male' });
      wrapper.setState({ selected: 'male' });
      wrapper.setProps({ valueSelected: undefined });
      expect(wrapper.state().selected).toEqual('female');
    });

    it('should avoid change the current selection upon setting props, unless there the value actually changes', () => {
      wrapper.setProps({ valueSelected: 'female' });
      wrapper.setState({ selected: 'male' });
      wrapper.setProps({ valueSelected: 'female' });
      expect(wrapper.state().selected).toEqual('male');
    });
  });
});
