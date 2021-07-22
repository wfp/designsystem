"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderValuePropSync = exports.componentsX = void 0;

/**
 * This file contains the list of the default values of compile-time feature flags.
 *
 * Build toolchain can replace variable here and/or the references
 * in order to apply non-default values to those feature flags.
 *
 * @example Render `foo` if `aFeatureFlag` is `true`, render `bar` otherwise.
 * import { aFeatureFlag } from '/path/to/FeatureFlags';
 * ...
 * const MyComponent = props => (<div {...props}>{aFeatureFlag ? 'foo' : 'bar'}</div>);
 */

/**
 * Next gen of Carbon component design.
 */
var componentsX = false;
/**
 * Support for prop -> state sync of `<Slider>` value.
 */

exports.componentsX = componentsX;
var sliderValuePropSync = false;
exports.sliderValuePropSync = sliderValuePropSync;