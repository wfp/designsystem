function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from '../../globals/js/settings';
import mixin from '../../globals/js/misc/mixin';
import createComponent from '../../globals/js/mixins/create-component';
import initComponentBySearch from '../../globals/js/mixins/init-component-by-search';
import handles from '../../globals/js/mixins/handles';
import toggleAttribute from '../../globals/js/misc/toggle-attribute';
/** kadskjbkj */

var InlineLoading = /*#__PURE__*/function (_mixin) {
  _inherits(InlineLoading, _mixin);

  var _super = _createSuper(InlineLoading);

  /**
   * Spinner indicating loading state.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a spinner.
   * @param {Object} [options] The component options.
   * @param {string} [options.initialState] The initial state, should be `inactive`, `active` or `finished`.
   */
  function InlineLoading(element, options) {
    var _this;

    _classCallCheck(this, InlineLoading);

    _this = _super.call(this, element, options); // Sets the initial state

    var initialState = _this.options.initialState;

    if (initialState) {
      _this.setState(initialState);
    }

    return _this;
  }
  /**
   * Sets active/inactive state.
   * @param {string} state The new state, should be `inactive`, `active` or `finished`.
   */


  _createClass(InlineLoading, [{
    key: "setState",
    value: function setState(state) {
      var states = this.constructor.states;
      var values = Object.keys(states).map(function (key) {
        return states[key];
      });

      if (values.indexOf(state) < 0) {
        throw new Error("One of the following value should be given as the state: ".concat(values.join(', ')));
      }

      var elem = this.element;
      var _this$options = this.options,
          selectorSpinner = _this$options.selectorSpinner,
          selectorFinished = _this$options.selectorFinished,
          selectorTextActive = _this$options.selectorTextActive,
          selectorTextFinished = _this$options.selectorTextFinished;
      var spinner = elem.querySelector(selectorSpinner);
      var finished = elem.querySelector(selectorFinished);
      var textActive = elem.querySelector(selectorTextActive);
      var textFinished = elem.querySelector(selectorTextFinished);

      if (spinner) {
        spinner.classList.toggle(this.options.classLoadingStop, state !== states.ACTIVE);
        toggleAttribute(spinner, 'hidden', state === states.FINISHED);
      }

      if (finished) {
        toggleAttribute(finished, 'hidden', state !== states.FINISHED);
      }

      if (textActive) {
        toggleAttribute(textActive, 'hidden', state !== states.ACTIVE);
      }

      if (textFinished) {
        toggleAttribute(textFinished, 'hidden', state !== states.FINISHED);
      }

      return this;
    }
    /**
     * The list of states.
     * @type {Object<string, string>}
     */

  }], [{
    key: "options",
    get:
    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode InlineLoading.create .create()},
     * or {@linkcode InlineLoading.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode InlineLoading.init .init()} works.
     * @member InlineLoading.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find inline loading components.
     * @property {string} selectorSpinner The CSS selector to find the spinner.
     * @property {string} selectorFinished The CSS selector to find the "finished" icon.
     * @property {string} selectorTextActive The CSS selector to find the text describing the active state.
     * @property {string} selectorTextFinished The CSS selector to find the text describing the finished state.
     * @property {string} classLoadingStop The CSS class for spinner's stopped state.
     */
    function get() {
      var prefix = settings.prefix;
      return {
        selectorInit: '[data-inline-loading]',
        selectorSpinner: '[data-inline-loading-spinner]',
        selectorFinished: '[data-inline-loading-finished]',
        selectorTextActive: '[data-inline-loading-text-active]',
        selectorTextFinished: '[data-inline-loading-text-finished]',
        classLoadingStop: "".concat(prefix, "--loading--stop")
      };
    }
  }]);

  return InlineLoading;
}(mixin(createComponent, initComponentBySearch, handles));

_defineProperty(InlineLoading, "states",
/* #__PURE_CLASS_PROPERTY__ */
{
  INACTIVE: 'inactive',
  ACTIVE: 'active',
  FINISHED: 'finished'
});

_defineProperty(InlineLoading, "components",
/* #__PURE_CLASS_PROPERTY__ */
new WeakMap());

export default InlineLoading;