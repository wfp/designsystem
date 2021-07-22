"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _ = _interopRequireWildcard(require("."));

var _FileUploader = _interopRequireDefault(require("./FileUploader.Skeleton"));

var _FileUploaderItem = _interopRequireDefault(require("./FileUploaderItem"));

var _FileUploaderDropContainer = _interopRequireDefault(require("./FileUploaderDropContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
var prefix = _settings.default.prefix;
var buttonKinds = {
  'Primary (primary)': 'primary',
  'Secondary (secondary)': 'secondary',
  'Danger (danger)': 'danger',
  'Ghost (ghost)': 'ghost',
  'Danger Primary (danger--primary)': 'danger--primary',
  'Tertiary (tertiary)': 'tertiary'
};
var filenameStatuses = {
  'Edit (edit)': 'edit',
  'Complete (complete)': 'complete',
  'Uploading (uploading)': 'uploading'
};
var props = {
  fileUploaderButton: function fileUploaderButton() {
    var buttonKind = (0, _addonKnobs.select)('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Add files'),
      name: (0, _addonKnobs.text)('Form item name: (name)', ''),
      multiple: (0, _addonKnobs.boolean)('Supports multiple files (multiple)', true),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: (0, _addonKnobs.boolean)('Prevent the label from being replaced with file selected file (disableLabelChanges)', false),
      role: (0, _addonKnobs.text)('ARIA role of the button (role)', 'button'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex)', 0),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  fileUploader: function fileUploader() {
    return {
      labelTitle: (0, _addonKnobs.text)('The label title (labelTitle)', 'Upload'),
      labelDescription: (0, _addonKnobs.text)('The label description (labelDescription)', 'only .jpg files at 500mb or less'),
      buttonLabel: (0, _addonKnobs.text)('The button label (buttonLabel)', 'Add files'),
      filenameStatus: (0, _addonKnobs.select)('Status for file name (filenameStatus)', filenameStatuses, 'edit'),
      accept: (0, _addonKnobs.array)('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
      name: (0, _addonKnobs.text)('Form item name: (name)', ''),
      multiple: (0, _addonKnobs.boolean)('Supports multiple files (multiple)', true),
      iconDescription: (0, _addonKnobs.text)('Close button icon description (iconDescription)', 'Clear file')
    };
  },
  fileUploaderItem: function fileUploaderItem() {
    return {
      name: (0, _addonKnobs.text)('Filename (name)', 'README.md'),
      status: (0, _addonKnobs.select)('Status for file name (status)', filenameStatuses, 'edit'),
      iconDescription: (0, _addonKnobs.text)('Close button icon description (iconDescription)', 'Clear file'),
      onDelete: (0, _addonActions.action)('onDelete'),
      invalid: (0, _addonKnobs.boolean)('Invalid (invalid)', false),
      errorSubject: (0, _addonKnobs.text)('Error subject (errorSubject)', 'File size exceeds limit'),
      errorBody: (0, _addonKnobs.text)('Error body (errorBody)', '500kb max file size. Select a new file and try again.')
    };
  },
  fileUploaderDropContainer: function fileUploaderDropContainer() {
    return {
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Drag and drop files here or click to upload'),
      name: (0, _addonKnobs.text)('Form item name (name)', ''),
      multiple: (0, _addonKnobs.boolean)('Supports multiple files (multiple)', true),
      accept: (0, _addonKnobs.array)('Accepted MIME types or file extensions (accept)', ['image/jpeg', 'image/png'], ','),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      role: (0, _addonKnobs.text)('ARIA role of the button (role)', ''),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex)', 0),
      onChange: (0, _addonActions.action)('onChange')
    };
  }
};
(0, _react2.storiesOf)('Components|FileUploader', module).addDecorator(_addonKnobs.withKnobs).add('FileUploaderButton', function () {
  return /*#__PURE__*/_react.default.createElement(_.FileUploaderButton, props.fileUploaderButton());
}).add('FileUploader', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--file__container")
  }, /*#__PURE__*/_react.default.createElement(_.default, props.fileUploader()));
}).add('FileUploaderItem', function () {
  return /*#__PURE__*/_react.default.createElement(_FileUploaderItem.default, props.fileUploaderItem());
}).add('FileUploaderDropContainer', function () {
  return /*#__PURE__*/_react.default.createElement(_FileUploaderDropContainer.default, props.fileUploaderDropContainer());
}).add('Drag and drop upload container example application', function () {
  return require('./stories/drop-container').default(props.fileUploaderDropContainer());
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '500px'
    }
  }, /*#__PURE__*/_react.default.createElement(_FileUploader.default, null));
});