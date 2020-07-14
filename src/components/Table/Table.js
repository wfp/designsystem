import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './table.module.scss';

export default function Table({
  className,
  children,
  responsive,
  withBorder,
  ...other
}) {
  const classes = classNames(
    styles.table,
    {
      [`${styles.responsive}`]: responsive,
      [`${styles.tableWithBorder}`]: withBorder,
    },
    className
  );
  return (
    <table {...other} className={classes}>
      {children}
    </table>
  );
}

Table.propTypes = {
  /**
   * Provide the content for the Table, usually `<thead />` or `<tbody/>`
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing `<table />` node
   */
  className: PropTypes.string,

  /**
   * Displays the `<table />` as a responsive layout on small devices
   */
  responsive: PropTypes.bool,

  /**
   * Displays a border around the `<table />` node
   */
  withBorder: PropTypes.bool,
};
