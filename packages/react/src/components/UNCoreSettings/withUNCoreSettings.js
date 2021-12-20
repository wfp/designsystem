import React from 'react';
import useSettings from '../../hooks/useSettings';

// Passes settings down to children, primarily useful for class components
// that can't consume the useSettings hook. Props passed to the underlying
// component can be used to override settings values
export const withUNCoreSettings = (WrappedComponent) => (props) => {
  const settings = useSettings();
  const allProps = { ...settings, ...props };
  return <WrappedComponent {...allProps} />;
};
