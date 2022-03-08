import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
const { prefix } = settings;

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

ContextMenuGroup.propTypes = {
  /**
   * Provide the content for the ContentMenu
   */
  children: PropTypes.node,

  /**
   * Provide a custom className
   */
  className: PropTypes.string,
};

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
   * Provide the content for the ContentMenu
   */
  children: PropTypes.node,

  /**
   * Provide a custom className
   */
  className: PropTypes.string,

  /**
   * Provide content to display when contextMenu is clicked
   */
  content: PropTypes.node,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: PropTypes.bool,
};

export default ContextMenu;
