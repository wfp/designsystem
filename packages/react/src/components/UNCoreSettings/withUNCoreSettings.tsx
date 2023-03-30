import useSettings from '../../hooks/useSettings';
import * as React from 'react';
// Passes settings down to children, primarily useful for class components
// that can't consume the useSettings hook. Props passed to the underlying
// component can be used to override settings values
export const withUNCoreSettings =
  (WrappedComponent: React.ElementType) => (props?: object) => {
    const settings = useSettings();
    const allProps = { ...settings, ...props };

    return <WrappedComponent {...allProps} />;
  };
