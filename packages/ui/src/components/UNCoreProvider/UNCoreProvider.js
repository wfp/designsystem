import React from 'react';
import propTypes from 'prop-types';

export const defaultUNContext = {
  prefix: 'wfp',
  selectorTabbable: `
    a[href], area[href], input:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]
  `,
  selectorFocusable: `
    a[href], area[href], input:not([disabled]),
    button:not([disabled]),select:not([disabled]),
    textarea:not([disabled]),
    iframe, object, embed, *[tabindex], *[contenteditable=true]
  `,
};

export const UNCoreContext = React.createContext(defaultUNContext);

const UNCoreProvider = ({ children, ...props }) => {
  const ctx = { ...defaultUNContext, ...props };
  return (
    <UNCoreContext.Provider value={ctx}>{children}</UNCoreContext.Provider>
  );
};

UNCoreProvider.propTypes = {
  prefix: propTypes.string,
  selectorTabbable: propTypes.string,
  selectorFocusable: propTypes.string,
};

export default UNCoreProvider;
