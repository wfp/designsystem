import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Story from '.';

export default {
  title: 'Components/Story',
  component: Story,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <Story {...args}>
    {' '}
    <h2 className="wfp--story__sub-title">
      Funding facility allows for scale-up of emergency operation
    </h2>
    <h1 className="wfp--story__title">WFP’s Immediate Response Account</h1>
    <p className="wfp--markup">
      In mid-2016, widespread inter-ethnic tensions and conflict descended on
      the Kasai region of the Democratic Republic of Congo (DRC), claiming
      countless lives and causing massive displacement. The Kasai crisis
      unfolded within a country already struggling with a protracted and
      underfunded emergency in the east. Since the emergence of the Kasai
      crisis, funding shortfalls proved to be a major challenge to WFP’s
      response.
    </p>
    <h2>Secondary heading</h2>
    <p>
      The scale of the food security and nutrition crisis in Kasai is immense.
      In September 2017, the{' '}
      <span className="wfp--inline-highlight">
        World Food Programme (WFP)’s Emergency Food Security Assessment
      </span>{' '}
      found that there were 3.2 million severely food insecure people in this
      region alone. In addition, 400,000 children are at risk of dying from
      severe acute malnutrition without urgent life-saving assistance.
    </p>
    <h3>Smaller Heading (h3)</h3>
    <ul className="wfp--story__list">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consetetur sadipscing elitr</li>
      <li>Sed diam nonumy eirmod tempor invidunt ut labore et dolore</li>
    </ul>
    <p>
      The scale of the food security and nutrition crisis in Kasai is immense.
      In September 2017, the World Food Programme (WFP)’s Emergency Food
      Security Assessment found that there were 3.2 million severely food
      insecure people in this region alone. In addition, 400,000 children are at
      risk of dying from severe acute malnutrition without urgent life-saving
      assistance.
    </p>
    <hr className="wfp--story__divider" />
    <p>
      The scale of the food security and nutrition crisis in Kasai is immense.
      In September 2017, the World Food Programme (WFP)’s Emergency Food
      Security Assessment found that there were 3.2 million severely food
      insecure people in this region alone. In addition, 400,000 children are at
      risk of dying from severe acute malnutrition without urgent life-saving
      assistance.
    </p>
    <hr className="wfp--story__divider--lg" />
    <p>
      The scale of the food security and nutrition crisis in Kasai is immense.
      In September 2017, the World Food Programme (WFP)’s Emergency Food
      Security Assessment found that there were 3.2 million severely food
      insecure people in this region alone. In addition, 400,000 children are at
      risk of dying from severe acute malnutrition without urgent life-saving
      assistance.
    </p>
  </Story>
);

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
