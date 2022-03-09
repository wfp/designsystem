import * as React from 'react';

declare namespace NotificationActionButton  {
  interface NotificationActionButtonProps extends React.HTMLProps<NotificationActionButton> {
    children?: React.ReactNode
  }
}

declare class NotificationActionButton extends React.Component<NotificationActionButton.NotificationActionButtonProps>{ }
export = NotificationActionButton
