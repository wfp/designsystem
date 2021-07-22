import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';
describe('RadioButtonGroup', function () {
  describe('renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(RadioButtonGroup, {
      defaultSelected: "female",
      name: "gender"
    }, /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Male",
      value: "male"
    }), /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Female",
      value: "female"
    })));
    describe('wrapping div', function () {
      var div = wrapper.first('div');
      it('renders a div', function () {
        expect(div.length).toEqual(1);
      });
      it('sets classes that are passed via className prop', function () {
        wrapper.setProps({
          className: 'extra-class'
        });
        expect(div.hasClass('extra-class'));
      });
      it('sets disabled attribute if disabled prop is set', function () {
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.first().props().disabled).toEqual(true);
      });
    });
    describe('children', function () {
      var radioButton = function radioButton() {
        return wrapper.find(RadioButton);
      };

      it('renders expected number of children', function () {
        expect(radioButton().length).toEqual(2);
      }); // it('should set checked property based on valueSelected prop', () => {
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

      it('should set expected props on children', function () {
        var firstChild = radioButton().first();
        expect(firstChild.props().value).toEqual('male');
      });
    });
  });
  describe('onChange event', function () {
    var onChange = jest.fn();
    var wrapper = mount( /*#__PURE__*/React.createElement(RadioButtonGroup, {
      onChange: onChange,
      name: "gender"
    }, /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Male",
      value: "male"
    }), /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Female",
      value: "female"
    })));
    var firstRadio = wrapper.find(RadioButton).first();
    var args = ['male', 'gender', {
      test: 'test event'
    }]; // it('first child should not have checked set initially', () => {
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

    it('calling onChange with same args should not call onChange prop', function () {
      var _firstRadio$props;

      onChange.mockClear();

      (_firstRadio$props = firstRadio.props()).onChange.apply(_firstRadio$props, args);

      expect(onChange).not.toHaveBeenCalled();
    });
  });
  describe('Getting derived state from props', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(RadioButtonGroup, {
      valueSelected: "male",
      defaultSelected: "female",
      name: "gender"
    }, /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Male",
      value: "male"
    }), /*#__PURE__*/React.createElement(RadioButton, {
      labelText: "Female",
      value: "female"
    })));
    it('should initialize the current selection from props', function () {
      expect(wrapper.state().selected).toEqual('male');
    });
    it('should change the current selection upon change in props', function () {
      wrapper.setProps({
        valueSelected: 'male'
      });
      wrapper.setState({
        selected: 'male'
      });
      wrapper.setProps({
        valueSelected: undefined
      });
      expect(wrapper.state().selected).toEqual('female');
    });
    it('should avoid change the current selection upon setting props, unless there the value actually changes', function () {
      wrapper.setProps({
        valueSelected: 'female'
      });
      wrapper.setState({
        selected: 'male'
      });
      wrapper.setProps({
        valueSelected: 'female'
      });
      expect(wrapper.state().selected).toEqual('male');
    });
  });
});