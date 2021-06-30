import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import {
  iconCaretDown,
  iconCaretUp,
} from '@wfp/icons';

export default function TableSorting({
  className,
  isSorted,
  isSortedDesc,
  sortType,
  ...other
}) {
  const classes = classNames(className, 'wfp--table--sorting', {
    'wfp--table--is-sorted': isSorted,
    'wfp--table--is-sortable': sortType,
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
