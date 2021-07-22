"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.load = void 0;
// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
var LOAD = 'redux-form-examples/account/LOAD';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      };

    default:
      return state;
  }
};
/**
 * Simulates data loaded into this reducer from somewhere
 */


var load = function load(data) {
  return {
    type: LOAD,
    data: data
  };
};

exports.load = load;
var _default = reducer;
exports.default = _default;