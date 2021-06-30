import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

const Page = ({ children, pageWidth, subTitle, title }) => {
  return (
    <Wrapper
      style={{ margin: '4rem auto' }}
      className="wfp--story"
      pageWidth={pageWidth ? pageWidth : 'sm'}>
      <h2 className="wfp--story__subtitle">{subTitle}</h2>
      <h1 className="wfp--story__title">{title}</h1>
      {children}
    </Wrapper>
  );
};

Page.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
