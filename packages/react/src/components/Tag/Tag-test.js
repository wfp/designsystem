import React from 'react';
import Tag from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { shallow } from 'enzyme';

describe('Tag', () => {
  describe('Renders as expected', () => {
    it('should render with the appropriate type', () => {
      const tag = shallow(<Tag type="info" />);
      expect(tag.hasClass('wfp--tag')).toEqual(true);
      expect(tag.hasClass('wfp--tag--info')).toEqual(true);
    });

    it('should provide a default label based on the type', () => {
      const tag = shallow(<Tag type="success" />);
      expect(tag.text()).toEqual('Success');
      tag.setProps({ type: 'custom' });
      expect(tag.text()).toEqual('Custom');
    });
  });

  it('should allow for a custom label', () => {
    const tag = shallow(<Tag type="custom">New Version!</Tag>);
    expect(tag.text()).toEqual('New Version!');
  });

  it('should support extra class names', () => {
    const tag = shallow(<Tag type="info" className="extra-class" />);
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});

describe('TagSkeleton', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<TagSkeleton />);

    it('Has the expected classes', () => {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--tag')).toEqual(true);
    });
  });
});
