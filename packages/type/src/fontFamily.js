/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Font family fallbacks for: IBM Plex Mono, IBM Plex Sans, IBM Plex Sans
// Condensed, IBM Plex Sans Hebrew, and IBM Plex Serif
export const fontFamilies = {
  mono:
    "'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
  code: 
    "'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', Courier, monospace",
  serif: 
    "'Open Sans',  'Georgia', Times, sans-serif",
  tajawal: 
    "'Tajawal', sans-serif"
};

// CHeck how its been used in the code
// sans: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
//   sansCondensed:
//     "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif",
//   sansHebrew:
//     "'IBM Plex Sans Hebrew', 'Helvetica Hebrew', 'Arial Hebrew', sans-serif",

export function fontFamily(name) {
  if (!fontFamilies[name]) {
    throw new Error(
      `Unable to find font family: \`${name}\`. Expected one of: ` +
        `[${Object.keys(fontFamilies).join(', ')}]`
    );
  }
  return {
    fontFamily: fontFamilies[name],
  };
}
