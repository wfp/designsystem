import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './table.module.scss';

export default function Table(props) {
  const { className, children, ...other } = props;
  const classes = classNames(styles.table, className);
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
   * Provide a custom className to be applied to the containing <table /> node
   */
  className: PropTypes.string,
};
