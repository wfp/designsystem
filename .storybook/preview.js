import { addParameters } from '@storybook/react';
import theme from './theme';

import {
  //DocsPage,
  Title,
  //Subtitle,
  //Description,
  Primary,
  Props,
  Stories,
  types,
  //DocsContainer,
} from '@storybook/addon-docs/blocks';
import { DocsPage } from './blocks/DocsPage';
import { DocsContainer } from './blocks/DocsContainer';
import { Subtitle } from './blocks/Subtitle';

import React, { FC } from 'react';
//import { Title } from '@storybook/addon-docs/Title';
/*import { Subtitle } from './Subtitle';*/
import Description from './blocks/Description'; /*
//import { Primary } from './blocks-old/Primary';
//import { Props } from './blocks/Props';
/*
import { Props } from './Props';
import { Stories } from './Stories';
import { PRIMARY_STORY } from './types';*/
//import '../src/globals/scss/styles.scss';
import './storybook.scss';

/*
const githubPath = resultReadme
  ? resultReadme.replace('./src/', './').replace('README.md', '')
  : undefined;*/

export const DocsPaged = (props) => {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Props />
      <Stories />
    </>
  );
};

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewMode: 'docs',
});

// or global addParameters
export const parameters = {
  controls: { expanded: true },
  docs: {
    theme: theme,
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
      title: 'Documentation',
    },
    canvas: { title: 'Code' },
  },
};
