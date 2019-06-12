import addons, { makeDecorator } from '@storybook/addons';
import React from 'react';

export const withNotes = makeDecorator({
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    /* Import all html documents */
    const req = require.context('../../src', true, /\.hbs$/);
    const reqReadme = require.context('../../src', true, /\.md$/);

    var text = '';

    var result = /(.*\/)(\w+)(-story.js)+/.exec(context.parameters.fileName);

    var readmePath = (result[1] + 'README.md').replace('./src/', './');
    const githubPath = result[1].replace('./src/', './');

    const resultReadme = reqReadme.keys().find(fruit => fruit === readmePath);

    try {
      text = reqReadme(readmePath);
      text = text ? text.default : 'no readme';
    } catch (ex) {
      console.log('error', ex);
    }

    console.log('context', text);

    if (!text.includes('<!-- NO PROPS -->')) {
      text = `${text}
<!-- PROPS -->`;
    }
    //text = text.replace('<!-- NO PROPS -->', '');

    var githubLink = `<a class="wfp--btn wfp--btn--secondary wfp--btn--sm readme--github" href="https://github.com/wfp/ui/tree/next/src/${githubPath}">View Source on Github</a>`;

    text = `# ${
      context.kind.includes('Samples') ? context.name : ''
    } ${context.kind
      .replace('Documentation|', '')
      .replace('Components|', '')} ${githubLink}

${text}`;

    context.parameters.readme = {
      sidebar: text,
      StoryPreview: ({ children }) => (
        <React.Fragment>{children}</React.Fragment>
      ),
    };

    const storyOptions = parameters || options;

    /* const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;
    
    if (!text && !markdown) {
      throw new Error('You must set of one of `text` or `markdown` on the `notes` parameter');
    } */

    return getStory(context);
  },
});

export default withNotes;
