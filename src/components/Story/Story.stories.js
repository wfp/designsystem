import React from 'react';
import markdown from './README.mdx';
import Text from '../Text';
import { textLookup } from '../Text/Text';
import Story from '.';

export default {
  title: 'Components/Content Related/Story',
  component: Story,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const StoryText = (args) => (
  <Story {...args}>
    {' '}
    <h2 className="wfp--story__subtitle">
      Funding facility allows for scale-up of emergency operation
    </h2>
    <h1 className="wfp--story__title">WFP’s Immediate Response Account</h1>
    <p className="wfp--markup">
      In mid-2016, widespread inter-ethnic tensions and conflict descended on
      the Kasai region of the <a href="#">Democratic Republic of Congo (DRC)</a>
      , claiming countless lives and causing massive displacement. The Kasai
      crisis unfolded within a country already struggling with a protracted and
      underfunded emergency in the east. Since the emergence of the Kasai
      crisis, funding shortfalls proved to be a major challenge to WFP’s
      response.
    </p>
    <h2>Secondary heading</h2>
    <p>
      The scale of the food security and nutrition crisis in Kasai is immense.
      In <a href="#">September 2017</a>, the{' '}
      <span className="wfp--inline-highlight">
        World Food Programme (WFP)’s Emergency Food Security Assessment
      </span>{' '}
      found that there were 3.2 million severely food insecure people in this
      region alone. In addition, 400,000 children are at risk of dying from
      severe acute malnutrition without urgent life-saving assistance.
    </p>
    <h3>
      Smaller Heading (h3) with <a href="#">link</a>
    </h3>
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

StoryText.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};