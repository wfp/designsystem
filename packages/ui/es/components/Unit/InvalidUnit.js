import React from 'react'; // For invalid Values

export var Invalid = function Invalid(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: props.className + ' invalid'
  }, "\u2013");
}; // For invalid Values

export var InvalidSvg = function InvalidSvg(props) {
  return /*#__PURE__*/React.createElement("tspan", {
    className: props.className + ' invalid'
  }, "\u2013");
};