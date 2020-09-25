import React from 'react';
import {
  ToastNotification,
  InlineNotification,
  NotificationActionButton,
} from './Notification';

import markdown from './README.mdx';

export default {
  title: 'Components/Notification',
  component: NotificationActionButton,
  subcomponents: { ToastNotification, InlineNotification },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    // mdx: markdown,
  },
};

export const Toast = (args) => (
  <ToastNotification
    {...args}
    caption={'00:00:00 AM'}
    style={{ minWidth: '30rem', marginBottom: '.5rem' }}
  />
);
Toast.args = {
  kind: 'error',
  lowContrast: false,
  role: 'alert',
  title: 'Notification title',
  subtitle: 'Subtitle text goes here.',
  iconDescription: 'describes the close button',
  statusIconDescription: 'describes the status icon',
  hideCloseButton: false,
};

export const ToastLowContrast = (args) => (
  <ToastNotification
    {...args}
    caption={'00:00:00 AM'}
    style={{ minWidth: '30rem', marginBottom: '.5rem' }}
  />
);
ToastLowContrast.args = {
  kind: 'error',
  lowContrast: true,
  role: 'alert',
  title: 'Notification title',
  subtitle: 'Subtitle text goes here.',
  iconDescription: 'describes the close button',
  statusIconDescription: 'describes the status icon',
  hideCloseButton: false,
};

export const Inline = (args) => (
  <InlineNotification
    {...args}
    actions={<NotificationActionButton>{'Action'}</NotificationActionButton>}
  />
);

Inline.args = {
  kind: 'info',
  role: 'alert',
  title: 'Notification title',
  subtitle: 'Subtitle text goes here.',
  iconDescription: 'describes the close button',
  statusIconDescription: 'describes the status icon',
};

export const InlineLowContrast = (args) => (
  <InlineNotification
    {...args}
    actions={<NotificationActionButton>{'Action'}</NotificationActionButton>}
  />
);

InlineLowContrast.args = {
  kind: 'info',
  role: 'alert',
  lowContrast: true,
  title: 'Notification title',
  subtitle: 'Subtitle text goes here.',
  iconDescription: 'describes the close button',
  statusIconDescription: 'describes the status icon',
};
