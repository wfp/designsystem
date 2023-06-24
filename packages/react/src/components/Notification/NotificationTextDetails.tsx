import React from 'react';
import useSettings from '../../hooks/useSettings';

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
