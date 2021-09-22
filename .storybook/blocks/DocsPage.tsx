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

export const WithMockedSearch = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const mockedParam = urlParams.get("embed");
  if (mockedParam == "min"){
    return true;
  } else {
    return false;
  }
};

export const DocsPage: FC = (props) => {
  return (
    <>
      {WithMockedSearch() ? '' : <>
         <IntroDescription />
         </>}
      <div className="sticky-preview-wrapper">
        <div className="sticky-preview">
          <Primary />
        </div>
        {WithMockedSearch() ? '' : <>
           <Props story={PRIMARY_STORY} />
         </>}
      </div>
      {WithMockedSearch() ? '' : <>
         <Stories title="Examples" />
         <Description />
         <HelpUsImprove />
         </>}
    </>
  );
};
