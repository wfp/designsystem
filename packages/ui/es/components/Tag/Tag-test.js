import React from 'react';
import Tag from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { shallow } from 'enzyme';
describe('Tag', function () {
  describe('Renders as expected', function () {
    it('should render with the appropriate type', function () {
      var tag = shallow( /*#__PURE__*/React.createElement(Tag, {
        type: "info"
      }));
      expect(tag.hasClass('wfp--tag')).toEqual(true);
      expect(tag.hasClass('wfp--tag--info')).toEqual(true);
    });
    it('should provide a default label based on the type', function () {
      var tag = shallow( /*#__PURE__*/React.createElement(Tag, {
        type: "success"
      }));
      expect(tag.text()).toEqual('Success');
      tag.setProps({
        type: 'custom'
      });
      expect(tag.text()).toEqual('Custom');
    });
  });
  it('should allow for a custom label', function () {
    var tag = shallow( /*#__PURE__*/React.createElement(Tag, {
      type: "custom"
    }, "New Version!"));
    expect(tag.text()).toEqual('New Version!');
  });
  it('should support extra class names', function () {
    var tag = shallow( /*#__PURE__*/React.createElement(Tag, {
      type: "info",
      className: "extra-class"
    }));
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
describe('TagSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(TagSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--tag')).toEqual(true);
    });
  });
});