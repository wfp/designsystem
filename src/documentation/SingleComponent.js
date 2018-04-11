import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

const SingleComponent = ({ children, subTitle, title }) => {
  return (
     <Wrapper
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}
      className="wfp--story"
      pageWidth="narrower">
        {children}
	</Wrapper>
  );
};

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};

export default SingleComponent;
