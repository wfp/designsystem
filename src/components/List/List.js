import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

export const ListItem = ({ children, className, title, ...other }) => {
  const classNames = classnames('wfp--list__element', className);
  return (
    <li className={classNames} {...other}>
      {title && <span className="wfp--list__element__title">{title}</span>}
      <span className="wfp--list__element__content">{children}</span>
    </li>
  );
};

export const List = ({ children, className, colon, kind, small, ...other }) => {
  const classNames = classnames('wfp--list', className, {
    'wfp--list--simple': kind === 'simple',
    'wfp--list--simple-inline': kind === 'simple-inline',
    'wfp--list--details': kind === 'details',
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
  children: PropTypes.node,
  className: PropTypes.string,
};
