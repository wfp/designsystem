import React, { useContext, FC } from 'react';
import { DocsContext } from '@storybook/addon-docs/dist/blocks/DocsContext';
import { DocsStory } from './DocsStory';
import { getDocsStories } from './utils';
import ReactDOMServer from 'react-dom/server';

interface PrimaryProps {
  name?: string;
}

export const Primary: FC<PrimaryProps> = ({ name }) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);

  const HtmlComponent = context.parameters.component;
  const Html = ReactDOMServer.renderToString(<HtmlComponent />);
  console.log('contexta', Html);

  let story;
  if (componentStories) {
    story = name
      ? componentStories.find((s) => s.name === name)
      : componentStories[0];
  }
  return story ? (
    <DocsStory {...story} htmlComponent={Html} expanded={false} withToolbar />
  ) : null;
};
