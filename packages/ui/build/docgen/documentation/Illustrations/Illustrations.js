"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Illustrations;

var _react = _interopRequireDefault(require("react"));

var _Module = require("../../components/Module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var files = [{
  filename: 'carrot-with-background'
}, {
  filename: 'carrot'
}, {
  filename: 'coffee-beans-with-background'
}, {
  filename: 'coffee-bean'
}, {
  filename: 'corn-bag-with-background'
}, {
  filename: 'corn-bag'
}, {
  filename: 'corn-bag-with-background'
}, {
  filename: 'corn'
}, {
  filename: 'eggs-can-with-background'
}, {
  filename: 'eggs'
}, {
  filename: 'milk-with-background'
}, {
  filename: 'milk'
}, {
  filename: 'moving-van-with-background'
}, {
  filename: 'moving-van'
}, {
  filename: 'notebook-with-background'
}, {
  filename: 'notebook'
}, {
  filename: 'pumpkin-can-with-background'
}, {
  filename: 'pumpkin'
}, {
  filename: 'rice-with-background'
}, {
  filename: 'rice'
}, {
  filename: 'sorghum-with-background'
}, {
  filename: 'sorghum'
}, {
  filename: 'soy-bean-can-with-background'
}, {
  filename: 'soy-bean'
}, {
  filename: 'watering-can-with-background'
}, {
  filename: 'watering-can'
}, {
  filename: 'wheat-with-background'
}, {
  filename: 'wheat'
}];

function Illustrations() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 -1rem'
    }
  }, files.map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_Module.Module, {
      light: true,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
      }
    }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("a", {
      href: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "illustrations/").concat(e.filename, ".svg"),
      target: "_blank",
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '300px'
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: e.filename,
      style: {
        width: '80%',
        height: '200px',
        objectFit: 'contain'
      },
      src: "".concat(process.env.STORYBOOK_INTERNAL_ASSETS, "illustrations/").concat(e.filename, ".svg")
    }))));
  }));
}