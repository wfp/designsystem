import React, { FC } from 'react';
/*import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Description } from './Description';
*/
import { Subtitle } from './Subtitle';
import { Primary } from './Primary';
import { Description } from './Description';
/*
import { Props } from './Props';
import { Stories } from './Stories';
import { PRIMARY_STORY } from './types';*/

import { PRIMARY_STORY } from './types';

import {
  //DocsPage,
  Title,
  //Subtitle,
  //Description,
  //Primary,
  Props,
  Stories,
  //types,
  //DocsContainer,
} from '@storybook/addon-docs/blocks';

export const DocsPage: FC = () => (
  <>
    <Subtitle />
    <Title />
    <Description />
    <Primary />
    <Props story={PRIMARY_STORY} />
    <Stories />
  </>
);
