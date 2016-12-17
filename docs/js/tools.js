/*!
 * WFP.org Tools
 * Copyright 2016 WFP/MADBIT Co.
 */
/**
 * forEach polyfil
 * @param {Array} array - an array of elements to process
 * @param {Function} callback - evaluation callback
 * @param {thisArg} scope - callback scope
 */
var forEach = function(array, callback, scope) {
  "use strict";
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

/**
 * Utility method for binding events programmatically
 * @param {Element} element - and element to bind event to
 * @param {String} type - event type
 * @param {Function} handler - callback function for the event
 */
var bindEvent = function(element, type, handler) {
  "use strict";
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    element.attachEvent("on" + type, handler);
  }
};