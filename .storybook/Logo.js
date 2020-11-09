import React from 'react';

export function StorybookLogo() {
  return (
    <div className="wfp-logo">
      WFP{' '}
      <span style={{ fontWeight: '400', textTransform: 'uppercase' }}>
        UI-Kit
      </span>
      <span
        style={{
          fontSize: '0.8em',
          fontWeight: 'normal',
          fontStyle: 'italic',
          opacity: '0.4',
        }}>
        v1.4
      </span>
    </div>
  );
}
