import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { settings } from '../../globals/js';

const { prefix } = settings;

/** Tables are used to make large volumes of data easy to understand and to access. */
export default function Table({
  className,
  children,
  responsive,
  withBorder,
  ...other
}) {
  const classes = classNames(
    `${prefix}--table`,
    {
      [`${prefix}--table--responsive`]: responsive,
      [`${prefix}--table--with-border`]: withBorder,
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
