import React from 'react';
import markdown from './README.mdx';
import Text from '../../components/Text';
import { textLookup } from '../../components/Text';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Link from '../../components/Link';

export default {
  title: 'Templates/Login',

  parameters: {
    componentSubtitle: 'Example',
    status: 'legacy',
    mdx: markdown,
    introText:
      'Login page for legacy applications not using WFPs single sign-on',
  },
};

export const Regular = (args) => (
  <Modal
    open
    hideClose
    modalHeading="Login"
    inPortal={false}
    modalLabel="Sample Application"
    primaryButtonText="Login"
    secondaryButtonText="Forgot password?"
    modalSecondaryAction={
      <Button kind="secondary">Sign in with WFP SSO</Button>
    }
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
);

Regular.decorators = [
  (Story) => (
    <div
      style={{
        position: 'relative',
        height: '700px',
      }}>
      <Story />
    </div>
  ),
];

Regular.args = {};
