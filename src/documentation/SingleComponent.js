import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

class SingleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentDidMount() {
    const height = document.getElementById('container').clientHeight;
    this.setState({ height });
  }

  render() {
    const { centered, children, flexBasis } = this.props;
    const { height } = this.state;

    const classNames = classnames({
      'wfp--single-component--top': height >= 300,
      'wfp--single-component--centered': centered && height <= 200,
    });

    return (
      <div className={classNames}>
        <div
          id="container"
          style={{ flexBasis: flexBasis ? flexBasis : 'auto' }}>
          {children}
        </div>
      </div>
    );
  }
}

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

SingleComponent.defaultProps = {
  centered: true,
  pageWidth: 'lg',
};

export default SingleComponent;
