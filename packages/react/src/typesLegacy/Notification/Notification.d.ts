import * as React from 'react';
import { IIcon } from '../utils';

declare namespace Notification  {
  interface NotificationProps extends React.HTMLProps<Notification> {
    ariaLabel?: string
    iconDescription?: string
    notificationType?: 'toast' | 'inline'
    renderIcon?: () => {} | IIcon
    children?: React.ReactNode
  }
}

declare class Notification extends React.Component<Notification.NotificationProps>{ }
export = Notification
