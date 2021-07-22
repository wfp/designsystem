"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MixBarChartChart = MixBarChartChart;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

function MixBarChartChart() {
  return /*#__PURE__*/_react.default.createElement(_recharts.BarChart, {
    width: 500,
    height: 300,
    data: data,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "name",
    tick: {
      fontSize: 12
    }
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, {
    tick: {
      fontSize: 12
    }
  }), /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, null), /*#__PURE__*/_react.default.createElement(_recharts.Legend, null), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "pv",
    stackId: "a",
    fill: "#4AA1E2"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "amt",
    stackId: "a",
    fill: "#003F76"
  }), /*#__PURE__*/_react.default.createElement(_recharts.Bar, {
    dataKey: "uv",
    fill: "#5FD79A"
  }));
}

var _default = {
  title: 'Components/Chart',
  parameters: {
    componentSubtitle: 'Component'
  }
};
exports.default = _default;