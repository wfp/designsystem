"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jestTestResults = _interopRequireDefault(require("../../jest-test-results.json"));

var _addonJest = require("@storybook/addon-jest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _addonJest.withTests)({
  results: _jestTestResults.default,
  filesExt: '-test.js'
});

exports.default = _default;