"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Breadcrumb2.default;
  }
});

var _Breadcrumb = require("./Breadcrumb.Skeleton");

Object.keys(_Breadcrumb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Breadcrumb[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Breadcrumb[key];
    }
  });
});

var _Breadcrumb2 = _interopRequireDefault(require("./Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }