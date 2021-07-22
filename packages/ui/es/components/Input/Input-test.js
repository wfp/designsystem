function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Input from '../Input';
import { shallow, mount } from 'enzyme';
describe('Input', function () {
  describe('Renders as expected', function () {
    var minProps = {
      labelText: 'labelText',
      helperText: 'helperText',
      additional: 'additional'
    };
    var wrapper = mount( /*#__PURE__*/React.createElement(Input, _extends({}, minProps, {
      className: "some-class"
    }), function () {
      return /*#__PURE__*/React.createElement("input", {
        placeholder: "This can be any type of custom input"
      });
    }));
    var shallowWrapper = shallow( /*#__PURE__*/React.createElement(Input, minProps, function () {
      return /*#__PURE__*/React.createElement("input", {
        placeholder: "This can be any type of custom input"
      });
    }));
    it('should use the appropriate link class', function () {
      expect(wrapper.length).toBe(1);
    });
    it('Renders as an <FormItem> element wrapper', function () {
      expect(shallowWrapper.is('FormItem')).toBe(true);
    });
    it('should expect a helperText prop', function () {
      expect(wrapper.prop('helperText')).toEqual('helperText');
    });
    it('should expect a labelText prop', function () {
      expect(wrapper.prop('labelText')).toEqual('labelText');
    });
    it('should expect a additional prop', function () {
      expect(wrapper.prop('additional')).toEqual('additional');
    });
    it('should expect classes', function () {
      expect(wrapper.hasClass('some-class')).toBe(true);
    });
    describe('inputClassWrapper', function () {
      var inputClassWrapper = function inputClassWrapper() {
        return wrapper.find('div.wfp--input-wrapper');
      };

      it('render as expected', function () {
        expect(inputClassWrapper().length).toBe(1);
      });
      it('has inner div classes as expected', function () {
        expect(inputClassWrapper().hasClass('wfp--input-wrapper')).toBe(true);
      });
    });
    describe('error handling', function () {
      var errorWrapper = shallow( /*#__PURE__*/React.createElement(Input, {
        invalid: true,
        className: "some-class"
      }, function () {
        return /*#__PURE__*/React.createElement("input", {
          placeholder: "This can be any type of custom input"
        });
      }));
      it('has error div classes as expected', function () {
        expect(errorWrapper.exists('.wfp--form-requirement')).toBe(true);
      });
      it('has error message shows required text', function () {
        expect(errorWrapper.find('span').text()).toEqual('required');
      });
      describe('invalid object message', function () {
        var inValidObjectWrapper = shallow( /*#__PURE__*/React.createElement(Input, {
          invalid: {
            message: 'input field required'
          },
          className: "some-class"
        }, function () {
          return /*#__PURE__*/React.createElement("input", {
            placeholder: "This can be any type of custom input"
          });
        }));
        it('has error message shows passed message', function () {
          expect(inValidObjectWrapper.find('span').text()).toEqual('input field required');
        });
      });
      describe('invalid message as string', function () {
        var inValidStringWrapper = shallow( /*#__PURE__*/React.createElement(Input, {
          invalid: true,
          invalidText: "invalid input",
          className: "some-class"
        }, function () {
          return /*#__PURE__*/React.createElement("input", {
            placeholder: "This can be any type of custom input"
          });
        }));
        it('has error message shows passed message', function () {
          expect(inValidStringWrapper.find('span').text()).toEqual('invalid input');
        });
      });
    }); // describe('onChange handling', () => {
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