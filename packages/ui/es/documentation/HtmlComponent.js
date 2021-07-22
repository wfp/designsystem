import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

var SingleComponent = function SingleComponent(_ref) {
  var children = _ref.children,
      html = _ref.html,
      pageWidth = _ref.pageWidth;
  return /*#__PURE__*/React.createElement(Wrapper, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%'
    },
    className: "wfp--story",
    pageWidth: pageWidth ? pageWidth : 'narrower'
  }, /*#__PURE__*/React.createElement("div", {
    contentEditable: "true",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    }
  }, children));
};

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};
export default SingleComponent;