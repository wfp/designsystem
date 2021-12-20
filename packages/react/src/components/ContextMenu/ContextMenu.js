import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Context menu are used as navigational elements. They should contain commands that apply to the target object. */

export const ContextMenu = ({
  children,
  className,
  content,
  href,
  inline,
  trigger = 'click',
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(
    {
      [`${prefix}--context-menu`]: true,
    },
    className
  );

  return (
    <Tooltip className={classNames} content={content} noPadding trigger="click">
      {children}
    </Tooltip>
  );
};

export function ContextMenuGroup({ className, ...other }) {
  const classNames = classnames(
    {
      [`${prefix}--context-menu__group`]: true,
    },
    className
  );

  return <div className={classNames} {...other} />;
}

export function ContextMenuItem({ className, ...other }) {
  const classNames = classnames(
    {
      [`${prefix}--context-menu__item`]: true,
    },
    className
  );

  return <div className={classNames} {...other} />;
}

ContextMenu.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,
  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: PropTypes.bool,
};

export default ContextMenu;
