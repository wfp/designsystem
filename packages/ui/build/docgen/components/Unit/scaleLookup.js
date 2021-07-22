"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var scaleLookup = {
  thousand: {
    pow: 1000,
    defaultmaximumFractionDigits: 2,
    default: {
      after: 'T'
    }
  },
  million: {
    pow: 1000000,
    defaultmaximumFractionDigits: 1,
    default: {
      after: 'M'
    }
  },
  billion: {
    pow: 1000000000,
    defaultmaximumFractionDigits: 2,
    default: {
      after: 'B'
    }
  }
};
var _default = scaleLookup;
exports.default = _default;