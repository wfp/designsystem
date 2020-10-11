import React, { FC } from 'react';
/*import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Description } from './Description';
*/
import { Subtitle } from './Subtitle';
import { Primary } from './Primary';
import { Description } from './Description';
import { IntroDescription } from './IntroDescription';

import { Props } from './Props';

import { Stories } from './Stories';
/*
import { PRIMARY_STORY } from './types';*/

import { PRIMARY_STORY } from './types';

import {
  //DocsPage,
  Title,
  //Subtitle,
  //Description,
  //Primary,
  //Props,
  //Stories,
  //types,
  //DocsContainer,
} from '@storybook/addon-docs/blocks';

export const DocsPage: FC = (props) => {
  const reqReadme = require.context('../../src', true, /\.md$/);
  const contextName = 'Link';
  const resultReadme = reqReadme
    .keys()
    .find(
      (fruit) =>
        fruit.search(new RegExp(contextName.replace(/\s/g, ''), 'i')) !== -1
    );

  return (
    <>
      <IntroDescription />
      <div className="sticky-preview-wrapper">
        <div className="sticky-preview">
          <Primary />
        </div>
       {/* <Props story={PRIMARY_STORY} /> */}
      </div>
      <Stories title="Examples" />
      <Description />
    </>
  );
};
