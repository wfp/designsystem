import React from 'react';
import { mount } from 'enzyme';

import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormJest';
import ReduxFormWrapper from '../ReduxFormWrapper';

import TextArea from '../TextArea';

describe('FormInput', () => {
  describe('should render as expected', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FormWrapper>
          <Field
            component={ReduxFormWrapper}
            InputComponent={TextArea}
            labelText="Email Input"
          />
        </FormWrapper>
      </Provider>
    );

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

    describe('label', () => {
      //wrapper.find(Field).setProps({ labelText: 'Email Input' });
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
  });
});
