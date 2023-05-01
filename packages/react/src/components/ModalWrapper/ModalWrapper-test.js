import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ModalWrapper from '../ModalWrapper';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';



describe('ModalWrapper', () => {
  let mockProps = {};

  beforeEach(() => {
    mockProps = {
      id: 'modal',
      "data-testid": 'modal',
      buttonTriggerText: 'Open Modal',
      buttonTriggerClassName: 'btn-trigger',
      modalHeading: 'Transactional Modal',
      modalLabel: 'Test Modal Label',
      primaryButtonText: 'Save',
      secondaryButtonText: 'Cancel',
      handleSubmit: jest.fn(() => true),
      shouldCloseAfterSubmit: true,
    };
  });

  // it('should render', () => {
  //   const wrapper = mount(
  //     <ModalWrapper {...mockProps}>
  //       <p className="wfp--modal-content__text">Text</p>
  //     </ModalWrapper>
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });
  afterEach(cleanup);
  it('should render modal button', () => {
    
      render(<ModalWrapper {...mockProps}>
        <p className="wfp--modal-content__text">Modal content</p>
      </ModalWrapper>);

      expect(screen.getByText('Open Modal')).toBeInTheDocument();

      expect(screen.getByTestId('modal')).not.toHaveClass('is-visible');
  })

  it('should open modal on button click', () => {
    render(<ModalWrapper {...mockProps}>
      <p className="wfp--modal-content__text">Modal content</p>
    </ModalWrapper>);

    userEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByTestId('modal')).toHaveClass('is-visible');
    
  })


  it('should close after a cancel button click', () => {
    render(
      <ModalWrapper {...mockProps}>
        <p className="wfp--modal-content__text">Text</p>
      </ModalWrapper>
    );
    userEvent.click(screen.getByText('Open Modal'));
    userEvent.click(screen.getByText('Cancel'));
    expect(screen.getByTestId('modal')).not.toHaveClass('is-visible');
    
  });

  it('should close after a save button click with action', () => {
    render(
      <ModalWrapper {...mockProps}>
        <p className="wfp--modal-content__text">Text</p>
      </ModalWrapper>
    );
    userEvent.click(screen.getByText('Open Modal'));
    userEvent.click(screen.getByText('Save'));
    expect(screen.getByTestId('modal')).not.toHaveClass('is-visible');
    
  });

  it('should not close after a save button click with no action', () => {
    render(
      <ModalWrapper {...mockProps} handleSubmit={() => false}>
        <p className="wfp--modal-content__text">Text</p>
      </ModalWrapper>
    );
    userEvent.click(screen.getByText('Open Modal'));
    userEvent.click(screen.getByText('Save'));
    expect(screen.getByTestId('modal')).toHaveClass('is-visible');
    
  });

  

  // it('should return focus to the trigger button after closing', () => {
  //   render(
  //     <ModalWrapper {...mockProps}>
  //       <p className="wfp--modal-content__text">Text</p>
  //     </ModalWrapper>
  //   );
  //   userEvent.click(screen.getByText('Open Modal'));
  //   userEvent.click(screen.getByText('Cancel'));
  //   expect(screen.getByTestId('modal')).not.toHaveClass('is-visible');
  //   expect(screen.getByText('Open Modal')).toHaveFocus();
  // });

});
