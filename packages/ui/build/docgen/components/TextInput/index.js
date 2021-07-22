"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TextInput2.default;
  }
});

var _TextInput = require("./TextInput.Skeleton");

Object.keys(_TextInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextInput[key];
    }
  });
});

var _TextInput2 = _interopRequireDefault(require("./TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }