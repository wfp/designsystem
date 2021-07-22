"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _SingleComponent = _interopRequireDefault(require("../../documentation/SingleComponent"));

var _Credits = _interopRequireDefault(require("../Credits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
(0, _react2.storiesOf)('Components|Credits', module).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement(_SingleComponent.default, null, story());
}).add('Default (depreciated)', function () {
  return /*#__PURE__*/_react.default.createElement(_Credits.default, {
    info: "Photo: WFP/ Rein Skullerud"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Default illustration",
    style: {
      width: '700px',
      height: 'auto'
    },
    src: "http://www1.wfp.org/sites/default/files/images/hp_yem_20170717_wfp-reem_nada_0109_3.jpg"
  }));
});