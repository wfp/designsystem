/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _require = require('../../globals/js/settings'),
    prefix = _require.prefix;

var _require2 = require('../../globals/js/feature-flags'),
    componentsX = _require2.componentsX;

module.exports = {
  context: {
    prefix: prefix,
    componentsX: componentsX
  },
  variants: [{
    name: 'default',
    label: 'Inline Loading',
    context: {
      showToggleButton: true
    }
  }]
};