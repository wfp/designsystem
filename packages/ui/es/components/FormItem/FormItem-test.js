import React from 'react';
import { shallow } from 'enzyme';
import FormItem from '../FormItem';
describe('FormItem', function () {
  it('should render', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(FormItem, null));
    expect(wrapper).toMatchSnapshot();
  });
});