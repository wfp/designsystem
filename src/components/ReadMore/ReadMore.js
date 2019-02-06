import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import Truncate from 'react-truncate-html';
import Link from '../Link';

class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false };
  }

  handleToggleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const { collapsed, className, expanded, moreText, html } = this.props;
    const { showMore } = this.state;

    const classNames = classnames('wfp--readmore', className);

    return (
      <div className={classNames}>
        {showMore ? expanded : collapsed}
        <Link
          onClick={this.handleToggleClick}
          small
          style={{ marginTop: '0.9em' }}>
          {showMore ? 'Read less' : 'Read more'}
        </Link>
      </div>
    );
  }
}

ReadMore.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  html: PropTypes.string,
};

export default ReadMore;
