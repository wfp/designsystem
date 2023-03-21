import React from 'react';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/blocks';
import HelpUsImprove from './HelpUsImprove';
import IntroDescription from './IntroDescription';
import Readme from './Readme';

export default function DocsPage() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  const documentation = urlParams.has('documentation');
  console.log('documentation', documentation);

  return (
    <div className={documentation ? 'documentation' : 'no-documentation'}>
      {!documentation && (
        <>
          <Title />
          <Subtitle />
        </>
      )}
      {/*<IntroDescription />
       */}
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      {!documentation && (
        <>
          <Stories />
          <Description />
          <Readme />
          <HelpUsImprove />
        </>
      )}
    </div>
  );
}
