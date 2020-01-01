import React from 'react';
import ReadMore from '../ReadMore';
import { shallow } from 'enzyme';

describe('Link', () => {
  describe('Renders as expected', () => {
    const readMore = shallow(
      <ReadMore className="some-class">Content</ReadMore>
    );
    it('should use the appropriate link class', () => {
      expect(readMore.hasClass('wfp--read-more')).toEqual(true);
    });
    it('should all for custom classes to be applied', () => {
      expect(readMore.hasClass('some-class')).toEqual(true);
    });
  });
});
