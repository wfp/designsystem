import React from 'react';
import {
  ToastNotification,
  InlineNotification,
  NotificationActionButton,
} from './Notification';
import { notificationtypes } from '../../prop-types/types';

import markdown from './README.mdx';

export default {
  title: 'Components/UI Elements/Notification',
  component: NotificationActionButton,
  subcomponents: { ToastNotification, InlineNotification },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
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

export const NotificationTypes = (args) => (
  <>
    {notificationtypes.map((e) => (
      <div
        style={{
          display: 'inline-block',
          background: e === 'inverse' ? '#ccc' : '',
          padding: '0.3rem',
        }}>
        <ToastNotification
          {...args}
          kind={e}
          caption={'00:00:00 AM'}
          style={{ minWidth: '30rem', marginBottom: '.5rem' }}
        />
      </div>
    ))}
  </>
);
NotificationTypes.args = {
  kind: 'error',
  lowContrast: false,
  role: 'alert',
  title: 'Notification title',
  subtitle: 'Subtitle text goes here.',
  iconDescription: 'describes the close button',
  statusIconDescription: 'describes the status icon',
  hideCloseButton: false,
};

const hello = `
By specifying the \`notificationTypes\` prop with any of the types below, you can use different styles of the notification.

| type   |  purpose  |
|----------|-------------|
| \`inline\` | Inline notifications show up in task flows, to notify users of the status of an action. They usually appear at the top of the primary content area. |
| \`toast\` | Toasts are non-modal, time-based window elements used to display short messages; they usually appear at the top of the screen and disappear after a few seconds.  |

By changing the \`kind\` prop you can use different styles of the notification.

| kind   |  Description  |
|----------|-------------|
| \`info\` | notification alert to give information |
| \`success\` | notification alert to give success message  |
| \`warning\` | notification alert to give warning message |
| \`error\` | notification alert to give error message |
`;

NotificationTypes.story = {
  name: 'NotificationTypes',
  parameters: {
    markdown: 'hello',
    docs: {
      storyDescription: hello,
    },
  },
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

ToastLowContrast.story = {
  parameters: {
    docs: {
      storyDescription: `Use \`lowContrast\` property to show notification in a low contrast styling`,
    },
  },
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

Inline.story = {
  parameters: {
    docs: {
      storyDescription: `Set \`notificationType\` property to \`inline\` to style notifcation with an inline flow`,
    },
  },
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
