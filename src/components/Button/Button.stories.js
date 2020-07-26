import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text } from '@storybook/addon-knobs';
import { buttonKinds } from '../../prop-types/types';

import { iconAddGlyph, iconSearch } from '@wfp/icons';

import markdown from './README.mdx';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
  /*argTypes: {
    children: { control: 'text' },
  },*/
};

const props = () => ({
  className: 'some-class',
  href: text('The link href (href)', '#'),
  onClick: ((handler) => (evt) => {
    evt.preventDefault(); // Prevent link from being followed for demo purpose
    handler(evt);
  })(action('onClick')),
});

export const ButtonRegular = (args) => <Button {...args} />;
ButtonRegular.args = {
  children: 'Button',
  href: '#',
};

export const ButtonKind = (args) => (
  <>
    {buttonKinds.map((e) => (
      <div
        style={{
          display: 'inline-block',
          background: e === 'inverse' ? '#ccc' : '',
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
  href: '#',
};

const hello = `
By changing the \`kind\` prop you can use different styles of the button.

\`primary\` buttons should be used for the principle call to action
on the page.

\`secondary\` buttons should be used for secondary actions on each page.

\`tertiary\` buttons should be used for simple actions on the page.

\`accent\` buttons should be used for very important actions and only once or twice on each page

\`danger\` buttons should be used for a negative action (such as Delete) on the page.

\`danger--primary\` buttons should be used for a negative principle call to action (such as Delete) on the page.

\`ghost\` buttons should be used in places where a regular button would draw too much attention and look similar to links.

\`inverse\` buttons should be used on dark backgrounds.

\`navigation\` buttons should be only used in the main navigation.

`;

ButtonKind.story = {
  name: 'kind parameter',
  parameters: {
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
    {''} <Button {...args} icon={iconAddGlyph} kind="tertiary"></Button>{' '}
    <Button {...args} icon={iconAddGlyph} iconReverse kind="tertiary">
      With iconReverse
    </Button>
  </>
);

const helloButtonIcon = `
When words are not enough, icons can be used in buttons to better communicate what the button does. Icons should be
always paired with text whenever possible.
`;

ButtonIcon.story = {
  name: 'with icon',
  parameters: {
    docs: {
      storyDescription: helloButtonIcon,
    },
  },
};

export const Small = (args) => (
  <>
    <Button small>Small button</Button>{' '}
    <Button {...args} icon={iconAddGlyph} kind="tertiary" small>
      With icon
    </Button>{' '}
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
