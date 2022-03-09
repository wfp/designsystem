import React from 'react';
import Input from '../Input';
import { shallow, mount } from 'enzyme';

describe('Input', () => {
  describe('Renders as expected', () => {
    const minProps = {
      labelText: 'labelText',
      helperText: 'helperText',
      additional: 'additional',
    };
    const wrapper = mount(
      <Input {...minProps} className="some-class">
        {() => <input placeholder="This can be any type of custom input" />}
      </Input>
    );

    const shallowWrapper = shallow(
      <Input {...minProps}>
        {() => <input placeholder="This can be any type of custom input" />}
      </Input>
    );
    it('should use the appropriate link class', () => {
      expect(wrapper.length).toBe(1);
    });
    it('Renders as an <FormItem> element wrapper', () => {
      expect(shallowWrapper.is('FormItem')).toBe(true);
    });
    it('should expect a helperText prop', () => {
      expect(wrapper.prop('helperText')).toEqual('helperText');
    });

    it('should expect a labelText prop', () => {
      expect(wrapper.prop('labelText')).toEqual('labelText');
    });

    it('should expect a additional prop', () => {
      expect(wrapper.prop('additional')).toEqual('additional');
    });

    it('should expect classes', () => {
      expect(wrapper.hasClass('some-class')).toBe(true);
    });

    describe('inputClassWrapper', () => {
      const inputClassWrapper = () => wrapper.find('div.wfp--input-wrapper');

      it('render as expected', () => {
        expect(inputClassWrapper().length).toBe(1);
      });

      it('has inner div classes as expected', () => {
        expect(inputClassWrapper().hasClass('wfp--input-wrapper')).toBe(true);
      });
    });

    describe('error handling', () => {
      const errorWrapper = shallow(
        <Input invalid className="some-class">
          {() => <input placeholder="This can be any type of custom input" />}
        </Input>
      );

      it('has error div classes as expected', () => {
        expect(errorWrapper.exists('.wfp--form-requirement')).toBe(true);
      });

      it('has error message shows required text', () => {
        expect(errorWrapper.find('span').text()).toEqual('required');
      });

      describe('invalid object message', () => {
        const inValidObjectWrapper = shallow(
          <Input
            invalid={{ message: 'input field required' }}
            className="some-class"
          >
            {() => <input placeholder="This can be any type of custom input" />}
          </Input>
        );

        it('has error message shows passed message', () => {
          expect(inValidObjectWrapper.find('span').text()).toEqual(
            'input field required'
          );
        });
      });

      describe('invalid message as string', () => {
        const inValidStringWrapper = shallow(
          <Input invalid invalidText="invalid input" className="some-class">
            {() => <input placeholder="This can be any type of custom input" />}
          </Input>
        );

        it('has error message shows passed message', () => {
          expect(inValidStringWrapper.find('span').text()).toEqual(
            'invalid input'
          );
        });
      });
    });

    // describe('onChange handling', () => {
    //     const testState = { value: '' }
    //     const onChangeWrapper = shallow(
    //         <Input className="some-class" onChange={(e) => {
    //             testState.value = e.target.value;
    //           }}>
    //         {() => <input placeholder="This can be any type of custom input" />}
    //         </Input>
    //     );

    //     it('enable onChange if input is not disabled or readOnly', () => {
    //         onChangeWrapper.find('input').simulate('change', { target: { value: "50" } });
    //         expect(testState.value).toEqual("50");
    //     })
    // })
  });
});
