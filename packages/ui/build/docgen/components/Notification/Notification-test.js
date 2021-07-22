"use strict";

var _react = _interopRequireDefault(require("react"));

var _icons = require("@wfp/icons");

var _Notification = require("../Notification");

var _Icon = _interopRequireDefault(require("../Icon"));

var _enzyme = require("enzyme");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = _settings.default.prefix;
describe('NotificationButton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Notification.NotificationButton, {
      className: "some-class"
    }));
    it('renders given className', function () {
      expect(wrapper.hasClass('some-class')).toBe(true);
    });
    it('renders only one Icon', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.length).toEqual(1);
    });
    it('supports custom icon', function () {
      var iconButton = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.NotificationButton, {
        renderIcon: _icons.iconClose,
        iconDescription: "Close"
      }));
      var originalIcon = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
        icon: _icons.iconClose
      })).find('svg');
      var icon = iconButton.find('svg');
      expect(icon.find(':not(svg):not(title)').html()).toBe(originalIcon.find('path').html());
    });
    describe('When notificationType equals "toast"', function () {
      it('button should have correct className by default', function () {
        expect(wrapper.hasClass("".concat(prefix, "--toast-notification__close-button"))).toBe(true);
      });
      it('icon should have correct className by default', function () {
        var icon = wrapper.find(_Icon.default);
        expect(icon.hasClass("".concat(prefix, "--toast-notification__close-icon"))).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('button should have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass("".concat(prefix, "--inline-notification__close-button"))).toBe(true);
      });
      it('icon should have correct className', function () {
        var icon = wrapper.find(_Icon.default);
        expect(icon.hasClass("".concat(prefix, "--inline-notification__close-icon"))).toBe(true);
      });
    });
  });
});
describe('NotificationTextDetails', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Notification.NotificationTextDetails, null));
    describe('When notificationType equals "toast"', function () {
      it('div shoudld have correct className by default', function () {
        expect(wrapper.hasClass("".concat(prefix, "--toast-notification__details"))).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('div shoudld have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass("".concat(prefix, "--inline-notification__text-wrapper"))).toBe(true);
      });
    });
  });
});
describe('ToastNotification', function () {
  describe('Renders as expected', function () {
    var toast = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Notification.ToastNotification, {
      kind: "error",
      title: "this is a title",
      subtitle: "this is a subtitle",
      caption: "this is a caption"
    }));
    it('renders itself', function () {
      expect(toast.length).toEqual(1);
    });
    it('renders HTML for toast notifications when caption exists', function () {
      expect(toast.hasClass("".concat(prefix, "--toast-notification"))).toBe(true);
    });
    it('adds extra classes via className', function () {
      toast.setProps({
        className: 'extra-class'
      });
      expect(toast.hasClass('extra-class')).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        toast.setProps({
          kind: kind
        });
        expect(toast.hasClass("".concat(prefix, "--toast-notification--").concat(kind))).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(toast.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      toast.setProps({
        kind: 'success'
      });
      expect(toast.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle and caption', function () {
      toast.setProps({
        subtitle: /*#__PURE__*/_react.default.createElement("button", {
          type: "button"
        }),
        caption: /*#__PURE__*/_react.default.createElement("button", {
          type: "button"
        })
      });
      expect(toast.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      expect(wrapper.children().length > 0).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      wrapper.find('button').simulate('click');
      expect(wrapper.children().length).toBe(0);
    });
    it('renders null when open state is false', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      wrapper.find('button').simulate('click');
      expect(wrapper.html()).toBeNull();
    });
  });
});
describe('InlineNotification', function () {
  describe('Renders as expected', function () {
    var inline = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.InlineNotification, {
      title: "this is a title",
      subtitle: "this is a subtitle",
      kind: "error"
    }));
    it('renders itself', function () {
      expect(inline.length).toEqual(1);
    });
    it('renders success notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.find(_Icon.default).length).toBe(2);
    });
    it('renders error notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'error'
      });
      expect(inline.find(_Icon.default).length).toBe(2);
    });
    it('renders warning notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'warning'
      });
      expect(inline.find(".".concat(prefix, "--inline-notification__icon")).exists()).toBe(true);
    });
    it('renders HTML for inline notifications when caption does not exist', function () {
      expect(inline.find(".".concat(prefix, "--inline-notification")).exists()).toBe(true);
    });
    it('adds extra classes via className', function () {
      inline.setProps({
        className: 'extra-class'
      });
      expect(inline.find('.extra-class').exists()).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        inline.setProps({
          kind: kind
        });
        expect(inline.find(".".concat(prefix, "--inline-notification--").concat(kind)).exists()).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(inline.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle', function () {
      inline.setProps({
        subtitle: /*#__PURE__*/_react.default.createElement("button", {
          type: "button"
        })
      });
      expect(inline.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      expect(wrapper.children().length > 0).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.InlineNotification, {
        kind: "success",
        title: "title",
        subtitle: "subtitle",
        iconDescription: "description"
      }));
      wrapper.find('button').simulate('click');
      expect(wrapper.children().length).toBe(0);
    });
    it('renders null when open state is false', function () {
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Notification.InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      wrapper.find('button').simulate('click');
      expect(wrapper.html()).toBeNull();
    });
  });
});