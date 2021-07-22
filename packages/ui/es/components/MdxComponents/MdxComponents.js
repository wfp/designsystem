function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Story from '../Story';
import React from 'react';
import { List, ListItem } from '../List';
import Blockquote from '../Blockquote';
/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

var wrapper = function wrapper(props) {
  return /*#__PURE__*/React.createElement(Story, props);
};

var li = function li(props) {
  var kind = typeof props.children === 'string' ? props.children.substring(0, 1) : '';
  if (kind === '✓' || kind === '✗') return /*#__PURE__*/React.createElement(ListItem, _extends({
    kind: kind === '✓' ? 'checkmark' : 'cross'
  }, props), props.children.substring(1, props.children.length));
  return /*#__PURE__*/React.createElement("li", props, props.children);
};

var ul = function ul(props) {
  return /*#__PURE__*/React.createElement(List, _extends({}, props, {
    kind: "bullets"
  }), props.children);
};

var ol = function ol(props) {
  return /*#__PURE__*/React.createElement(List, _extends({}, props, {
    kind: "ordered"
  }), props.children);
};

var blockquote = function blockquote(props) {
  if (Array.isArray(props.children) && props.children.length >= 2 && props.children[0].props) return /*#__PURE__*/React.createElement(Blockquote, _extends({}, props, {
    title: props.children[0].props.children
  }), props.children.map(function (e, i) {
    if (i > 0) return e;
  }));
  return /*#__PURE__*/React.createElement(Blockquote, props, props.children);
};
/*const code = ({ children, className, ...other }) => {
    const language = className && className.split('-');
    return (
      <PureSource
        format={false}
        dark
        language={(language && language[1]) || 'plaintext'}
        code={children as string}
        {...other}
      />
    );
  };
  */


export var MdxComponents = {
  wrapper: wrapper,
  li: li,
  ul: ul,
  ol: ol,
  blockquote: blockquote
};
export default MdxComponents;