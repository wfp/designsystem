import React, { FC } from 'react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Description } from './Description';
import { Primary } from './Primary';
import { Props } from './Props';
import { Stories } from './Stories';

export const DocsPage: FC = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Props />
    <Stories />
  </>
);
