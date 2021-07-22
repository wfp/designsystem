import settings from './settings';
import * as components from './components';
/**
 * The handles for event handlers to lazily instantiate components.
 * @type {Handle[]}
 */

var lazyInitHandles = [];
/**
 * Instantiates components automatically
 * by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
 * or upon DOM events (e.g. clicking) on such elements.
 * See each components' static `.init()` methods for details.
 * @private
 */

var init = function init() {
  var componentClasses = Object.keys(components).map(function (key) {
    return components[key];
  }).filter(function (component) {
    return typeof component.init === 'function';
  });

  if (!settings.disableAutoInit) {
    componentClasses.forEach(function (Clz) {
      var h = Clz.init();

      if (h) {
        lazyInitHandles.push(h);
      }
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOMContentLoaded has been fired already
  // Let consumer have chance to see if it wants automatic instantiation disabled, and then run automatic instantiation otherwise
  setTimeout(init, 0);
}

export default lazyInitHandles;