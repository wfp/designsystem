import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './table.module.scss';
import Icon from '../Icon';
import {
  iconCaretDown,
  iconCaretUp,
  iconArrowDown,
  iconArrowUp,
} from '@wfp/icons';

export default function TableSorting({
  className,
  isSorted,
  isSortedDesc,
  sortType,
  ...other
}) {
  const classes = classNames(className, styles.sorting, {
    [`${styles.isSorted}`]: isSorted,
    [`${styles.isSortable}`]: sortType,
  });
  return (
    <span className={classes}>
      {isSorted ? (
        isSortedDesc ? (
          <Icon icon={iconCaretDown} />
        ) : (
          <Icon icon={iconCaretUp} />
        )
      ) : (
        ''
      )}
    </span>
  );
}

TableSorting.propTypes = {
  /**
   * Provide the content for the Table, usually `<thead />` or `<tbody/>`
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <table /> node
   */
  className: PropTypes.string,

  /**
   * Displays a border around the  <table /> node
   */
  withBorder: PropTypes.bool,
};
