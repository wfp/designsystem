import React from 'react';
import { Link } from '@un/react';

import tokens from '@un/themes-core/dist/json/variables-full';

// extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.
export default function Typeset() {
  console.log(tokens);

  const typesetList = Object.entries(tokens.typography).map(([i, entry]) => (
    <div key={i} style={{ marginBottom: '1em' }}>
      <div style={{ marginBottom: '1em' }} />
      {i}: font-size: {entry.fontSize?.value}, font-weight:{' '}
      {entry.fontWeight?.value}, line-height: {entry.lineHeight?.value}
    </div>
  ));
  return <div>{typesetList}</div>;
}
