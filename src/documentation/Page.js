import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

const Page = ({ children, subTitle, title }) => {
  return (
    <Wrapper
      style={{margin: '2em auto'}}
      className="wfp--story"
      pageWidth="narrower">
        <h1 className="wfp--story__title">{title}</h1>
        <h2 className="wfp--story__sub-title">{subTitle}</h2>
        {children}
		</Wrapper>
  );
};

Page.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};

export default Page;
