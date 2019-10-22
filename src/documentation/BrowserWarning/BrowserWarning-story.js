/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import RegularPage from '../RegularPage';

import Modal from '../../components/Modal';

class ModalWithControls extends React.Component {
  state = { open: true };

  toggleModal = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  submitAndClose = () => {
    alert('Submit now and close the modal');
    this.setState(state => ({
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
          primaryButtonText="Continue with current browser"
          onRequestSubmit={this.submitAndClose}
          modalHeading="Outdated browser"
          onRequestClose={this.toggleModal}
          danger>
          <p className="wfp--modal-content__text">
            It looks like you are using Internet Explorer 11 as your favourite
            browser. We recommend that you switch to a more modern browser to
            ensure that you get the best experience out of this application.
          </p>
        </Modal>
      </div>
    );
  }
}

storiesOf('Documentation|Templates', module)
  .addParameters({ hideProps: true })
  .addDecorator(story => <RegularPage>{story()}</RegularPage>)
  .add('Browser Warning', () => <ModalWithControls />);
