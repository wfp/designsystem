"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _FormWizard = _interopRequireDefault(require("../../components/FormWizard"));

var _FormControls = _interopRequireDefault(require("../../components/FormControls"));

var _StepNavigation = _interopRequireDefault(require("../../components/StepNavigation"));

var _StepNavigationItem = _interopRequireDefault(require("../../components/StepNavigationItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// accept props: pagenumber, content, label
var WizardHook = function WizardHook(_ref) {
  var content = _ref.content;
  var form = (0, _reactHookForm.useForm)();
  var handleSubmit = form.handleSubmit,
      register = form.register,
      errors = form.errors;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      allFormData = _useState4[0],
      setFormData = _useState4[1];

  var handleTabClick = function handleTabClick(value) {
    setPage(value);
  };

  var next = function next() {
    setPage(page + 1);
  };

  var handleFormSubmit = function handleFormSubmit(data) {
    var isLastPage = page === content.length - 1;

    if (isLastPage) {
      setFormData(data);
    } else {
      next();
    }
  };

  var previous = function previous() {
    setPage(Math.max(page - 1, 0));
  };

  var isLastPage = page === content.length - 1;
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(handleFormSubmit)
  }, /*#__PURE__*/_react.default.createElement(_FormWizard.default, {
    formHeader: "Step ".concat(page + 1, "/").concat(content.length),
    stickySidebar: true,
    formControls: /*#__PURE__*/_react.default.createElement(_FormControls.default, {
      onPreviousClick: previous,
      previousHidden: page > 0 ? false : true,
      nextHidden: isLastPage,
      submitHidden: !isLastPage,
      onSubmitClick: handleFormSubmit
    }),
    sidebar: /*#__PURE__*/_react.default.createElement(_StepNavigation.default, {
      selectedPage: page,
      onSelectionChange: handleTabClick,
      handleTabClick: handleTabClick
    }, content.map(function (element, i) {
      return /*#__PURE__*/_react.default.createElement(_StepNavigationItem.default, {
        label: element.label,
        page: i
      });
    }))
  }, content.map(function (element, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "wfp--form-long",
      style: {
        display: page === i ? 'block' : 'none'
      }
    }, /*#__PURE__*/_react.default.cloneElement(element.content, {
      register: register
    }));
  })), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(allFormData, 0, 2)));
};

var _default = WizardHook;
exports.default = _default;