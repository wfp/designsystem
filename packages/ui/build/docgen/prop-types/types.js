"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationtypes = exports.buttonKinds = exports.ButtonTypes = void 0;

var _propTypes = require("prop-types");

// TODO: remove legacy
var ButtonTypes = {
  buttonKind: (0, _propTypes.oneOf)(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation'])
};
exports.ButtonTypes = ButtonTypes;
var buttonKinds = ['primary', 'secondary', 'tertiary', 'accent', 'danger--primary', 'danger', 'ghost', 'inverse--primary', 'inverse', 'navigation'];
exports.buttonKinds = buttonKinds;
var notificationtypes = ['info', 'success', 'warning', 'error'];
exports.notificationtypes = notificationtypes;