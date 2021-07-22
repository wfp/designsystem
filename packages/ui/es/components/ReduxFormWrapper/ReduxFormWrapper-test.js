import React from 'react';
import { mount } from 'enzyme';
import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormJest';
import ReduxFormWrapper from '../ReduxFormWrapper';
import TextArea from '../TextArea';
describe('FormInput', function () {
  describe('should render as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(FormWrapper, null, /*#__PURE__*/React.createElement(Field, {
      name: "email",
      component: ReduxFormWrapper,
      inputComponent: TextArea,
      labelText: "Email Input"
    }))));
    /* const textarea = () => wrapper.find('textarea');
     describe('label', () => {
      it('renders a textarea', () => {
        expect(textarea().length).toEqual(1);
      });
       it('has the expected classes', () => {
        expect(textarea().hasClass('wfp--text-area')).toEqual(true);
      });
       it('applies extra classes specified via className', () => {
        expect(textarea().hasClass('extra-class')).toEqual(true);
      });
    });*/

    describe('label', function () {
      //wrapper.find(Field).setProps({ labelText: 'Email Input' });
      var renderedLabel = wrapper.find('label');
      it('renders a label', function () {
        expect(renderedLabel.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(renderedLabel.hasClass('wfp--label')).toEqual(true);
      });
      it('should set label as expected', function () {
        expect(renderedLabel.text()).toEqual('Email Input');
      });
    });
  });
});