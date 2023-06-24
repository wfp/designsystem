import React from 'react';
import Button from '../Button/Button';
import useSettings from '../../hooks/useSettings';
import classNames from 'classnames';

interface NotificationActionButton {
  /**
   * Specify the content of the notification action button.
   */
  children?: React.ReactNode;

  /**
   * Specify an optional className to be applied to the notification action button
   */
  className?: string;

  /**
   * Optionally specify a click handler for the notification action button.
   */
  onClick?: () => void;
}

/** Notifications are messages that communicate information to the user. The two main types of notifications are toast notifications and inline notifications. */
export const NotificationActionButton: React.FC<NotificationActionButton> = ({
  children,
  className: customClassName,
  onClick,
  ...other
}) => {
  const { prefix } = useSettings();

  const className = classNames(
    customClassName,
    `${prefix}--inline-notification__action-button`
  );

  return (
    <Button
      className={className}
      kind="ghost"
      onClick={onClick}
      small //TODO size="small"
      {...other}>
      {children}
    </Button>
  );
};
