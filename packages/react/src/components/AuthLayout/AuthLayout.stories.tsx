import React from 'react';
import markdown from './README.mdx';
import { AuthLayout, BackgroundContent } from './AuthLayout';
import Button from './../Button';
import TextInput from './../TextInput';
import Text from './../Text';
import Link from './../Link';
import FormGroup from './../FormGroup';
// import Icon from './../Icon';
import { ArrowLeft, WfpLogoStandardBlackEn } from '@un/icons-react';

export default {
  title: 'Components/Content Related/AuthLayout',
  component: AuthLayout,
  subcomponents: { BackgroundContent },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => {
  return (
    <AuthLayout
      {...args}
      backgroundContent={
        <BackgroundContent
          style={{
            background: '#007DBC',
            color: '#fff',
            padding: '3rem',
          }}>
          Image can be placed here or just give a background with content like
          this
        </BackgroundContent>
      }>
      <div>Forms will be here</div>
    </AuthLayout>
  );
};

// TODO
export const RegularNoImage = (args) => (
  <AuthLayout {...args}>
    <FormGroup style={{ width: '80%' }}>
      <Button
        icon={ArrowLeft}
        iconReverse
        kind="secondary"
        style={{ marginBottom: '3rem' }}>
        Back to lorem
      </Button>
      <TextInput
        labelText="The labelText"
        name="inputname"
        placeholder="placeholder"
      />
      <TextInput
        labelText="The labelText"
        name="inputname"
        placeholder="placeholder"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Link href="https://www.wfp.org">Another link</Link>
        <Button kind="primary" style={{ marginLeft: '2rem' }}>
          Register
        </Button>
      </div>
    </FormGroup>
  </AuthLayout>
);

RegularNoImage.args = {
  backgroundContent: (
    <BackgroundContent
      style={{
        background: 'linear-gradient(0.13deg, #357DB6 0.17%, #5DB2C2 99.95%)',
        color: '#fff',
        padding: '3rem',
      }}>
      <WfpLogoStandardBlackEn
        description="WFP"
        fill="#fff"
        style={{ marginBottom: '4rem' }}
      />
      <Text kind="h1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,diam nonumy
        eirmod.
      </Text>

      <p style={{ marginTop: '2rem' }}>- Author</p>
    </BackgroundContent>
  ),
};

export const WithImage = (args) => (
  <AuthLayout {...args}>
    <FormGroup style={{ width: '80%' }}>
      <Button
        icon={ArrowLeft}
        iconReverse
        kind="secondary"
        style={{ marginBottom: '3rem' }}>
        Back to lorem
      </Button>
      <TextInput
        labelText="The labelText"
        name="inputname"
        placeholder="placeholder"
      />
      <TextInput
        labelText="The labelText"
        name="inputname"
        placeholder="placeholder"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Link href="https://www.wfp.org">Another link</Link>
        <Button kind="primary" style={{ marginLeft: '2rem' }}>
          Register
        </Button>
      </div>
    </FormGroup>
  </AuthLayout>
);

WithImage.args = {
  image: 'http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg',
};
