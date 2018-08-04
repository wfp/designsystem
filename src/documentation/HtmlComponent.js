import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';
import Blockquote from '../components/Blockquote';

const SingleComponent = ({ children, html, pageWidth }) => {


  console.log(children);
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
      pageWidth={pageWidth ? pageWidth : 'narrower'}>

       <div contentEditable='true' dangerouslySetInnerHTML={{ __html: html }}></div>
       <div style={{display: 'none'}}>
        {children}
       </div>


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
