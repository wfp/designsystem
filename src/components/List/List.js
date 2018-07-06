import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

export const ListElement = ({ children, className, title, ...other }) => {
  const classNames = classnames('wfp--list__element', className);
  return (
    <li className={classNames} {...other}>
      {title && <span className="wfp--list__element__title">{title}</span>}
      <span className="wfp--list__element__content">{children}</span>
    </li>
  );
};

export const List = ({ children, className, kind, ...other }) => {
  const classNames = classnames('wfp--list', className, {
    'wfp--list--simple': kind === 'simple',
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
  href: PropTypes.string,
};
