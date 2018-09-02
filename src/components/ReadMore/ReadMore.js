import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
    const { className, html } = this.props;
    const { showMore } = this.state;

    return (
      <div className={className}>
        {showMore ? (
          <div>
            <Truncate
              lines={100000}
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        ) : (
          <Truncate
            lines={3}
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        )}
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
