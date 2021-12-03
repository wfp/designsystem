import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';
const { prefix } = useSettings();

/** List component show a number of connected items written consecutively, typically one below the other. */

export const List = ({ children, className, colon, kind, small, ...other }) => {
  const classNames = classnames(`${prefix}--list`, className, {
    [`${prefix}--list--${kind}`]: kind,
    [`${prefix}--list--small`]: small,
    [`${prefix}--list--colon`]: colon,
  });
  return (
    <>
      {kind == 'ordered' ? (
        <ol className={classNames} {...other}>
          {children}
        </ol>
      ) : (
        <ul className={classNames} {...other}>
          {children}
        </ul>
      )}
    </>
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
    'unstyled',
    'simple-inline',
    'details',
    'unordered',
    'ordered',
    'tooltip',
    'bullets',
  ]),
  /**
   * Specify if the List should be small
   */
  small: PropTypes.bool,
};

List.defaultProps = {
  kind: 'unstyled',
  colon: false,
  small: false,
};

export default List;
