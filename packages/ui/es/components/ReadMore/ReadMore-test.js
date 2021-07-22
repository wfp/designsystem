import React from 'react';
import ReadMore from '../ReadMore';
import { shallow } from 'enzyme';
describe('ReadMore', function () {
  describe('Renders as expected', function () {
    var readMore = shallow( /*#__PURE__*/React.createElement(ReadMore, {
      className: "some-class"
    }, "Content"));
    it('should use the appropriate link class', function () {
      expect(readMore.hasClass('wfp--read-more')).toEqual(true);
    });
    it('should all for custom classes to be applied', function () {
      expect(readMore.hasClass('some-class')).toEqual(true);
    });
  });
});