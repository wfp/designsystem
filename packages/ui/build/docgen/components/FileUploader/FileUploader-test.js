"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _FileUploader = _interopRequireWildcard(require("../FileUploader"));

var _FileUploader2 = _interopRequireDefault(require("../FileUploader/FileUploader.Skeleton"));

var _enzyme = require("enzyme");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
describe('Filename', () => {
  const mountWrapper = mount(<Filename name={'trees.jpg'} />);

  describe('click on edit icon (close--solid)', () => {
    it('should have a click event', () => {
      const onClick = jest.fn();
      mountWrapper.setProps({ onClick, status: 'edit' });
      mountWrapper.find('Icon').simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});*/
describe('FileUploaderButton', function () {
  var button = /*#__PURE__*/_react.default.createElement(_FileUploader.FileUploaderButton, {
    className: "extra-class"
  });

  var mountWrapper = (0, _enzyme.mount)(button);
  describe('Renders as expected with default props', function () {
    it('renders with expected className', function () {
      expect(mountWrapper.find('label').hasClass('wfp--btn')).toBe(true);
    });
    it('renders with given className', function () {
      expect(mountWrapper.hasClass('extra-class')).toBe(true);
    });
    it('renders with default labelText prop', function () {
      expect(mountWrapper.props().labelText).toEqual('Add file');
    });
    it('renders with default buttonKind prop', function () {
      expect(mountWrapper.props().buttonKind).toEqual('primary');
    });
    it('renders with expected button className', function () {
      expect(mountWrapper.find('.wfp--btn--primary').exists()).toBe(true);
    });
    it('renders with default multiple prop', function () {
      expect(mountWrapper.props().multiple).toEqual(false);
    });
    it('renders with default disableLabelChanges prop', function () {
      expect(mountWrapper.props().disableLabelChanges).toEqual(false);
    });
    it('renders with default accept prop', function () {
      expect(mountWrapper.props().accept).toEqual([]);
    });
    it('renders with default disabled prop', function () {
      expect(mountWrapper.props().disabled).toBe(false);
    });
    it('disables file upload input', function () {
      var wrapper = (0, _enzyme.shallow)(button);
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('input').prop('disabled')).toEqual(true);
    });
    it('does not have default role', function () {
      expect(mountWrapper.props().role).toEqual('button');
    });
    it('resets the input value onClick', function () {
      var input = mountWrapper.find('.wfp--visually-hidden');
      input.instance().value = '';
      var evt = {
        target: {
          value: input.instance().value
        }
      };
      input.simulate('click', evt);
      expect(evt.target.value).toEqual(null);
    });
  });
  describe('Unique id props', function () {
    it('each FileUploaderButton should have a unique ID', function () {
      var mountedButtons = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FileUploader.FileUploaderButton, {
        className: "extra-class"
      }), /*#__PURE__*/_react.default.createElement(_FileUploader.FileUploaderButton, {
        className: "extra-class"
      })));
      var firstButton = mountedButtons.find(_FileUploader.FileUploaderButton).at(0);
      var lastButton = mountedButtons.find(_FileUploader.FileUploaderButton).at(1);
      var isEqual = firstButton === lastButton;
      expect(isEqual).toBe(false);
    });
  });
  describe('Update labelText', function () {
    it('should have equal state and props', function () {
      expect((0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FileUploader.FileUploaderButton, {
        labelText: "foo"
      })).state().labelText).toEqual('foo');
    });
    it('should change the label text upon change in props', function () {
      mountWrapper.setProps({
        labelText: 'foo'
      });
      mountWrapper.setState({
        labelText: 'foo'
      });
      mountWrapper.setProps({
        labelText: 'bar'
      });
      expect(mountWrapper.state().labelText).toEqual('bar');
    });
    it('should avoid change the label text upon setting props, unless there the value actually changes', function () {
      mountWrapper.setProps({
        labelText: 'foo'
      });
      mountWrapper.setState({
        labelText: 'bar'
      });
      mountWrapper.setProps({
        labelText: 'foo'
      });
      expect(mountWrapper.state().labelText).toEqual('bar');
    });
  });
});
describe('FileUploader', function () {
  var fileUploader = /*#__PURE__*/_react.default.createElement(_FileUploader.default, {
    className: "extra-class"
  });

  var mountWrapper = (0, _enzyme.mount)(fileUploader);
  describe('Renders as expected with defaults', function () {
    it('should render with default className', function () {
      expect(mountWrapper.children().hasClass('wfp--form-item')).toEqual(true);
    });
    it('should render with given className', function () {
      expect(mountWrapper.hasClass('extra-class')).toEqual(true);
    });
    it('renders with FileUploaderButton with disableLabelChanges set to true', function () {
      expect(mountWrapper.find('FileUploaderButton').props().disableLabelChanges).toEqual(true);
    });
    it('renders input with hidden prop', function () {
      expect(mountWrapper.find('input').props().className).toEqual('wfp--visually-hidden');
    });
    it('renders with empty div.wfp--file-container by default', function () {
      expect(mountWrapper.find('div.wfp--file-container').text()).toEqual('');
    });
    /*it('clears all uploaded files when the clearFiles method is called', () => {
      const mountUploadedWrapper = mount(fileUploader);
      mountUploadedWrapper.setState({
        filenames: ['examplefile.jpg'],
        filenameStatus: 'complete',
      });
       // Test to make sure that the Filename is rendered
      expect(mountUploadedWrapper.find(Filename)).toHaveLength(1);
       // Test to make sure it was properly removed
      mountUploadedWrapper.instance().clearFiles();
      expect(mountUploadedWrapper.update().find(Filename)).toHaveLength(0);
    });*/
  });
  describe('Update filenameStatus', function () {
    it('should have equal state and props', function () {
      expect((0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FileUploader.default, {
        filenameStatus: "uploading"
      })).state().filenameStatus).toEqual('uploading');
    });
    it('should change the label text upon change in props', function () {
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      mountWrapper.setState({
        filenameStatus: 'uploading'
      });
      mountWrapper.setProps({
        filenameStatus: 'edit'
      });
      expect(mountWrapper.state().filenameStatus).toEqual('edit');
    });
    it('should avoid change the label text upon setting props, unless there the value actually changes', function () {
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      mountWrapper.setState({
        filenameStatus: 'edit'
      });
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      expect(mountWrapper.state().filenameStatus).toEqual('edit');
    });
  });
});
describe('FileUploaderSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FileUploader2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--form-item')).toEqual(true);
    });
  });
});