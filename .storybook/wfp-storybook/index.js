import addons, { makeDecorator } from '@storybook/addons';
import React from 'react';

export const withNotes = makeDecorator({
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    /* Import all html documents */
    const req = require.context('./', true, /\.hbs$/);
    var text = '';
    console.log('context', context.parameters.fileName);

    var result = /[^/]*$/.exec(context.parameters.fileName)[1];

    console.log('result', result);
    try {
      text = require(`../../src/components/${context.kind.replace(
        'Components|',
        ''
      )}/README.md`);
      // do stuff
    } catch (ex) {}

    let keys = req.keys();

    //context.parameters.options.panelPosition = 'bottom';

    //addParameters({ options: { panelPosition: 'bottom' } });

    /* context.parameters.info = {
      inline: inline,
      text: text,
    }; */

    //var filename = context.parameters.fileName;
    //filename = filename ? filename.substr(0, filename.lastIndexOf('/')) : undefined;

    var kind = context.kind;
    kind = kind.replace('Components|', 'components/');
    //foldername = filename ? filename.substr(0, filename.lastIndexOf('/')) : undefined;

    if (!text.includes('<!-- NO PROPS -->')) {
      text = `${text}
<!-- PROPS -->`;
    }
    //text = text.replace('<!-- NO PROPS -->', '');

    var githubLink = kind.includes('components/')
      ? `<a class="wfp--btn wfp--btn--secondary wfp--btn--sm readme--github" href="https://github.com/wfp/ui/tree/next/src/${kind}">View Source on Github</a>`
      : '';

    text = `# ${context.kind.replace('Components|', '')} ${githubLink}

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
