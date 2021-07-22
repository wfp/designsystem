"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupGetInstanceId;

/**
 * Generic utility to initialize a method that will return a unique instance id
 * for a component.
 */
function setupGetInstanceId() {
  var instanceId = 0;
  return function getInstanceId() {
    return ++instanceId;
  };
}