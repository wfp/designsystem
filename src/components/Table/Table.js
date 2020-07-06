import React from 'react';
import classNames from 'classnames';

export default function Table(props) {
  const { className, children, ...other } = props;
  const classes = classNames('wfp--table', className);
  return (
    <table {...other} className={classes}>
      {children}
    </table>
  );
}
