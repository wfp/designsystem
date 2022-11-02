import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

type AuthLayoutProps = PropsWithChildren<{
  className?: Argument;
  image?: React.ReactNode;
  backgroundContent?: React.ReactNode;
}>;

const AuthLayout: React.FC<AuthLayoutProps> = ({
  image,
  backgroundContent,
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const style = image
    ? {
        backgroundImage: `url(${image})`,
      }
    : {};

  const wrapperClasses = classNames(`${prefix}--auth-background-wrapper`, {
    [`${prefix}--auth-background-image`]: image,
    [`${className}`]: className,
  });

  return (
    <div className={`${prefix}--auth-wrapper`} {...other}>
      <div className={wrapperClasses} style={style}>
        {backgroundContent}
      </div>
      <div className={`${prefix}--auth-content-wrapper`}>{children}</div>
    </div>
  );
};

type BackgroundContentProps = PropsWithChildren<{
  className?: Argument;
}>;

const BackgroundContent: React.FC<BackgroundContentProps> = ({
  children,
  ...other
}) => {
  const { prefix } = useSettings();
  return (
    <div {...other} className={`${prefix}--auth-background-content`}>
      {children}
    </div>
  );
};

export { BackgroundContent, AuthLayout };
