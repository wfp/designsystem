import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

import { ToastContainer, toast } from 'react-toastify';
import notificationStyle from './Notification';
import Icon from '../Icon';
import { iconCheckmarkGlyph } from '@wfp/icons';

import Button from '../Button';

const displayTypes = {
  'default (default)': 'default',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning',
  'error (error)': 'error',
};

const props = {
  regular: () => ({
    hideProgressBar: boolean('hideProgressBar (hideProgressBar)', true),
    autoClose: number('Auto close (autoClose)', 229000),
    type: select('Display Type (type)', displayTypes, undefined),
  }),
};

storiesOf('Components|Notification', module)
  .addDecorator(withKnobs)
  .add('Default (experimental)', () => {
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
      <div>
        <Button onClick={notify}>Regular notification</Button>{' '}
        <Button kind="secondary" onClick={notifyAll}>
          All Notifications
        </Button>
        <ToastContainer {...notificationStyle} {...props.regular()} />
      </div>
    );
  });
