import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { IIcon } from '../../types/utils';

type EmptyProps = PropsWithChildren<{
  title: React.ReactNode;
  kind?: 'undefined' | 'large';
  icon?: IIcon | React.ReactNode;
  button?: React.ReactNode;
  className?: Argument;
}>;
/** The Empty component can be used whenever a section should indicate that there is no content available. This can be the case for a empty list table or search results. */
const Empty: React.FC<EmptyProps> = ({
  button,
  children,
  className,
  href,
  icon,
  title,
  kind = 'large',
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    {
      [`${prefix}--empty`]: true,
      [`${prefix}--empty--${kind}`]: kind,
    },
    className
  );
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--empty__icon`}>{icon}</div>
      <div className={`${prefix}--empty__text`}>
        {title && <h2>{title}</h2>}
        <p>{children}</p>
      </div>
      <div className={`${prefix}--empty__button`}>{button}</div>
    </div>
  );
};

export default Empty;
