import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from '../components/Wrapper';

var Page = function Page(_ref) {
  var children = _ref.children,
      pageWidth = _ref.pageWidth,
      subTitle = _ref.subTitle,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Wrapper, {
    style: {
      margin: '4rem auto'
    },
    className: "wfp--story",
    pageWidth: pageWidth ? pageWidth : 'sm'
  }, /*#__PURE__*/React.createElement("h2", {
    className: "wfp--story__subtitle"
  }, subTitle), /*#__PURE__*/React.createElement("h1", {
    className: "wfp--story__title"
  }, title), children);
};

Page.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  children: PropTypes.node,
  className: PropTypes.string
};
export default Page;