import * as React from 'react';
import Tooltip from '../Tooltip';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Context menu are used as navigational elements. They should contain commands that apply to the target object. */
type ContextMenuProps = PropsWithChildren<{
  content?: React.ReactNode;
  href?: string;
  inline?: boolean;
  className?: string;
}>;

const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  className,
  content,
  /* href,
  inline,
  trigger = 'click',
  ...other*/
}) => {
  const { prefix } = useSettings();
  const classes = classNames(
    {
      [`${prefix}--context-menu`]: true,
    },
    className
  );

  return (
    <Tooltip className={classes} content={content} noPadding trigger="click">
      {children}
    </Tooltip>
  );
};

type ContextMenuGroupProps = PropsWithChildren<{
  className?: string;
}>;

const ContextMenuGroup: React.FC<ContextMenuGroupProps> = ({
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classNames(
    {
      [`${prefix}--context-menu__group`]: true,
    },
    className
  );

  return <div className={classNames} {...other} />;
};

type ContextMenuItemProps = PropsWithChildren<{
  className?: string;
}>;

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classNames(
    {
      [`${prefix}--context-menu__item`]: true,
    },
    className
  );

  return <div className={classNames} {...other} />;
};

export { ContextMenu, ContextMenuItem, ContextMenuGroup };
