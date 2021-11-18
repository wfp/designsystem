import * as React from 'react';
import { NotificationKind, NotificationType } from '../utils';

declare namespace NotificationIcon  {
  interface NotificationIconProps extends React.HTMLProps<NotificationIcon> {
    iconDescription: string
    kind: NotificationKind
    notificationType?: NotificationType
    subtitle?: React.ReactNode
  }
}

declare class NotificationIcon extends React.Component<NotificationIcon.NotificationIconProps>{ }
export = NotificationIcon