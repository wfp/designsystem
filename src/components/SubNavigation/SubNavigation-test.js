import React from 'react';
import {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationLink,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem,
} from './SubNavigation';
import { shallow, mount } from 'enzyme';

describe('SubNavigation', () => {
  describe('renders subnavigation as expected', () => {
    const mainWrapper = shallow(<SubNavigation>content</SubNavigation>);

    it('renders children', () => {
      expect(mainWrapper.props().children).toEqual('content');
    });
  });

  describe('renders subnavigationItem as expected', () => {
    const itemWrapper = shallow(
      <SubNavigationItem className="some-class">contentItem</SubNavigationItem>
    );

    it('has classes as expected ', () => {
      expect(itemWrapper.exists('.wfp--sub-navigation__item')).toEqual(true);
    });

    it('renders children', () => {
      expect(itemWrapper.props().children).toEqual('contentItem');
    });

    it('should allow for custom classes to be applied', () => {
      expect(itemWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders subnavigationHeader as expected', () => {
    const headerWrapper = shallow(
      <SubNavigationHeader className="some-class">
        NavHeader
      </SubNavigationHeader>
    );

    it('has classes as expected ', () => {
      expect(headerWrapper.exists('.wfp--sub-navigation__header')).toEqual(
        true
      );
    });

    it('renders children', () => {
      expect(headerWrapper.props().children).toEqual('NavHeader');
    });

    it('should allow for custom classes to be applied', () => {
      expect(headerWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders subnavigationFilter as expected', () => {
    const filterWrapper = shallow(
      <SubNavigationFilter className="some-class">
        Navfilter
      </SubNavigationFilter>
    );

    it('has classes as expected ', () => {
      expect(filterWrapper.exists('.wfp--sub-navigation__filter')).toEqual(
        true
      );
    });

    it('renders children', () => {
      expect(filterWrapper.props().children).toEqual('Navfilter');
    });

    it('should allow for custom classes to be applied', () => {
      expect(filterWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders SubNavigationList as expected', () => {
    const ListWrapper = shallow(
      <SubNavigationList className="some-class">NavList</SubNavigationList>
    );

    it('has classes as expected ', () => {
      expect(ListWrapper.exists('.wfp--sub-navigation__list')).toEqual(true);
    });

    it('renders children', () => {
      expect(ListWrapper.props().children).toEqual('NavList');
    });

    it('should allow for custom classes to be applied', () => {
      expect(ListWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders SubNavigationContent as expected', () => {
    const contentWrapper = shallow(
      <SubNavigationContent className="some-class">
        NavContent
      </SubNavigationContent>
    );

    it('has classes as expected ', () => {
      expect(contentWrapper.exists('.wfp--sub-navigation__content')).toEqual(
        true
      );
    });

    it('renders children', () => {
      expect(contentWrapper.props().children).toEqual('NavContent');
    });

    it('should allow for custom classes to be applied', () => {
      expect(contentWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders SubNavigationTitle as expected', () => {
    const titleWrapper = shallow(
      <SubNavigationTitle className="some-class">Navtitle</SubNavigationTitle>
    );

    it('has classes as expected ', () => {
      expect(titleWrapper.exists('.wfp--sub-navigation__title')).toEqual(true);
    });

    it('renders children', () => {
      expect(titleWrapper.props().children).toEqual('Navtitle');
    });

    it('should allow for custom classes to be applied', () => {
      expect(titleWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders SubNavigationLink as expected', () => {
    const linkWrapper = shallow(
      <SubNavigationLink className="some-class">NavLink</SubNavigationLink>
    );

    it('has classes as expected ', () => {
      expect(linkWrapper.exists('.wfp--sub-navigation__link')).toEqual(true);
    });

    it('renders children', () => {
      expect(linkWrapper.props().children).toEqual('NavLink');
    });

    it('should allow for custom classes to be applied', () => {
      expect(linkWrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('renders SubNavigationGroup as expected', () => {
    const groupWrapper = mount(
      <SubNavigationGroup
        columns={3}
        className="some-class"
        title="Group title"
      >
        NavGroup
      </SubNavigationGroup>
    );

    it('has classes as expected ', () => {
      expect(groupWrapper.exists('.wfp--sub-navigation__group')).toEqual(true);
    });

    it('should allow for custom classes to be applied', () => {
      expect(groupWrapper.hasClass('some-class')).toEqual(true);
    });

    it('renders children', () => {
      expect(groupWrapper.props().children).toEqual('NavGroup');
    });

    it('renders title prop as expected', () => {
      expect(groupWrapper.props().title).toEqual('Group title');
    });

    it('renders children', () => {
      expect(groupWrapper.props().columns).toEqual(3);
    });

    it('has columns props classes ', () => {
      expect(
        groupWrapper.exists('.wfp--sub-navigation__group--columns')
      ).toEqual(true);
    });
  });
});
