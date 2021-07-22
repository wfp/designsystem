import React from 'react';
import StepNavigation from '../StepNavigation';
import StepNavigationItem from '../StepNavigationItem';
import { shallow } from 'enzyme';
describe('Tabs', function () {
  describe('renders as expected', function () {
    describe('navigation (<nav>)', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(StepNavigation, {
        className: "extra-class"
      }, /*#__PURE__*/React.createElement(StepNavigationItem, {
        label: "Item without Status",
        page: 0
      }), /*#__PURE__*/React.createElement(StepNavigationItem, {
        label: "Item without Status",
        page: 1
      })));
      it('renders extra classes on <div> via className prop', function () {
        expect(wrapper.find('nav').hasClass('extra-class')).toBe(true);
      });
    });
  });
});