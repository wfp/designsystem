/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const fontWeights = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700, //added this
  extrabold: 800 //added this
};

export function fontWeight(weight) {
  if (!fontWeights[weight]) {
    throw new Error(
      `Unable to find font weight: \`${weight}\`. Expected one of: ` +
        `[${Object.keys(fontWeights).join(', ')}]`
    );
  }
  return {
    fontWeight: fontWeights[weight],
  };
}
