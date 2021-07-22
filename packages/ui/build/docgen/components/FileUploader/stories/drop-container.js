"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _settings = _interopRequireDefault(require("../../../globals/js/settings"));

var _FileUploaderItem = _interopRequireDefault(require("../FileUploaderItem"));

var _FileUploaderDropContainer = _interopRequireDefault(require("../FileUploaderDropContainer"));

var _FormItem = _interopRequireDefault(require("../../FormItem"));

var _uniqueId = _interopRequireDefault(require("../../../tools/uniqueId"));

var _excluded = ["uuid", "name", "size", "status", "iconDescription", "invalid"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = _settings.default.prefix;

function ExampleDropContainerApp(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var uploadFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileToUpload) {
      var updatedFile, rand;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(fileToUpload.size > 512000)) {
                _context.next = 4;
                break;
              }

              updatedFile = _objectSpread(_objectSpread({}, fileToUpload), {}, {
                status: 'edit',
                iconDescription: 'Delete file',
                invalid: true,
                errorSubject: 'File size exceeds limit',
                errorBody: '500kb max file size. Select a new file and try again.'
              });
              setFiles(function (files) {
                return files.map(function (file) {
                  return file.uuid === fileToUpload.uuid ? updatedFile : file;
                });
              });
              return _context.abrupt("return");

            case 4:
              // simulate network request time
              rand = Math.random() * 1000;
              setTimeout(function () {
                var updatedFile = _objectSpread(_objectSpread({}, fileToUpload), {}, {
                  status: 'complete',
                  iconDescription: 'Upload complete'
                });

                setFiles(function (files) {
                  return files.map(function (file) {
                    return file.uuid === fileToUpload.uuid ? updatedFile : file;
                  });
                });
              }, rand); // show x icon after 1 second

              setTimeout(function () {
                var updatedFile = _objectSpread(_objectSpread({}, fileToUpload), {}, {
                  status: 'edit',
                  iconDescription: 'Delete file'
                });

                setFiles(function (files) {
                  return files.map(function (file) {
                    return file.uuid === fileToUpload.uuid ? updatedFile : file;
                  });
                });
              }, rand + 1000);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onAddFiles = (0, _react.useCallback)(function (evt, _ref2) {
    var addedFiles = _ref2.addedFiles;
    evt.stopPropagation();
    var newFiles = addedFiles.map(function (file) {
      return {
        uuid: (0, _uniqueId.default)(),
        name: file.name,
        size: file.size,
        status: 'uploading',
        iconDescription: 'Uploading'
      };
    });
    props.multiple ? setFiles([].concat(_toConsumableArray(files), _toConsumableArray(newFiles))) : setFiles([].concat(_toConsumableArray(files), [newFiles[0]]));
    newFiles.forEach(uploadFile);
  }, [files, props.multiple]);
  var handleFileUploaderItemClick = (0, _react.useCallback)(function (evt, _ref3) {
    var clickedUuid = _ref3.uuid;
    return setFiles(files.filter(function (_ref4) {
      var uuid = _ref4.uuid;
      return clickedUuid !== uuid;
    }));
  }, [files]);
  return /*#__PURE__*/_react.default.createElement(_FormItem.default, null, /*#__PURE__*/_react.default.createElement("strong", {
    className: "".concat(prefix, "--file--label")
  }, "Account photo"), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(prefix, "--label-description")
  }, "Only .jpg and .png files. 500kb max file size"), /*#__PURE__*/_react.default.createElement(_FileUploaderDropContainer.default, _extends({}, props, {
    onAddFiles: onAddFiles
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--file-container")
  }, files.map(function (_ref5) {
    var uuid = _ref5.uuid,
        name = _ref5.name,
        size = _ref5.size,
        status = _ref5.status,
        iconDescription = _ref5.iconDescription,
        invalid = _ref5.invalid,
        rest = _objectWithoutProperties(_ref5, _excluded);

    return /*#__PURE__*/_react.default.createElement(_FileUploaderItem.default, _extends({
      key: (0, _uniqueId.default)(),
      uuid: uuid,
      name: name,
      size: size,
      status: status,
      iconDescription: iconDescription,
      invalid: invalid,
      onDelete: handleFileUploaderItemClick
    }, rest));
  })));
}

var _default = function _default(props) {
  return /*#__PURE__*/_react.default.createElement(ExampleDropContainerApp, props);
};

exports.default = _default;