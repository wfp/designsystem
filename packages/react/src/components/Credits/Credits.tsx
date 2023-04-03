import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

type CreditsProps = PropsWithChildren<{
  info?: string;
  className?: string;
}>;
/** Credits are mostly used when a photo need a source attribution. */
const Credits: React.FC<CreditsProps> = ({
  children,
  className,
  info,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--credits`, className);
  return (
    <div className={classes} {...other}>
      <div className={`${prefix}--credits__info`}>{info}</div>
      {children}
    </div>
  );
};

Credits.displayName = 'Credits';

export default Credits;
