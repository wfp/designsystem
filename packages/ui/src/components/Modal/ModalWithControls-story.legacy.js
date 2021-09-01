import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '.';

class ModalWithControls extends React.Component {
  state = { open: false };

  toggleModal = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  submitAndClose = () => {
    alert('Submit now and close the modal');
    this.setState((state) => ({
      open: false,
    }));
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>Open Modal</button>
        <Modal
          open={open}
          primaryButtonText="Submit"
          onRequestSubmit={this.submitAndClose}
          secondaryButtonText="Cancel Modal"
          onSecondarySubmit={this.toggleModal}
          onRequestClose={this.toggleModal}>
          <p className="wfp--modal-content__text">Nothing to see here</p>
        </Modal>
      </div>
    );
  }
}

storiesOf('Components|Modal', module).add('with Controls', () => (
  <ModalWithControls />
));
