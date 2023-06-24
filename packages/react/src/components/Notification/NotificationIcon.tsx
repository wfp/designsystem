import React from 'react';
import useSettings from '../../hooks/useSettings';

import {
  Error,
  CheckmarkCircle,
  WarningSolid,
  InfoCircle,
} from '@un/icons-react';

const iconTypes = {
  error: Error,
  success: CheckmarkCircle,
  warning: WarningSolid,
  info: InfoCircle,
};

interface NotificationIconProps {
  iconDescription?: string;
  kind: 'error' | 'info' | 'success' | 'warning' | 'warning-alt';
  notificationType: 'toast' | 'inline';
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  iconDescription,
  kind = 'info',
  notificationType = 'toast',
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
