import React from 'react';
import { Module, ModuleBody } from '../Module';
import { shallow } from 'enzyme';
describe('Module', function () {
  describe('Renders as expected', function () {
    var testModule = shallow( /*#__PURE__*/React.createElement(Module, {
      className: "extra-class"
    }, /*#__PURE__*/React.createElement(ModuleBody, null, "Body")));
    it('renders a Module', function () {
      expect(testModule.length).toEqual(1);
    });
    it('should render the appropriate classes', function () {
      expect(testModule.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(testModule.find(ModuleBody).length).toEqual(1);
    });
  });
  describe('ModuleBody', function () {
    describe('Renders as expected', function () {
      var moduleBody = shallow( /*#__PURE__*/React.createElement(ModuleBody, {
        className: "extra-class",
        centered: true
      }, "Body"));
      it('renders a ModuleBody', function () {
        expect(moduleBody.length).toEqual(1);
      });
      it('has the expected class', function () {
        expect(moduleBody.hasClass('wfp--module__content')).toEqual(true);
        expect(moduleBody.hasClass('extra-class')).toEqual(true);
      });
      it('has the centered class when centered prop is true', function () {
        expect(moduleBody.hasClass('wfp--module__content--centered')).toEqual(true);
      });
      it('should render children as expected', function () {
        expect(moduleBody.text()).toEqual('Body');
      });
    });
  });
});