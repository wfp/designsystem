import React from 'react';
import ContentSwitcher from './ContentSwitcher';
import markdown from './README.mdx';
import Switch from '../Switch';
import { Add16, AddCircle } from '@un/icons-react';

export default {
  title: 'Components/Content Related/ContentSwitcher',
  component: ContentSwitcher,
  subcomponents: { Switch },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => {
  const handleChange = () => {
    // console.log('handle any onChange here');
  };
  return (
    <ContentSwitcher {...args} onChange={handleChange}>
      <Switch name="one" text="First section" />
      <Switch name="two" text="Second section" />
      <Switch name="three" text="Third section" />
    </ContentSwitcher>
  );
};

Regular.args = {
  children: 'ContentSwitcher',
};

const regularsourcecode = `
import { ContentSwitcher , Switch } from "@un/react";

<ContentSwitcher onChange={() => {}}>
  <Switch
    name="one"
    text="First section"
  />
  <Switch
    name="two"
    text="Second section"
  />
  <Switch
    name="three"
    text="Third section"
  />
</ContentSwitcher>
`;
Regular.story = {
  parameters: {
    docs: {
      source: {
        code: regularsourcecode,
      },
    },
  },
};

export const ButtonSwitch = (args) => {
  const handleChange = () => {
    // console.log('handle any onChange here');
  };
  return (
    <ContentSwitcher {...args} onChange={handleChange}>
      <Switch kind="button" name="one" text="First section" />
      <Switch kind="button" name="two" text="Second section" />
      <Switch kind="button" name="three" text="Third section" />
    </ContentSwitcher>
  );
};

ButtonSwitch.args = {
  children: 'ContentSwitcher',
};

const description = `

#### Default types of switch state

| kind   |  Description  |
|----------|-------------|
| \`anchor\` | (Default) |
| \`button\` | experimental   |
`;

ButtonSwitch.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

/*
export const withIcon = (args) => {
  const handleChange = () => {
    // console.log('handle any onChange here');
  };
  return (
    <ContentSwitcher {...args} onChange={handleChange}>
      <Switch kind="button" name="one" text="First section" icon={AddCircle} />
      <Switch kind="button" name="two" text="Second section" icon={AddCircle} />
      <Switch kind="button" name="three" text="Third section" icon={AddCircle} />
    </ContentSwitcher>
  );
};

withIcon.args = {
  children: 'ContentSwitcher',
};

const desc = `Specify icon to be used in the switch element. \`icon\` property on \`<switch/>\` expects an element `;

withIcon.story = {
  parameters: {
    docs: {
      storyDescription: desc,
    },
  },
};
*/
