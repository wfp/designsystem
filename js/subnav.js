/*!
 * WFP.org Subnavigation Handler
 * Copyright 2016 WFP/MADBIT Co.
 */

/* global forEach */

/**
 * Subnavigation Object
 * @constructor
 * @public
 * @class
 * @param {Element} element - element to attach this Object into
 * @param {Object} nav - initialised responsiveNav Object
 * @requires wfp-ui/js/lib/responsive-nav.js
 * @requires wfp-ui/js/tools.js
 */
var Subnav = function (element, nav) {
  'use strict';
  var owner = this;
  // $md-screen
  owner.lgScreen = window.matchMedia('(min-width: 1024px)');
  // Submenu containers
  owner.containers = element.querySelectorAll('.menu--item');
  // Group all event handlers
  owner._eventHandlers = {};
  // Standard global timer
  owner._timer = 0;
  // Reference responsiveNav Object
  owner._nav = nav;

  if (typeof element === 'string') {
    owner.element = document.querySelector(element);
  }
  else {
    owner.element = ((typeof element.length !== 'undefined') && element.length > 0) ? element[0] : element;
  }

  if (!owner.element) {
    throw new Error('[subnav.js] Please check if the element is correct');
  }

  owner.init();
};

Subnav.prototype = {

  /**
   * @constructs Subnav
   */
  init: function () {
    'use strict';
    var owner = this;

    // Rebuild bindings when going through intended breakpoint
    owner.lgScreen.addListener(function (MQListEvent) {
      owner._nav.close();
      owner.processEventBindings();
    });

    // Initialise bindings
    owner.processEventBindings();
  },

  /**
   * Adds a new eventHandler and keeps track of its origin.
   * @param {Element} node - node reference
   * @param {String} event - event type
   * @param {Function} handler - your event callback/handler
   * @param {Boolean} capture - capture the event
   */
  addNewListener: function (node, event, handler, capture) {
    'use strict';
    var owner = this;
    if (!(node in owner._eventHandlers)) {
      // _eventHandlers stores references to nodes
      owner._eventHandlers[node] = {};
    }
    if (!(event in owner._eventHandlers[node])) {
      // each entry contains another entry for each event type
      owner._eventHandlers[node][event] = [];
    }
    // capture reference
    owner._eventHandlers[node][event].push([handler, capture]);
    node.addEventListener(event, handler, capture);
  },

  /**
   * Removes all eventHandlers for a particular node and event in a collection.
   * @param {Element} node - node reference
   * @param {String} event - event type
   */
  removeAllListeners: function (node, event) {
    'use strict';
    var owner = this;
    if (node in owner._eventHandlers) {
      var handlers = owner._eventHandlers[node];
      if (event in handlers) {
        var eventHandlers = handlers[event];
        for (var i = eventHandlers.length; i--;) {
          var handler = eventHandlers[i];
          node.removeEventListener(event, handler[0], handler[1]);
        }
      }
    }
  },

  /**
   * Loops through and hides all found submenus
   * @param {Element} currentItem - a single submenu to ignore
   */
  hideSubmenu: function (currentItem) {
    'use strict';
    var owner = this;

    forEach(owner.containers, function (key, el) {
      var submenu = el.querySelector('.menu--submenu');
      if (currentItem) {
        if (submenu && submenu !== currentItem && !submenu.classList.contains('dn')) {
          submenu.classList.add('dn');
        }
      }
      else if (submenu) {
        submenu.classList.add('dn');
      }
    });
  },

  /**
   * Process all required event bindings
   */
  processEventBindings: function () {
    'use strict';
    var owner = this;
    forEach(owner.containers, function (key, el) {
      var activator = el.querySelector('.menu--link');
      var submenu = el.querySelector('.menu--submenu');

      if (submenu) {
        if (owner.lgScreen.matches) {
          owner.removeAllListeners(activator, 'click');
          owner.addNewListener(activator, 'mouseenter', function (event) {
            clearTimeout(owner._timer);
            owner.hideSubmenu(submenu);
            submenu.classList.remove('dn');
          });

          owner.addNewListener(activator, 'mouseleave', function (event) {
            owner._timer = setTimeout(function () {
              owner.hideSubmenu();
            }, 750);
          });

          owner.addNewListener(submenu, 'mouseenter', function (event) {
            clearTimeout(owner._timer);
          });

          owner.addNewListener(submenu, 'mouseleave', function (event) {
            owner._timer = setTimeout(function () {
              owner.hideSubmenu();
            }, 750);
          });
        }
        else {
          owner.removeAllListeners(activator, 'mouseenter');
          owner.removeAllListeners(activator, 'mouseleave');
          owner.removeAllListeners(submenu, 'mouseenter');
          owner.removeAllListeners(submenu, 'mouseleave');
          owner.addNewListener(activator, 'click', function (event) {
            owner.hideSubmenu(submenu);
            submenu.classList.toggle('dn');
            event.preventDefault();
          });
        }
      }
    });
  }
};
