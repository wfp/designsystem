"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _List = require("../../components/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = [{
  kind: 'simple',
  heading: 'Ordered lists'
}, {
  kind: 'bullets',
  heading: 'Bullet lists'
}, {
  kind: 'ordered',
  heading: 'Unordered lists'
}];
var Normaltext = [{
  kind: 'p',
  text: 'Body copy, paragraph',
  styling: '16px, Regular'
}, {
  kind: 'p',
  text: 'Label (form)',
  styling: '14px, SemiBold'
}, {
  kind: 'code',
  text: 'Code',
  styling: 'Monospace, 16px, Regular'
}, {
  kind: 'sup',
  text: 'Sup',
  styling: '11px, Regular'
}, {
  kind: 'p',
  text: 'Inline highlight',
  styling: '14px, SemiBold'
}];
var colors = [{
  color: '#031C2D',
  text: '#text-01'
}, {
  color: '#5A6872',
  text: '#text-02'
}, {
  color: '#DFE6EB',
  text: '#text-03'
}];
var headingText = [{
  kind: 'h1',
  text: 'Heading 1',
  styling: '29px, SemiBold'
}, {
  kind: 'h2',
  text: 'Heading 2',
  styling: '25px, SemiBold'
}, {
  kind: 'h3',
  text: 'Heading 3',
  styling: '22px, SemiBold'
}, {
  kind: 'h4',
  text: 'Heading 4',
  styling: '20px, SemiBold'
}, {
  kind: 'h5',
  text: 'Heading 5',
  styling: '18px, SemiBold'
}, {
  kind: 'h6',
  text: 'Heading 6',
  styling: '16px, SemiBold'
}];
var emphasisText = [{
  kind: 'strong',
  text: 'Bold',
  styling: '16px, Bold'
}, {
  kind: 'bold',
  text: 'SemiBold',
  styling: '16px, SemiBold'
}, {
  kind: 'i',
  text: 'Italic',
  styling: '16px, Italic'
}];

var Typography = function Typography() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", null, "Headings"), /*#__PURE__*/_react.default.createElement("p", null, "Typographic scale when using headings in text component"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, headingText.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      kind: e.kind
    }, e.text), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/_react.default.createElement("h3", null, "Text"), /*#__PURE__*/_react.default.createElement("p", null, "Typographic scale for normal text"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, Normaltext.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      kind: e.kind
    }, e.text), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/_react.default.createElement("h3", null, "Page title"), /*#__PURE__*/_react.default.createElement("p", null, "Typographic scale for page title and overline"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingLeft: '0.5rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    kind: "title"
  }, "Title"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "58px, Light"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    kind: "subtitle"
  }, "Overline"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "14px, SemiBold"))), /*#__PURE__*/_react.default.createElement("h3", null, "Links"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    kind: "p"
  }, "Typographic scale for links"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingLeft: '0.5rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    kind: "a"
  }, "Link"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "16px, Regular"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    className: "wfp--link--hover"
  }, "Link"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "16px, Regular"))), /*#__PURE__*/_react.default.createElement("h3", null, "Emphasis"), /*#__PURE__*/_react.default.createElement("p", null, "Typographic scale for to put empahasis on text"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, emphasisText.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      kind: e.kind
    }, e.text), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/_react.default.createElement("h3", null, "Lists"), /*#__PURE__*/_react.default.createElement("p", null, "Typographic scale for lists of items int he different variations: ordered, unordered and bullets"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, list.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      kind: "h4"
    }, e.heading), /*#__PURE__*/_react.default.createElement(_List.List, {
      kind: e.kind
    }, /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Numbered List 1"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Numbered List 2"), /*#__PURE__*/_react.default.createElement(_List.ListItem, null, "Numbered List 3")));
  })), /*#__PURE__*/_react.default.createElement("h3", null, "Colors"), /*#__PURE__*/_react.default.createElement("p", null, "Color accents to use on normal text"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--card-box"
  }, colors.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.default, null, e.text), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '3rem'
      }
    }, "16px, ", e.color)), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: e.color,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1.5rem'
      }
    }));
  })));
};

var _default = Typography;
exports.default = _default;