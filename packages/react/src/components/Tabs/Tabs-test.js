import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';
import { shallow, mount } from 'enzyme';
import { cleanup, render, screen } from '@testing-library/react';

describe('Tabs', () => {
  describe('renders as expected', () => {
    describe('navigation (<nav>)', () => {
      afterEach(cleanup);

      it('renders [role="navigation"] props on <nav> by default', () => {
        render(
          <Tabs className="extra-class" data-testid="tabs">
          <Tab label="firstTab">content1</Tab>
          <Tab label="lastTab">content2</Tab>
        </Tabs>
        )
        expect(screen.getByTestId('tabs')).toHaveAttribute('role','navigation');
      });

      // it('renders [role="tablist"] props on <ul> by default', () => {
      //   render(
      //     <Tabs className="extra-class" data-testid="tabs">
      //     <Tab label="firstTab">content1</Tab>
      //   </Tabs>
      //   )
      //   expect(screen.getByTestId('tabs')).toHaveAttribute('role','tablist');
      // });

      it('renders extra classes on <nav> via className prop', () => {
        render(
          <Tabs className="extra-class" data-testid="tabs">
          <Tab label="firstTab">content1</Tab>
        </Tabs>
        )
        expect(screen.getByTestId('tabs')).toHaveClass('extra-class');
      });

      it('renders expected classes on <nav> by default', () => {
        render(
          <Tabs className="extra-class" data-testid="tabs">
          <Tab label="firstTab">content1</Tab>
        </Tabs>
        )
        expect(screen.getByTestId('tabs')).toHaveClass('wfp--tabs');
      });
    });

    describe('Children (<Tab>)', () => {
      afterEach(cleanup);
      

      it('renders children as expected', () => {
        render(
          <Tabs data-testid="tabs">
            <Tab data-testid="tab-one" label="firstTab">content1</Tab>
            <Tab data-testid="tab-last" label="lastTab">content2</Tab>
          </Tabs>
        );
        expect(screen.getByText('content1')).toBeInTheDocument();
        expect(screen.getByText('content2')).toBeInTheDocument();
      });

      // it('renders index prop', () => {
      //   render(
      //     <Tabs data-testid="tabs">
      //       <Tab data-testid="tab-one" label="firstTab">content1</Tab>
      //       <Tab data-testid="tab-last" label="lastTab">content2</Tab>
      //     </Tabs>
      //   );
      //   expect(screen.getByTestId('tab-one')).toHaveAttribute('index', '0');
      //   expect(screen.getByTestId('tab-last')).toHaveAttribute('index', '1');
      // });

      it('renders selected prop (where firstTab is selected by default)', () => {
        render(
          <Tabs data-testid="tabs">
            <Tab data-testid="tab-one" label="firstTab" selected>content1</Tab>
            <Tab data-testid="tab-last" label="lastTab">content2</Tab>
          </Tabs>
        );
        expect(screen.getByTestId('tab-one')).not.toBeEmptyDOMElement();
        // expect(screen.getByTestId('tab-last')).toHaveAttribute('selected', false);
      });
    });
  });

  /*describe('Children (<TabContent>)', () => {
    const wrapper = shallow(
      <Tabs>
        <Tab label="firstTab">content1</Tab>
        <Tab label="lastTab">content2</Tab>
      </Tabs>
    );

    it('renders expected className', () => {
      const tabContentClass = 'wfp--tab-content';
      expect(
        wrapper
          .find('.wfp--tab-content')
          .first()
          .hasClass(tabContentClass)
      ).toBe(true);
    });

    it('renders content children as expected', () => {
      expect(wrapper.find('.wfp--tab-content').length).toEqual(2);
    });

    it('renders hidden props with boolean value', () => {
      const hiddenProp = wrapper
        .find('.wfp--tab-content')
        .first()
        .props().hidden;
      expect(typeof hiddenProp).toBe('boolean');
    });

    it('renders selected props with boolean value', () => {
      const selectedProp = wrapper
        .find('.wfp--tab-content')
        .first()
        .props().hidden;
      expect(typeof selectedProp).toBe('boolean');
    });
  });*/

  /*describe('events', () => {

    describe('keydown', () => {
      const wrapper = mount(
        <Tabs selected={0}>
          <Tab label="firstTab" className="firstTab">
            content
          </Tab>
          <Tab label="lastTab" className="lastTab">
            content
          </Tab>
        </Tabs>
      );

      const firstTab = wrapper.find('.firstTab').last();
      const lastTab = wrapper.find('.lastTab').last();
      const leftKey = 37;
      const rightKey = 39;
      const spaceKey = 32;
      const enterKey = 13;

      describe('state: selected', () => {
        it('updates selected state when pressing arrow keys', () => {
          firstTab.simulate('keydown', { which: rightKey });
          expect(wrapper.state().selected).toEqual(1);
          lastTab.simulate('keydown', { which: leftKey });
          expect(wrapper.state().selected).toEqual(0);
        });

        it('loops focus and selected state from lastTab to firstTab', () => {
          lastTab.simulate('keydown', { which: rightKey });
          expect(wrapper.state().selected).toEqual(0);
        });

        it('loops focus and selected state from firstTab to lastTab', () => {
          firstTab.simulate('keydown', { which: leftKey });
          expect(wrapper.state().selected).toEqual(1);
        });

        it('updates selected state when pressing space or enter key', () => {
          firstTab.simulate('keydown', { which: spaceKey });
          expect(wrapper.state().selected).toEqual(0);
          lastTab.simulate('keydown', { which: enterKey });
          expect(wrapper.state().selected).toEqual(1);
        });
      });
    });
  });*/

  /*describe('default state', () => {
    const wrapper = mount(
      <Tabs>
        <Tab label="firstTab" className="firstTab">
          content
        </Tab>
        <Tab label="lastTab" className="lastTab">
          content
        </Tab>
      </Tabs>
    );

    describe('selected', () => {
      it('should be 0', () => {
        expect(wrapper.state().selected).toEqual(0);
      });
    });
  });*/

  /*describe('Allow initial state to draw from props', () => {
    const wrapper = mount(
      <Tabs selected={1}>
        <Tab label="firstTab" className="firstTab">
          content
        </Tab>
        <Tab label="lastTab" className="lastTab">
          content
        </Tab>
      </Tabs>
    );

    const children = wrapper.find(Tab);

    it('Should apply the selected property on the selected tab', () => {
      expect(children.first().props().selected).toEqual(false);
      expect(children.last().props().selected).toEqual(true);
    });
  });*/
});

// describe('props update', () => {
//   const wrapper = mount(
//     <Tabs selected={0}>
//       <Tab label="firstTab" className="firstTab">
//         content
//       </Tab>
//       <Tab label="lastTab" className="lastTab">
//         content
//       </Tab>
//     </Tabs>
//   );

//   it('updates selected state when selected prop changes', () => {
//     wrapper.setProps({ selected: 1 });
//     expect(wrapper.state().selected).toEqual(1);
//     wrapper.setProps({ selected: 0 });
//     expect(wrapper.state().selected).toEqual(0);
//   });

//   it('avoids updating state upon setting props, unless there the value actually changes', () => {
//     wrapper.setProps({ selected: 1 });
//     wrapper.setState({ selected: 2 });
//     wrapper.setProps({ selected: 1 });
//     expect(wrapper.state().selected).toEqual(2);
//   });
// });

// describe('selection change', () => {
//   const wrapper = mount(
//     <Tabs selected={0} onSelectionChange={jest.fn()}>
//       <Tab label="firstTab">content</Tab>
//       <Tab label="lastTab" className="secondTab">
//         content
//       </Tab>
//     </Tabs>
//   );

//   it('updates selected state when selected prop changes', () => {
//     wrapper
//       .find('.secondTab')
//       .last()
//       .simulate('click');
//     expect(wrapper.props().onSelectionChange).toHaveBeenCalledWith(1);
//   });
// });

// describe('TabsSkeleton', () => {
//   describe('Renders as expected', () => {
//     const wrapper = shallow(<TabsSkeleton />);

//     it('Has the expected classes', () => {
//       expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
//       expect(wrapper.hasClass('wfp--tabs')).toEqual(true);
//     });
//   });
// });
