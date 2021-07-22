"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoImage = exports.Regular = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _README = _interopRequireDefault(require("./README.mdx"));

var _SidebarItem = _interopRequireDefault(require("./SidebarItem"));

var _Tag = _interopRequireDefault(require("../Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/UI Elements/SidebarItem',
  component: _SidebarItem.default,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: _README.default
  }
};
exports.default = _default;

var Regular = function Regular(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/_react.default.createElement(_SidebarItem.default, args));
};

exports.Regular = Regular;
Regular.args = {
  title: "Title",
  content: "content",
  subContent: 'sub content',
  additionalInfo: 'Additional',
  hintInfo: /*#__PURE__*/_react.default.createElement(_Tag.default, null, "hint")
};

var NoImage = function NoImage(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/_react.default.createElement(_SidebarItem.default, args));
};

exports.NoImage = NoImage;
NoImage.args = {
  title: "831 students",
  content: "409 boys, 422 girls",
  subContent: 'meal served',
  additionalInfo: 'Friday, 21.02.20',
  noImage: true,
  hintInfo: /*#__PURE__*/_react.default.createElement(_Tag.default, {
    type: "warning"
  }, "not synced")
};