import React from 'react';
import { storiesOf } from '@storybook/react';
import Wrapper from '../Wrapper';
import { withInfo } from '@storybook/addon-info';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Story', module)
  .addDecorator(withReadme([readme]))
  .add(
    'Default',
    withInfo({
      text: `
    Story shows full feature styled text
    `,
    })(() => (
      <Wrapper className="wfp--story" pageWidth="narrower">
        <h1 className="wfp--story__title">
          WFP’s Immediate Response Account — saving lives in the Kasai region of
          DRC
        </h1>
        <h2 className="wfp--story__sub-title">
          Funding facility allows for scale-up of emergency operation
        </h2>
        <p className="wfp--markup">
          In mid-2016, widespread inter-ethnic tensions and conflict descended
          on the Kasai region of the Democratic Republic of Congo (DRC),
          claiming countless lives and causing massive displacement. The Kasai
          crisis unfolded within a country already struggling with a protracted
          and underfunded emergency in the east. Since the emergence of the
          Kasai crisis, funding shortfalls proved to be a major challenge to
          WFP’s response.
        </p>
        <p>
          The scale of the food security and nutrition crisis in Kasai is
          immense. In September 2017, the{' '}
          <span className="wfp--inline-highlight">
            World Food Programme (WFP)’s Emergency Food Security Assessment
          </span>{' '}
          found that there were 3.2 million severely food insecure people in
          this region alone. In addition, 400,000 children are at risk of dying
          from severe acute malnutrition without urgent life-saving assistance.
        </p>
        <ul className="wfp--story--list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consetetur sadipscing elitr</li>
          <li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore</li>
        </ul>
        <p>
          The scale of the food security and nutrition crisis in Kasai is
          immense. In September 2017, the World Food Programme (WFP)’s Emergency
          Food Security Assessment found that there were 3.2 million severely
          food insecure people in this region alone. In addition, 400,000
          children are at risk of dying from severe acute malnutrition without
          urgent life-saving assistance.
        </p>
      </Wrapper>
    ))
  );