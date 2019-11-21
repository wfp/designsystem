import { makeDecorator } from '@storybook/addons';
import React from 'react';

export const withNotes = makeDecorator({
  wrapper: (getStory, context, ttt) => {
    const contextName = context.kind.includes('Templates')
      ? context.name
      : context.kind
          .replace('Documentation|', '')
          .replace('Components|', '')
          .replace('Navigation|', '');

    const reqReadme = require.context('../../src', true, /\.md$/);

    var text = '';

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

    var githubLink = `<a class="wfp--btn wfp--btn--secondary wfp--btn--sm readme--github" href="https://github.com/wfp/ui/tree/next/src/${githubPath}" target="_blank">View source & readme on Github</a>`;

    text = `# ${contextName} ${githubLink}
${text}`;

    context.parameters.readme = {
      sidebar: text,
      codeTheme: 'github',
      StoryPreview: ({ children }) => (
        <React.Fragment>{children}</React.Fragment>
      ),
    };
    return getStory(context);
  },
});

export default withNotes;
