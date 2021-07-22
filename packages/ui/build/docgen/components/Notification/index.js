"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notification = require("./Notification");

Object.keys(_Notification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Notification[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Notification[key];
    }
  });
});