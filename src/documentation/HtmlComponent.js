import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

const SingleComponent = ({ children, html, pageWidth }) => {
  return (
    <Wrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
      }}
      className="wfp--story"
      pageWidth={pageWidth ? pageWidth : 'narrower'}
    >
      <div contentEditable="true" dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{ display: 'none' }}>{children}</div>
    </Wrapper>
  );
};

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SingleComponent;
