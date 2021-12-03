import React from 'react';
import { List, ListItem } from '../List';
import { mount } from 'enzyme';

describe('List', () => {
  describe('Renders as expected', () => {
    const list = mount(
      <List className="some-class">
        <ListItem>First Item</ListItem>
        <ListItem>Second Item</ListItem>
      </List>
    );

    it('should use the appropriate link class', () => {
      const listClass = list.find('.wfp--list');
      expect(listClass.hasClass('wfp--list')).toEqual(true);
    });

    it('Renders children as expected', () => {
      expect(list.props().children.length).toEqual(2);
    });

    it('should all for custom classes to be applied', () => {
      expect(list.hasClass('some-class')).toEqual(true);
    });
  });
});
