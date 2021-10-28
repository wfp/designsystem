import * as React from 'react';
import { NotificationKind, NotificationType } from '../utils';

declare namespace InlineNotification  {
  interface InlineNotificationProps extends React.HTMLProps<InlineNotification> {
    actions?: React.ReactNode
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
    title: string
  }
}

declare class InlineNotification extends React.Component<InlineNotification.InlineNotificationProps>{ }
export = InlineNotification
