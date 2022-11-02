import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

type CreditsProps = PropsWithChildren<{
  info?: string;
  className?: Argument;
}>;
/** Credits are mostly used when a photo need a source attribution. */
const Credits: React.FC<CreditsProps> = ({
  children,
  className,
  info,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(`${prefix}--credits`, className);
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--credits__info`}>{info}</div>
      {children}
    </div>
  );
};

export default Credits;
