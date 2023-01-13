import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { NotificationIcon, NotificationTextDetails } from './Notification';
export function BlockNotification({
  actions,
  advancedActions,
  role,
  notificationType,
  onCloseButtonClick,
  onClose,
  icon,
  iconDescription,
  statusIconDescription,
  className,
  subtitle,
  title,
  kind,
  lowContrast,
  hideCloseButton,
  children,
  ...other
}) {
  const { prefix } = useSettings();
  const containerClassName = classnames(className, {
    [`${prefix}--inline-notification`]: true,
    [`${prefix}--block-notification`]: true,
    [`${prefix}--inline-notification--low-contrast`]: lowContrast,
    [`${prefix}--inline-notification--${kind}`]: kind,
    [`${prefix}--inline-notification--hide-close-button`]: hideCloseButton,
  });

  return (
    <div {...other} role={role} kind={kind} className={containerClassName}>
      <div className={`${prefix}--inline-notification__details`}>
        {icon === undefined && (
          <NotificationIcon
            notificationType={notificationType}
            kind={kind}
            iconDescription={statusIconDescription || `${kind} icon`}
          />
        )}
        {icon && (
          <div className={`${prefix}--${notificationType}-notification__icon`}>
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
}

BlockNotification.propTypes = {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions: PropTypes.node,

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool,

  /**
   * Pass in the icon that will be rendered within the ToastNotification or set icon to false to hide
   */
  icon: PropTypes.oneOf([PropTypes.node, PropTypes.bool]),

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf([
    'error',
    'info',
    //'info-square',
    'success',
    'warning',
    'warning-alt',
  ]).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: PropTypes.bool,

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: PropTypes.string,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: PropTypes.string,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * Specify the title
   */
  title: PropTypes.string,
};

BlockNotification.defaultProps = {
  role: 'alert',
  notificationType: 'inline',
  iconDescription: 'closes notification',
  onCloseButtonClick: () => {},
  hideCloseButton: false,
  lowContrast: true,
};
