"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = uniqueId;
exports.default = void 0;
var lastId = 0;

function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

var _default = uniqueId;
exports.default = _default;