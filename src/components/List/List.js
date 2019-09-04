import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const ListItem = ({ children, className, title, ...other }) => {
  const classNames = classnames('wfp--list__element', className);
  return (
    <li className={classNames} {...other}>
      {title && <span className="wfp--list__element__title">{title}</span>}
      <span className="wfp--list__element__content">{children}</span>
    </li>
  );
};

const List = ({ children, className, colon, kind, small, ...other }) => {
  const classNames = classnames('wfp--list', className, {
    'wfp--list--simple': kind === 'simple',
    'wfp--list--simple-inline': kind === 'simple-inline',
    'wfp--list--details': kind === 'details',
    'wfp--list--bullet': kind === 'bullet',
    'wfp--list--small': small,
    'wfp--list--colon': colon,
  });
  return (
    <ul className={classNames} {...other}>
      {children}
    </ul>
  );
};

List.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: PropTypes.node,
  /**
   * Specify a custom className
   */
  className: PropTypes.string,
  /**
   * Specify if colons should be used
   */
  colon: PropTypes.bool,
  /**
   * Specify a kind. Options are `simple`, `simple-inline`, `details`
   */
  kind: PropTypes.string,
  /**
   * Specify if the List should be small
   */
  small: PropTypes.bool,
};

List.defaultProps = {
  colon: false,
  small: false,
};

export { List, ListItem };
