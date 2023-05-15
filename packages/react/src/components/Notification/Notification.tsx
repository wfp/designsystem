import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import {
  Close,
  Error,
  CheckmarkCircle,
  WarningSolid,
  InfoCircle,
} from '@un/icons-react';

import Button from '../Button';
import { InputProps } from '../Input';

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

interface NotificationButtonProps
  extends InputProps,
    React.ComponentPropsWithRef<'button'> {
  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel?: string;

  /**
   * Specify an optional className to be applied to the notification button
   */
  className?: string;

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription?: string;

  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name?: string;

  /**
   * Specify the notification type
   */
  notificationType?: 'toast' | 'inline';

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon?: any; // TODO: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Optional prop to specify the type of the Button
   */
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  ariaLabel = 'close notification',
  className,
  iconDescription = 'close icon',
  type = 'button',
  renderIcon: IconTag = Close, // IconTag, // Close
  name,
  notificationType = 'toast',
  ...other
}) => {
  const { prefix } = useSettings();

  const buttonClassName = classNames(className, {
    [`${prefix}--${notificationType}-notification__close-button`]:
      notificationType,
  });
  const iconClassName = classNames({
    [`${prefix}--${notificationType}-notification__close-icon`]:
      notificationType,
  });

  // const Icon = renderIcon;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...other}
      type={type}
      aria-label={iconDescription}
      title={iconDescription}
      className={buttonClassName}>
      {IconTag && (
        <IconTag aria-label={ariaLabel} className={iconClassName} name={name} />
      )}
    </button>
  );
};

interface NotificationTextDetailsProps {
  /*extends Omit<React.ComponentPropsWithRef<'div'>, 'title'> */ title?: React.ReactNode;
  subtitle?: React.ReactNode;
  caption?: React.ReactNode;
  notificationType?: 'toast' | 'inline';
  children?: React.ReactNode;
}

export const NotificationTextDetails: React.FC<
  NotificationTextDetailsProps
> = ({
  title,
  subtitle,
  caption,
  notificationType = 'toast',
  children,
  ...other
}) => {
  const { prefix } = useSettings();

  if (notificationType === 'toast') {
    return (
      <div {...other} className={`${prefix}--toast-notification__details`}>
        {title && (
          <h3 className={`${prefix}--toast-notification__title`}>{title}</h3>
        )}
        <div className={`${prefix}--toast-notification__subtitle`}>
          {subtitle}
        </div>
        <div className={`${prefix}--toast-notification__caption`}>
          {caption}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div {...other} className={`${prefix}--inline-notification__text-wrapper`}>
      {title && (
        <p className={`${prefix}--inline-notification__title`}>{title}</p>
      )}
      <div className={`${prefix}--inline-notification__subtitle`}>
        {children || subtitle}
      </div>
    </div>
  );
};

const iconTypes = {
  error: Error,
  success: CheckmarkCircle,
  warning: WarningSolid,
  info: InfoCircle,
};

interface NotificationIconProps {
  iconDescription?: string;
  kind?: 'error' | 'info' | 'success' | 'warning' | 'warning-alt';
  notificationType?: 'toast' | 'inline';
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  iconDescription,
  kind,
  notificationType,
}) => {
  const { prefix } = useSettings();
  const IconForKind = kind ? iconTypes[kind] : undefined;
  if (!IconForKind) {
    return null;
  }
  return (
    <IconForKind
      className={`${prefix}--${notificationType}-notification__icon`}>
      <title>{iconDescription}</title>
    </IconForKind>
  );
};

interface ToastNotificationProps {
  /**
   * Specify the caption
   */
  caption?: React.ReactNode;

  /**
   * Pass in the children that will be rendered within the ToastNotification
   */
  children?: React.ReactNode;

  /**
   * Specify an optional className to be applied to the notification box
   */
  className?: string;

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton?: boolean;

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription?: string;

  /**
   * Specify what state the notification represents
   */

  kind?: 'error' | 'info' | 'success' | 'warning' | 'warning-alt';

  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast?: boolean;

  /**
   * By default, this value is "toast". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType?: 'toast' | 'inline';

  /**
   * Provide a function that is called when menu is closed
   */
  onClose?: any;

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick?: any;

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
   * Specify an optional duration the notification should be closed in
   */
  timeout?: number;

  /**
   * Specify the title
   */
  title?: React.ReactNode;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  role = 'alert',
  notificationType,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseButtonClick = () => {},
  iconDescription = 'closes notification',
  statusIconDescription,
  className,
  caption = 'provide a caption',
  subtitle,
  title = 'provide a title',
  kind = 'error',
  lowContrast,
  hideCloseButton = false,
  children,
  timeout = 0,
  ...other
}) => {
  const { prefix } = useSettings();
  const [isOpen, setIsOpen] = useState(true);
  const containerClassName = classNames(className, {
    [`${prefix}--toast-notification`]: true,
    [`${prefix}--toast-notification--low-contrast`]: lowContrast,
    [`${prefix}--toast-notification--${kind}`]: kind,
  });

  const handleClose = (evt) => {
    if (!onClose || onClose(evt) !== false) {
      setIsOpen(false);
    }
  };

  function handleCloseButtonClick(event) {
    onCloseButtonClick(event);
    handleClose(event);
  }

  const savedOnClose = useRef(onClose);

  useEffect(() => {
    savedOnClose.current = onClose;
  });

  useEffect(() => {
    if (!timeout) {
      return;
    }

    const timeoutId = window.setTimeout((event) => {
      setIsOpen(false);
      if (savedOnClose.current) {
        savedOnClose.current(event);
      }
    }, timeout);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [timeout]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      {...other}
      role={role}
      /* kind={kind} */ className={containerClassName}>
      <NotificationIcon
        notificationType={notificationType}
        kind={kind}
        iconDescription={statusIconDescription || `${kind} icon`}
      />
      <NotificationTextDetails
        title={title}
        subtitle={subtitle}
        caption={caption}
        notificationType={notificationType}>
        {children}
      </NotificationTextDetails>
      {!hideCloseButton && (
        <NotificationButton
          iconDescription={iconDescription}
          notificationType={notificationType}
          onClick={handleCloseButtonClick}
        />
      )}
    </div>
  );
};

interface InlineNotificationProps {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions?: React.ReactNode;

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children?: React.ReactNode;

  /**
   * Specify an optional className to be applied to the notification box
   */
  className?: string;

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton?: boolean;

  /**
   * Pass in the icon that will be rendered within the ToastNotification or set icon to false to hide
   */
  icon?: React.ReactNode; // PropTypes.oneOf([PropTypes.node, PropTypes.bool]),

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription?: string;

  /**
   * Specify what state the notification represents
   */
  kind?: 'error' | 'info' | 'success' | 'warning' | 'warning-alt';

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
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
  onCloseButtonClick?: any;

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
  title?: string;
  onClose?: any;
}

export const InlineNotification: React.FC<InlineNotificationProps> = ({
  actions,
  role = 'alert',
  notificationType = 'inline',
  onClose,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseButtonClick = () => {},
  icon,
  iconDescription = 'closes notification',
  statusIconDescription,
  className,
  subtitle,
  title,
  kind,
  lowContrast,
  hideCloseButton = false,
  children,
  ...other
}) => {
  const { prefix } = useSettings();
  const [isOpen, setIsOpen] = useState(true);
  const containerClassName = classNames(className, {
    [`${prefix}--inline-notification`]: true,
    [`${prefix}--inline-notification--low-contrast`]: lowContrast,
    [`${prefix}--inline-notification--${kind}`]: kind,
    [`${prefix}--inline-notification--hide-close-button`]: hideCloseButton,
  });

  const handleClose = (evt) => {
    if (!onClose || onClose(evt) !== false) {
      setIsOpen(false);
    }
  };

  function handleCloseButtonClick(event) {
    onCloseButtonClick(event);
    handleClose(event);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div {...other} role={role} /*kind={kind} */ className={containerClassName}>
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
      </div>
      {actions}
      {!hideCloseButton && (
        <NotificationButton
          iconDescription={iconDescription}
          notificationType={notificationType}
          onClick={handleCloseButtonClick}
        />
      )}
    </div>
  );
};
