import React from 'react';
import Link from '../Link';
import { shallow } from 'enzyme';
describe('Credits', function () {
  describe('Renders as expected', function () {
    var link = shallow( /*#__PURE__*/React.createElement(Link, {
      href: "www.google.com",
      className: "some-class"
    }, "A simple link"));
    it('should use the appropriate link class', function () {
      expect(link.hasClass('wfp--link')).toEqual(true);
    });
    it('should inherit the href property', function () {
      expect(link.props().href).toEqual('www.google.com');
    });
    it('should include child content', function () {
      expect(link.text()).toEqual('A simple link');
    });
    it('should all for custom classes to be applied', function () {
      expect(link.hasClass('some-class')).toEqual(true);
    });
  });
});