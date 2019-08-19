import addons, { makeDecorator } from '@storybook/addons';
import React from 'react';

export const withNotes = makeDecorator({
  wrapper: (getStory, context, ttt) => {
    const channel = addons.getChannel();

    const contextName = context.kind.includes('Samples')
      ? context.name
      : context.kind.replace('Documentation|', '').replace('Components|', '');

    const reqReadme = require.context('../../src', true, /\.md$/);

    var text = '';

    //console.log('context', context.parameters.hideProps);

    var result = /(.*\/)(\w+)(-story.js)+/.exec(context.parameters.fileName);
    var resultName = result ? result[1] : '';

    const resultReadme = reqReadme
      .keys()
      .find(
        fruit =>
          fruit.search(new RegExp(contextName.replace(/\s/g, ''), 'i')) !== -1
      );
    const githubPath = resultReadme
      ? resultReadme.replace('./src/', './').replace('README.md', '')
      : undefined;

    try {
      text = reqReadme(resultReadme);
      text = text ? text.default : 'no readme';
    } catch (ex) {}

    if (!text.includes('<!-- NO PROPS -->') && !context.parameters.hideProps) {
      text = `${text}
<!-- PROPS -->`;
    }
    //text = text.replace('<!-- NO PROPS -->', '');

    var githubLink = `<a class="wfp--btn wfp--btn--secondary wfp--btn--sm readme--github" href="https://github.com/wfp/ui/tree/next/src/${githubPath}" target="_blank">View Source on Github</a>`;

    text = `# ${contextName} ${githubLink}

${text}`;

    context.parameters.readme = {
      sidebar: text,
      codeTheme: 'github',
      StoryPreview: ({ children }) => (
        <React.Fragment>{children}</React.Fragment>
      ),
    };

    /* const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;
     
    if (!text && !markdown) {
      throw new Error('You must set of one of `text` or `markdown` on the `notes` parameter');
    } */

    return getStory(context);
  },
});

export default withNotes;
