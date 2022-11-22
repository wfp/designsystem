import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */
interface LinkProps {
  href?: string;
  inline?: boolean;
  className?: string;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  className,
  href,
  inline,
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    {
      [`${prefix}--link`]: true,
      [`${prefix}--link--inline`]: inline,
    },
    className
  );
  return (
    <a href={href} className={classNames} {...other}>
      {children}
    </a>
  );
};

export default Link;
