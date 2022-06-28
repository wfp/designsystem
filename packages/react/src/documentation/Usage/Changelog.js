import React from 'react';

import content from '../../../CHANGELOG.mdx';
import MdxComponents from '../../components/MdxComponents';
import { MDXProvider } from '@mdx-js/react';

export default function Changelog() {
  console.log('changelog');

  return <MDXProvider components={MdxComponents}>{content()}</MDXProvider>;

  return <div>Changelod dddd</div>;
}
