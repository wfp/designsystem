import React from 'react';
import FormGroup from '../FormGroup';
import { shallow } from 'enzyme';
describe('FormGroup', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(FormGroup, {
      className: "extra-class",
      legendText: "legendtest"
    }));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(0);
    });
    it('renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('wfp--fieldset')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should not render the data-invalid property by default', function () {
      expect(wrapper.props()['data-invalid']).toBe(undefined);
    });
    it('should render the data-invalid attribute when invalid is set', function () {
      var formgroup = shallow( /*#__PURE__*/React.createElement(FormGroup, {
        legendText: "legendtest",
        invalid: true
      }));
      expect(formgroup.props()['data-invalid']).toBe('');
    });
    it('should render wrapper as expected', function () {
      var formGroup = shallow( /*#__PURE__*/React.createElement(FormGroup, {
        legendText: "legendtest"
      }, /*#__PURE__*/React.createElement("div", {
        className: "test-child1"
      }), /*#__PURE__*/React.createElement("div", {
        className: "test-child2"
      })));
      expect(formGroup.length).toEqual(1);
    });
    it('should render children as expected', function () {
      var formGroup1 = shallow( /*#__PURE__*/React.createElement(FormGroup, {
        legendText: "legendtest"
      }, /*#__PURE__*/React.createElement("div", {
        className: "test-child"
      }), /*#__PURE__*/React.createElement("div", {
        className: "test-child"
      })));
      expect(formGroup1.find('.test-child').length).toBe(2);
    });
  });
});