import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

const SingleComponent = ({ centered, children, pageWidth }) => {
  return (
    <Wrapper
      style={
        centered
          ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }
          : undefined
      }
      className="wfp--story"
      pageWidth={pageWidth}>
      {children}
    </Wrapper>
  );
};

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  centered: PropTypes.boolean,
  children: PropTypes.node,
  className: PropTypes.string,
};

SingleComponent.defaultProps = {
  centered: true,
  pageWidth: 'lg',
};

export default SingleComponent;
