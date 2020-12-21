import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/** List component show a number of connected items written consecutively, typically one below the other. */

export const List = ({ children, className, colon, kind, small, ...other }) => {
  const classNames = classnames('wfp--list', className, {
    [`wfp--list--${kind}`]: kind,
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
   * Specify a kind.
   */
  kind: PropTypes.oneOf([
    'simple',
    'simple-inline',
    'details',
    'bullets',
    'ordered',
  ]),
  /**
   * Specify if the List should be small
   */
  small: PropTypes.bool,
};

List.defaultProps = {
  kind: 'simple',
  colon: false,
  small: false,
};

export default List;
