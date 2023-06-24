import React, { useEffect, useRef, useState } from 'react';
import { NotificationButton } from './NotificationButton';
import { NotificationIcon } from './NotificationIcon';
import { NotificationTextDetails } from './NotificationTextDetails';
import useSettings from '../../hooks/useSettings';
import classNames from 'classnames';
import { BlockNotificationProps } from './BlockNotification';

interface ToastNotificationProps extends BlockNotificationProps {
  /**
   * Specify the timeout in milliseconds
   */
  timeout?: number;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  role = 'alert',
  notificationType = 'toast',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseButtonClick = () => {},
  iconDescription = 'closes notification',
  statusIconDescription,
  className,
  //caption = 'provide a caption',
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
        kind={kind}
        iconDescription={statusIconDescription || `${kind} icon`}
        notificationType={notificationType}
      />
      <NotificationTextDetails
        title={title}
        subtitle={subtitle}
        //caption={caption}
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
