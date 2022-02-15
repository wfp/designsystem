import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Tab from '../Tab';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tab', () => {
  let mockProps = {};

  beforeEach(() => {
    mockProps = {
      id: 'tab',
      "data-testid": 'tab',
      label:"firstTab",
      role: 'presentation',
      tabIndex: 0,
      selected: false,
    };
  });

  describe('renders as expected', () => {
    afterEach(cleanup);
    it('render label as expected', () => {
      render(<Tab {...mockProps} />);
      expect(screen.getByText('firstTab')).toBeInTheDocument();
    });

    it('renders tab component with expected className', () => {
      render(<Tab {...mockProps} />);
      expect(screen.getByTestId('tab')).toHaveClass('wfp--tabs__nav-item');
    });

    it('renders <a> with expected className', () => {
      render(<Tab {...mockProps} />);
      expect(screen.getByText('firstTab')).toHaveClass('wfp--tabs__nav-link');
    });

    it('renders correct className when prop disabled is applied', () => {
      render(<Tab disabled {...mockProps} />);
      expect(screen.getByTestId('tab')).toHaveClass('wfp--tabs__nav-item--disabled');
    });


    it('renders <li> with [role="presentation"]', () => {
      render(<Tab {...mockProps}>content</Tab>);
      expect(screen.getByTestId('tab')).toHaveAttribute('role','presentation');
    });

    it('renders <a> with [role="tab"]', () => {
      render(<Tab {...mockProps} href="#">content</Tab>);
      expect(screen.getByTestId('tab')).toHaveAttribute('role','presentation');
    });


    it('sets href as # by default', () => {
      render(<Tab {...mockProps} href="#" />);
      expect(screen.getByText('firstTab')).toHaveAttribute('href','#');
    });

    it('sets new href value when passed in via props', () => {
      render(<Tab {...mockProps} href="#other-content"/>);
      expect(screen.getByText('firstTab')).toHaveAttribute('href','#other-content');
    });

    it('should not have [className="wfp--tabs__nav-item--selected"] by default', () => {
      render(<Tab {...mockProps} />);
      expect(screen.getByTestId('tab')).not.toHaveClass('wfp--tabs__nav-item--selected');
    });

    it('adds [className="wfp--tabs__nav-item--selected"] when selected prop is true', () => {
      render(<Tab {...mockProps} selected/>);
      expect(screen.getByTestId('tab')).toHaveClass('wfp--tabs__nav-item--selected');
    });
  });

  describe('events', () => {
    describe('click', () => {
      // afterEach(cleanup);
      // it('invokes handleTabClick from onClick prop and pass correct className', () => {
      //   render(<Tab {...mockProps} href="#" handleTabClick={() => true} />);
      //   userEvent.click(screen.getByTestId('tab'));
      //   expect(screen.getByText('firstTab')).toHaveAttribute('aria-selected', "true");
      // });

      // it('invokes onClick when a function is passed to onClick prop', () => {
      //   wrapper.setProps({ onClick });
      //   wrapper.find('li').simulate('click');
      //   expect(onClick).toBeCalled();
      // });
    });

  });
});
