import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import notificationStyle from './Notification';
import Icon from '../Icon';
import { iconCheckmarkGlyph } from '@wfp/icons';

import Button from '../Button';

export default {
  title: 'Components/UI Elements/Notification (legacy)',
  component: ToastContainer,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    // mdx: markdown,
  },
};

export const Regular = (args) => {
  const notify = () => {
    toast('A regular message');
  };

  const notifyAll = () => {
    toast.success(
      <span>
        <Icon icon={iconCheckmarkGlyph} /> Wow so easy!
      </span>
    );
    toast.success('Wow so easy!');
    toast.warn('Please check again!');
    toast.error('Something went terribly wrong!');
  };
  return (
    <>
      <Button onClick={notify}>Regular notification</Button>{' '}
      <Button kind="secondary" onClick={notifyAll}>
        All Notifications
      </Button>
      <ToastContainer {...notificationStyle} {...args} />
    </>
  );
};

const notificationsourcecode=`
import { ToastContainer, toast } from 'react-toastify';
import notificationStyle from '@wfp/ui';
import {Icon, Button} from '@wfp/ui';
import { iconCheckmarkGlyph } from '@wfp/icons';

const Notification = (args) => {
  const notify = () => {
    toast('A regular message');
  };

  const notifyAll = () => {
    toast.success(
      <span>
        <Icon icon={iconCheckmarkGlyph} /> Wow so easy!
      </span>
    );
    toast.success('Wow so easy!');
    toast.warn('Please check again!');
    toast.error('Something went terribly wrong!');
  };
  return (
    <>
      <Button onClick={notify}>Regular notification</Button>{' '}
      <Button kind="secondary" onClick={notifyAll}>
        All Notifications
      </Button>
      <ToastContainer {...notificationStyle} {...args} />
    </>
  );
};

export default Notification;
`

Regular.story={
  parameters:{
    docs:{
      source:{
        code:notificationsourcecode
      }
    }
  }
}
