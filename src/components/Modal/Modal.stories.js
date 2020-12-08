import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Modal from '.';

export default {
  title: 'Components/Content Related/Modal',
  component: Modal,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <>
    Use the open property in the table below to enable the preview.{' '}
    <Modal {...args}>Text</Modal>
  </>
);
