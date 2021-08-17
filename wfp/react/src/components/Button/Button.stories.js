import React from 'react';
import { buttonKinds } from '../../prop-types/types';
import { AddGlyph16 } from '@wfp/icons-react';
import markdown from './README.mdx';
import buttonTwig from './Button.twig';
import { twig } from 'twig';
import Button from '.';

export default {
  title: 'Components/UI Elements/Button',
  component: Button,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: buttonTwig,
  },
};

export const ButtonRegular = (args) => <Button {...args} />;

ButtonRegular.args = {
  children: 'Button',
};

ButtonRegular.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jtKqyyMTOKgUTstiGvPZMl/?node-id=0%3A1',
  },
};

export const ButtonKind = (args) => (
  <>
    {buttonKinds.map((e) => (
      <div
        style={{
          display: 'inline-block',
          background: e === 'inverse' || e === 'inverse--primary' ? '#ccc' : '',
          padding: '0.3rem',
        }}>
        <Button {...args} kind={e}>
          {e}
        </Button>
      </div>
    ))}
  </>
);
ButtonKind.args = {
  children: 'Button',
};

ButtonKind.parameters = {
  code: false,
};

const hello = `
By changing the \`kind\` prop you can use different styles of the button.

| kind   |  Description  |
|----------|-------------|
| \`primary\` | the principle call to action on the page |
| \`secondary\` | secondary actions on each page   |
| \`tertiary\` | simple actions on the page |
| \`accent\` | very important actions and only once or twice on each page |
| \`danger\` | a negative action (such as Delete) on the page |
| \`danger--primary\` | a negative principle call to action (such as Delete) on the page |
| \`ghost\` | in places where a regular button would draw too much attention and look similar to links |
| \`inverse--primary\` | should be used on dark backgrounds |
| \`inverse\` | should be used on dark backgrounds |
| \`navigation\`| should be only used in the main navigation |
`;

ButtonKind.story = {
  name: 'Button kinds',
  parameters: {
    markdown: 'hello',
    layout: 'centered',
    docs: {
      storyDescription: hello,
    },
  },
};

export const ButtonIcon = (args) => (
  <>
    <Button {...args} icon={iconAddGlyph}>
      Button with icon
    </Button>
    {''} <Button {...args} icon={AddGlyph16} kind="tertiary"></Button>{' '}
    <Button {...args} icon={AddGlyph16} iconReverse kind="tertiary">
      With iconReverse
    </Button>
  </>
);

const helloButtonIcon = `
When words are not enough, icons can be used in buttons to better communicate what the button does. Icons should be
always paired with text whenever possible.


Use the \`icon\` and \`iconDescription\` prop to add an Icon to the Button. Refer to the [Icon](?selectedKind=Icon) documentation for usage.

To show the Icon on the left side use the \`iconReverse\` prop.

Using an Button with only an Icon while not beeing recommended can be achieved by leaving the Button text blank.
`;

ButtonIcon.story = {
  name: 'Button with icon',
  parameters: {
    docs: {
      storyDescription: helloButtonIcon,
    },
  },
};

export const Small = (args) => (
  <>
    <Button small>Small button</Button>{' '}
    <Button {...args} icon={AddGlyph16} kind="tertiary" small>
      With icon
    </Button>
  </>
);

const helloButtonSmall = `
Small buttons may be used when there is not enough space for a
regular sized button. This issue is most found in tables. Small button should have three words
or less.
`;

Small.story = {
  name: 'small Button',
  parameters: {
    docs: {
      storyDescription: helloButtonSmall,
    },
  },
};

export const Large = (args) => (
  <>
    <Button large>Large button</Button>{' '}
    <Button {...args} icon={AddGlyph16} kind="tertiary" large>
      With icon
    </Button>
  </>
);

const helloButtonLarge = `
Small buttons may be used when there is not enough space for a
regular sized button. This issue is most found in tables. Small button should have three words
or less.
`;

Large.story = {
  name: 'large Button',
  parameters: {
    docs: {
      storyDescription: helloButtonLarge,
    },
  },
};
