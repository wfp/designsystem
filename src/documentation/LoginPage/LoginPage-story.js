/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import RegularPage from '../RegularPage';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Link from '../../components/Link';

storiesOf('Getting started|Templates', module)
  .addParameters({ hideProps: true })
  //.addDecorator(story => <RegularPage>{story()}</RegularPage>)
  .add('Login Page', () => (
    <Modal
      open
      hideClose
      modalHeading="Login"
      modalLabel="Sample Application"
      primaryButtonText="Login"
      secondaryButtonText="Forgot password?"
      modalFooter={({ primaryButtonText, secondaryButtonText }) => (
        <div className="wfp--modal__buttons-container">
          <Link>{secondaryButtonText}</Link>
          <Button>{primaryButtonText}</Button>
        </div>
      )}
      backgroundImage="https://password.go.wfp.org/images/MAU_20150202_WFP-Agron_Dragaj_0018.jpg">
      <p className="wfp--modal-content__text wfp--form-long">
        <TextInput
          id="emailinput"
          labelText="Your email adress"
          placeholder="yourname@wfp.org"
          helperText={`Enter the email adress you've used when you've registred`}
        />
        <TextInput
          id="passportinput"
          labelText="Your password"
          type="password"
          placeholder=""
          helperText=""
        />
      </p>
    </Modal>
  ));
