import React from 'react';
import { iconSearch } from '@wfp/icons';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';
import { shallow, mount } from 'enzyme';
describe('Button', function () {
  describe('Renders common props as expected', function () {
    var wrapper = shallow(
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(Button, {
      tabIndex: 2,
      className: "extra-class"
    }, /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child"), /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child")));
    var wrapperHref = shallow(
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(Button, {
      tabIndex: 2,
      className: "extra-class",
      href: "/home"
    }, /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child"), /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child")));
    it('Renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(2);
      expect(wrapperHref.find('.child').length).toBe(2);
    });
    it('Should set tabIndex if one is passed via props', function () {
      expect(wrapper.props().tabIndex).toEqual(2);
      expect(wrapperHref.props().tabIndex).toEqual(2);
    });
    it('Should add extra classes via className', function () {
      expect(wrapper.hasClass('extra-class')).toBe(true);
      expect(wrapperHref.hasClass('extra-class')).toBe(true);
    });
  });
  describe('Renders <button> props as expected', function () {
    var wrapper = shallow(
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(Button, {
      tabIndex: 2
    }, /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child"), /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child")));
    it('Renders as a <button> element without an href', function () {
      expect(wrapper.is('button')).toBe(true);
    });
    it('Should set disabled to false by default', function () {
      expect(wrapper.props().disabled).toBe(false);
    });
    it('Should set disabled if one is passed via props', function () {
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.props().disabled).toBe(true);
    });
    it('Should set type to button by default', function () {
      expect(wrapper.props().type).toEqual('button');
    });
    it('Should only set type to [button, reset or submit] if one is passed via props', function () {
      wrapper.setProps({
        type: 'reset'
      });
      expect(wrapper.props().type).toEqual('reset');
      wrapper.setProps({
        type: 'submit'
      });
      expect(wrapper.props().type).toEqual('submit');
    });
  });
  describe('Renders <a> props as expected', function () {
    var wrapper = shallow(
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(Button, {
      href: "#",
      tabIndex: 2
    }, /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child"), /*#__PURE__*/React.createElement("div", {
      className: "child"
    }, "child")));
    it('Renders as an <a> element with an href', function () {
      expect(wrapper.is('a')).toBe(true);
    });
    it('Should always render with [role="button"] by default', function () {
      expect(wrapper.props().role).toEqual('button');
    });
  });
  describe('Renders icon buttons', function () {
    var iconButton = mount( /*#__PURE__*/React.createElement(Button, {
      icon: iconSearch,
      iconDescription: "Search"
    }, "Search"));
    var icon = iconButton.find('svg');
    it('should have the appropriate icon', function () {
      expect(icon.hasClass('wfp--btn__icon')).toBe(true);
    });
    it('should return error if icon given without description', function () {
      var props = {
        icon: 'search'
      }; // eslint-disable-next-line quotes

      var error = new Error('icon property specified without also providing an iconDescription property.');
      expect(Button.propTypes.iconDescription(props)).toEqual(error);
    });
  });
});
describe('Primary Button', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('Secondary Button', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      kind: "secondary",
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn--secondary')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('Ghost Button', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      kind: "ghost",
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn--ghost')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('Small Button', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      small: true,
      className: "extra-class"
    }));
    it('Has the expected classes for small', function () {
      expect(wrapper.hasClass('wfp--btn--sm')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('DangerButton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      kind: "danger",
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn--danger')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('danger--primaryButton', function () {
  describe('Renders as exptected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      kind: "danger--primary",
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn--danger--primary')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('TertiaryButton', function () {
  describe('Renders as exptected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Button, {
      kind: "tertiary",
      className: "extra-class"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--btn--tertiary')).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('ButtonSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(ButtonSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--btn')).toEqual(true);
    });
  });
  describe('Renders <a> props as expected', function () {
    var wrapper = shallow(
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(ButtonSkeleton, {
      href: "#"
    }));
    it('Renders as an <a> element with an href', function () {
      expect(wrapper.is('a')).toBe(true);
    });
    it('Should always render with [role="button"] by default', function () {
      expect(wrapper.props().role).toEqual('button');
    });
  });
});
describe('Small ButtonSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(ButtonSkeleton, {
      small: true
    }));
    it('Has the expected classes for small', function () {
      expect(wrapper.hasClass('wfp--btn--sm')).toEqual(true);
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});