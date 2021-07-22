function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem'; // accept props: pagenumber, content, label

var WizardHook = function WizardHook(_ref) {
  var content = _ref.content;
  var form = useForm();
  var handleSubmit = form.handleSubmit,
      register = form.register,
      errors = form.errors;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = useState(),
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
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(handleFormSubmit)
  }, /*#__PURE__*/React.createElement(FormWizard, {
    formHeader: "Step ".concat(page + 1, "/").concat(content.length),
    stickySidebar: true,
    formControls: /*#__PURE__*/React.createElement(FormControls, {
      onPreviousClick: previous,
      previousHidden: page > 0 ? false : true,
      nextHidden: isLastPage,
      submitHidden: !isLastPage,
      onSubmitClick: handleFormSubmit
    }),
    sidebar: /*#__PURE__*/React.createElement(StepNavigation, {
      selectedPage: page,
      onSelectionChange: handleTabClick,
      handleTabClick: handleTabClick
    }, content.map(function (element, i) {
      return /*#__PURE__*/React.createElement(StepNavigationItem, {
        label: element.label,
        page: i
      });
    }))
  }, content.map(function (element, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wfp--form-long",
      style: {
        display: page === i ? 'block' : 'none'
      }
    }, /*#__PURE__*/React.cloneElement(element.content, {
      register: register
    }));
  })), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(allFormData, 0, 2)));
};

export default WizardHook;