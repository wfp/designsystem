import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { NotificationTextDetails } from './NotificationTextDetails';
import { NotificationIcon } from './NotificationIcon';

export interface BlockNotificationProps
  extends Omit<React.ComponentPropsWithRef<'div'>, 'title'> {
  /**
   * Pass in the action nodes that will be rendered within the Notification
   */
  actions?: React.ReactNode;

  /**
   * Provide a function that is called when menu is closed
   */
  onClose?: any;

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton?: boolean;

  /**
   * Pass in the icon that will be rendered within the Notification or set icon to false to hide
   */
  icon?: React.ReactNode | boolean;

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription?: string;

  /**
   * Specify what state the notification represents
   */
  kind?: 'error' | 'info' | 'success' | 'warning' | 'warning-alt';

  /**
   * Specify whether you are using the low contrast variant of the Notification.
   */
  lowContrast?: boolean;

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType?: 'toast' | 'inline';

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick?: (e: any) => void;

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role?: string;

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription?: string;

  /**
   * Specify the sub-title
   */
  subtitle?: React.ReactNode;

  /**
   * Specify the title
   */
  title?: React.ReactNode;
}

export const BlockNotification: React.FC<BlockNotificationProps> =
  React.forwardRef((props, ref) => {
    const {
      actions,
      role = 'alert',
      notificationType = 'inline',
      icon,
      //  iconDescription = 'closes notification',
      statusIconDescription,
      className,
      subtitle,
      title,
      kind = 'info',
      lowContrast = true,
      hideCloseButton = false,
      children,
      ...other
    } = props;
    const { prefix } = useSettings();
    const containerClassName = classNames(className, {
      [`${prefix}--inline-notification`]: true,
      [`${prefix}--block-notification`]: true,
      [`${prefix}--inline-notification--low-contrast`]: lowContrast,
      [`${prefix}--inline-notification--${kind}`]: kind,
      [`${prefix}--inline-notification--hide-close-button`]: hideCloseButton,
    });

    return (
      <div {...other} ref={ref} role={role} className={containerClassName}>
        <div className={`${prefix}--inline-notification__details`}>
          {icon === undefined && (
            <NotificationIcon
              notificationType={notificationType}
              kind={kind}
              iconDescription={statusIconDescription || `${kind} icon`}
            />
          )}
          {icon && (
            <div
              className={`${prefix}--${notificationType}-notification__icon`}>
              {icon}
            </div>
          )}
          <NotificationTextDetails
            title={title}
            subtitle={subtitle}
            notificationType={notificationType}>
            {children}
          </NotificationTextDetails>
          {actions && (
            <div className={`${prefix}--inline-notification__actions-wrapper`}>
              {actions}
            </div>
          )}
        </div>
      </div>
    );
  });

BlockNotification.displayName = 'BlockNotification';

export default BlockNotification;
