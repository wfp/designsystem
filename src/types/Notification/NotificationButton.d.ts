import * as React from 'react';
import { IIcon, NotificationType } from '../utils';

declare namespace NotificationButton {
  interface NotificationButtonProps
    extends React.HTMLProps<NotificationButton> {
    ariaLabel?: string;
    iconDescription?: string;
    name?: string;
    notificationType?: NotificationType;
    renderIcon?: () => {} | IIcon;
    children?: React.ReactNode;
    type?: string;
  }
}

declare class NotificationButton extends React.Component<NotificationButton.NotificationButtonProps> {}
export = NotificationButton;
