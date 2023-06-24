import classNames from 'classnames';
import React from 'react';
import useSettings from '../../hooks/useSettings';
import { InputProps } from '../Input';

import { Close } from '@un/icons-react';

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
