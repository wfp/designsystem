import * as React from 'react';
import { NotificationType } from '../utils';

declare namespace NotificationTextDetails {
  interface NotificationTextDetailsProps
    extends React.HTMLProps<NotificationTextDetails> {
    caption?: React.ReactNode;
    children?: React.ReactNode;
    notificationType?: NotificationType;
    subtitle?: React.ReactNode;
    title?: string;
  }
}

declare class NotificationTextDetails extends React.Component<NotificationTextDetails.NotificationTextDetailsProps> {}
export = NotificationTextDetails;
