/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import RegularPage from '../RegularPage';
import Modal from '../../components/Modal';
import Link from '../../components/Link';
import InfoBar from '../../components/InfoBar';

class ModalWithControls extends React.Component {
  state = { open: true };

  isIE() {
    var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11
    //Remove this line in production
    return true;
    return msie > 0 || trident > 0;
  }

  toggleModal = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  submitAndClose = () => {
    this.setState(state => ({
      open: false,
    }));
  };

  render() {
    const { open } = this.state;

    if (this.isIE())
      return (
        <div>
          <InfoBar>
            Your browser version is outdated.{' '}
            <Link href="#">Please upgrade</Link>
          </InfoBar>
          <br />
          <button onClick={this.toggleModal}>
            Manually open warning modal
          </button>
          <Modal
            open={open}
            primaryButtonText="Continue with current browser"
            onRequestSubmit={this.submitAndClose}
            modalHeading="Outdated browser"
            onRequestClose={this.toggleModal}
            danger>
            <p className="wfp--modal-content__text">
              It looks like you are using Internet Explorer 11 or older as your
              favourite browser. We recommend that you switch to a more modern
              browser to ensure that you get the best experience out of this
              application. <Link href="#">Learn more on go.wfp.org.</Link>
            </p>
          </Modal>
        </div>
      );
    return null;
  }
}

storiesOf('Documentation|Templates', module)
  .addParameters({ hideProps: true })
  //.addDecorator(story => <RegularPage>{story()}</RegularPage>)
  .add('Browser Warning', () => <ModalWithControls />);
