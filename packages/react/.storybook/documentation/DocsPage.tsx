import React from 'react';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import HelpUsImprove from './HelpUsImprove';
import IntroDescription from './IntroDescription';
import Readme from './Readme';

export default function DocsPage() {
  return (
    <>
      {/*<Title />
      <Subtitle />*/}
      <IntroDescription />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
      <Description />
      <Readme />
      <HelpUsImprove />
    </>
  );
}
