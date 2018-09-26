/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import SingleComponent from '../../documentation/SingleComponent';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import HtmlComponent from '../../documentation/HtmlComponent';
import Html from '!!raw-loader!./Link.html';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

import Link from '../Link';

const additionalProps = {
  onClick: () => {
    console.log('Clicked!');
  }, // eslint-disable-line no-console
  className: 'some-class',
};

storiesOf('Link', module)
  .addDecorator(withTests('Link'))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'Default',
    `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    () => (
      <Link href="#" {...additionalProps}>
        Link
      </Link>
    )
  );

storiesOf('Link', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );
