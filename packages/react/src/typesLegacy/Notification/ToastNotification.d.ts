import * as React from 'react';
import { NotificationKind, NotificationType } from '../utils';

declare namespace ToastNotification  {
  interface ToastNotificationProps extends React.HTMLProps<ToastNotification> {
    caption?: React.ReactNode
    children?: React.ReactNode
    hideCloseButton?: boolean
    iconDescription?: string
    kind: NotificationKind
    lowContrast?: boolean
    notificationType?: NotificationType
    onCloseButtonClick?: () => void
    role: string
    statusIconDescription?: string
    subtitle?: React.ReactNode
    timeout?: number
    title: string
  }
}

declare class ToastNotification extends React.Component<ToastNotification.ToastNotificationProps>{ }
export = ToastNotification
