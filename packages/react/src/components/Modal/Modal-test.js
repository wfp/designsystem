import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Modal from './Modal';
import ModalWrapper from '../ModalWrapper';
import { shallow, mount } from 'enzyme';
// import { render } from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';

describe('Modal', () => {
  let mockProps = {};

  beforeEach(() => {
    mockProps = {
      id: 'modal',
      "data-testid": 'modal',
      modalHeading: 'Transactional Modal',
      modalLabel: 'Test Modal Label',
    };
  });
  describe('Renders as expected', () => {
    afterEach(cleanup);

    it('renders text as expected', () => {
      render(<Modal {...mockProps}>Modal content</Modal>)
      expect(screen.getByText('Transactional Modal')).toBeInTheDocument();
      expect(screen.getByText('Test Modal Label')).toBeInTheDocument();
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });
  });

  describe('Renders as expected', () => {
    const wrapper = shallow(
      <Modal
        className="extra-class"
        secondaryButtonText="Secondary"
        inPortal={false}
      />
    );
    const mounted = mount(
      <Modal
        className="extra-class"
        secondaryButtonText="Secondary"
        inPortal={false}
      />
    );

    it('should be a passive modal when passiveModal is passed', () => {
      wrapper.setProps({ passiveModal: true });
      expect(wrapper.hasClass('wfp--modal--tall')).toEqual(false);
    });

    it('should set id if one is passed via props', () => {
      const modal = shallow(<Modal id="modal-1" inPortal={false} />);
      expect(modal.props().id).toEqual('modal-1');
    });

    it('has the expected default iconDescription', () => {
      expect(wrapper.props().iconDescription).toEqual('close the modal');
    });

    it('adds new iconDescription when passed via props', () => {
      mounted.setProps({ iconDescription: 'new description' });
      expect(mounted.props().iconDescription).toEqual('new description');
    });

    it('enables primary button by default', () => {
      const primaryButton = mounted
        .find('.wfp--modal__buttons-container .wfp--btn')
        .at(0);
      expect(primaryButton.prop('disabled')).toEqual(false);
    });

    it('disables primary button when diablePrimaryButton prop is passed', () => {
      mounted.setProps({ primaryButtonDisabled: true });
      const primaryButton = mounted
        .find('.wfp--modal__buttons-container .wfp--btn')
        .at(1);
      expect(primaryButton.props().disabled).toEqual(true);
    });
  });

  describe('Adds props as expected to the right children', () => {
    afterEach(cleanup);

    it('should set label if one is passed via props', () => {
      render(<Modal modalLabel="modal-1" />);
      expect(screen.getByText('modal-1')).toBeInTheDocument();
      expect(screen.getByText('modal-1')).toHaveClass('wfp--modal-header__label');
    });

    it('should set modal heading if one is passed via props', () => {
      render(<Modal modalHeading="modal-head" />);
      expect(screen.getByText('modal-head')).toBeInTheDocument();
      expect(screen.getByText('modal-head')).toHaveClass('wfp--modal-header__heading');
    });

    it('should set button text if one is passed via props', () => {
      render(
        <Modal primaryButtonText="Submit" />
      );
      expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

  describe('events', () => {
    it('should not set visible class when state is closed', () => {
      render(
        <Modal {...mockProps} open={false}>
          <p className="wfp--modal-content__text">Text</p>
        </Modal>
      );
      expect(screen.getByTestId('modal')).not.toHaveClass('is-visible');
    });

    it('should set expected class when state is open', () => {
      render(
        <Modal {...mockProps} open={true}>
          <p className="wfp--modal-content__text">Text</p>
        </Modal>
      );
      expect(screen.getByTestId('modal')).toHaveClass('is-visible');
    });



    it('should handle close keyDown events', () => {
      const onRequestClose = jest.fn();
      const wrapper = mount(<Modal onRequestClose={onRequestClose} />);
      wrapper.simulate('keyDown', { which: 26 });
      expect(onRequestClose).not.toBeCalled();
      wrapper.simulate('keyDown', { which: 27 });
      expect(onRequestClose).toBeCalled();
    });

    it('should handle submit keyDown events with shouldSubmitOnEnter enabled', () => {
      const onRequestSubmit = jest.fn();
      const wrapper = mount(
        <Modal onRequestSubmit={onRequestSubmit} shouldSubmitOnEnter />
      );
      wrapper.simulate('keyDown', { which: 14 });
      expect(onRequestSubmit).not.toBeCalled();
      wrapper.simulate('keyDown', { which: 13 });
      expect(onRequestSubmit).toBeCalled();
    });

    it('should not handle submit keyDown events with shouldSubmitOnEnter not enabled', () => {
      const onRequestSubmit = jest.fn();
      const wrapper = mount(<Modal onRequestSubmit={onRequestSubmit} />);
      wrapper.simulate('keyDown', { which: 14 });
      expect(onRequestSubmit).not.toBeCalled();
      wrapper.simulate('keyDown', { which: 13 });
      expect(onRequestSubmit).not.toBeCalled();
    });

    it('should close by default on secondary button click', () => {
      const onRequestClose = jest.fn();
      const modal = mount(
        <Modal
          secondaryButtonText="Secondary"
          onRequestClose={onRequestClose}
        />
      );
      const secondaryBtn = modal.find('.wfp--btn--secondary');
      secondaryBtn.simulate('click');
      expect(onRequestClose).toBeCalled();
    });

    it('should handle custom secondary button events', () => {
      const onSecondarySubmit = jest.fn();
      const modal = mount(
        <Modal
          secondaryButtonText="Secondary"
          onSecondarySubmit={onSecondarySubmit}
        />
      );
      const secondaryBtn = modal.find('.wfp--btn--secondary');
      secondaryBtn.simulate('click');
      expect(onSecondarySubmit).toBeCalled();
    });
  });
});
describe('Modal Wrapper', () => {
  describe('Renders as expected', () => {
    const wrapper = mount(<ModalWrapper />);

    it('should default to primary button', () => {
      expect(wrapper.find('.wfp--btn--primary').length).toEqual(2);
    });

    it('should render ghost button when ghost is passed', () => {
      wrapper.setProps({ triggerButtonKind: 'ghost' });
      expect(wrapper.find('.wfp--btn--ghost').length).toEqual(1);
    });

    it('should render danger button when danger is passed', () => {
      wrapper.setProps({ triggerButtonKind: 'danger' });
      expect(wrapper.find('.wfp--btn--danger').length).toEqual(1);
    });

    it('should render secondary button when secondary is passed', () => {
      wrapper.setProps({ triggerButtonKind: 'secondary' });
      expect(wrapper.find('.wfp--btn--secondary').length).toEqual(2);
    });
  });
});

