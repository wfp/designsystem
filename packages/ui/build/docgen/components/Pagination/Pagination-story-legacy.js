"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Pagination = _interopRequireDefault(require("../Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    disabled: (0, _addonKnobs.boolean)('Disable backward/forward buttons (disabled)', false),
    page: (0, _addonKnobs.number)('The current page (page)', 1),
    totalItems: (0, _addonKnobs.number)('Total number of items (totalItems)', 103),
    pagesUnknown: (0, _addonKnobs.boolean)('Total number of items unknown (pagesUnknown)', false),
    pageInputDisabled: (0, _addonKnobs.boolean)('Disable page input (pageInputDisabled)', false),
    isLastPage: (0, _addonKnobs.boolean)('At the last page (isLastPage)', false),
    backwardText: (0, _addonKnobs.text)('The description for the backward icon (backwardText)', 'Backward'),
    forwardText: (0, _addonKnobs.text)('The description for the backward icon (forwardText)', 'Forward'),
    pageSize: (0, _addonKnobs.number)('Number of items per page (pageSize)', 10),
    pageSizes: (0, _addonKnobs.array)('Choices of `pageSize` (pageSizes)', [10, 20, 30, 40, 50]),
    pageSizesDisabled: (0, _addonKnobs.boolean)('Hide the `pageSize` select (pageSizeDisabled)', false),
    itemsPerPageText: (0, _addonKnobs.text)('Label for `pageSizes` select UI (itemsPerPageText)', 'Items per page:'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Components|Pagination', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, story());
}).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_Pagination.default, props());
}).add('multipe pagination components', function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Pagination.default, props()), /*#__PURE__*/_react.default.createElement(_Pagination.default, props()));
});