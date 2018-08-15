import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class SearchSkeleton extends Component {
  static propTypes = {
    small: PropTypes.bool,
  };

  static defaultProps = {
    small: false,
  };

  render() {
    const { small, id } = this.props;

    const searchClasses = classNames({
      'wfp--skeleton': true,
      'wfp--search--lg': !small,
      'wfp--search--sm': small,
    });

    return (
      <div className={searchClasses} role="search">
        <label htmlFor={id} className="wfp--label" />
        <div className="wfp--search-input" />
      </div>
    );
  }
}
