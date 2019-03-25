import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';

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
    const { centered, children, flexBasis, pageWidth } = this.props;
    const { height } = this.state;

    //'wfp--story',
    const classNames = classnames({
      'wfp--single-component--top': height >= 300,
    });

    return (
      <div
        style={
          centered && height <= 200
            ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }
            : undefined
        }
        className={classNames}
        pageWidth={pageWidth}>
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
