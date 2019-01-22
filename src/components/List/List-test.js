import React from 'react';
import { List, ListItem } from '../List';
import { shallow } from 'enzyme';

describe('List', () => {
  describe('Renders as expected', () => {
    const list = shallow(
      <List className="some-class">
        <ListItem>First Item</ListItem>
        <ListItem>Second Item</ListItem>
      </List>
    );

    it('should use the appropriate link class', () => {
      expect(list.hasClass('wfp--list')).toEqual(true);
    });

    it('Renders children as expected', () => {
      expect(list.props().children.length).toEqual(2);
    });

    it('should all for custom classes to be applied', () => {
      expect(list.hasClass('some-class')).toEqual(true);
    });
  });
});
