import React from 'react';
import Text from '../../components/Text';
import Link from '../../components/Link';
import { List, ListItem } from '../../components/List';
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Headings"), /*#__PURE__*/React.createElement("p", null, "Typographic scale when using headings in text component"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, headingText.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      kind: e.kind
    }, e.text), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/React.createElement("h3", null, "Text"), /*#__PURE__*/React.createElement("p", null, "Typographic scale for normal text"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, Normaltext.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      kind: e.kind
    }, e.text), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/React.createElement("h3", null, "Page title"), /*#__PURE__*/React.createElement("p", null, "Typographic scale for page title and overline"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    kind: "title"
  }, "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "58px, Light"), /*#__PURE__*/React.createElement(Text, {
    kind: "subtitle"
  }, "Overline"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "14px, SemiBold"))), /*#__PURE__*/React.createElement("h3", null, "Links"), /*#__PURE__*/React.createElement(Text, {
    kind: "p"
  }, "Typographic scale for links"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    kind: "a"
  }, "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "16px, Regular"), /*#__PURE__*/React.createElement(Link, {
    className: "wfp--link--hover"
  }, "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#A9A9A9',
      marginBottom: '2rem'
    }
  }, "16px, Regular"))), /*#__PURE__*/React.createElement("h3", null, "Emphasis"), /*#__PURE__*/React.createElement("p", null, "Typographic scale for to put empahasis on text"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, emphasisText.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      kind: e.kind
    }, e.text), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '2rem'
      }
    }, e.styling));
  })), /*#__PURE__*/React.createElement("h3", null, "Lists"), /*#__PURE__*/React.createElement("p", null, "Typographic scale for lists of items int he different variations: ordered, unordered and bullets"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, list.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(Text, {
      kind: "h4"
    }, e.heading), /*#__PURE__*/React.createElement(List, {
      kind: e.kind
    }, /*#__PURE__*/React.createElement(ListItem, null, "Numbered List 1"), /*#__PURE__*/React.createElement(ListItem, null, "Numbered List 2"), /*#__PURE__*/React.createElement(ListItem, null, "Numbered List 3")));
  })), /*#__PURE__*/React.createElement("h3", null, "Colors"), /*#__PURE__*/React.createElement("p", null, "Color accents to use on normal text"), /*#__PURE__*/React.createElement("div", {
    className: "wfp--card-box"
  }, colors.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        paddingLeft: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, null, e.text), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#A9A9A9',
        marginBottom: '3rem'
      }
    }, "16px, ", e.color)), /*#__PURE__*/React.createElement("div", {
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

export default Typography;