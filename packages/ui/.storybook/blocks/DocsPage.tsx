import React, { FC } from 'react';
import { Subtitle } from './Subtitle';
import { Primary } from './Primary';
import { Description } from './Description';
import { IntroDescription } from './IntroDescription';

import { Props } from './Props';

import { Stories } from './Stories';
import { PRIMARY_STORY } from './types';

import { Title } from '@storybook/addon-docs/blocks';
import HelpUsImprove from '../HelpUsImprove';

/*export const DocsPage: FunctionComponent<DocsStoryProps> = (props) => {
export const DocsPage: FC = (props) => {
  return (
*/
export const DocsPage: FC = () => (
  <>
    <IntroDescription />
    <div className="sticky-preview-wrapper">
      <div className="sticky-preview">
        <Primary />
      </div>
      <Props story={PRIMARY_STORY} />
    </div>
    <Stories title="Examples" />
    <Description />
    <HelpUsImprove />
  </>
);
//};
