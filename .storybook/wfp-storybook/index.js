import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';
import { addParameters, configure, addDecorator } from '@storybook/react';
import React from 'react';

function renderMarkdown(text, options) {
  return marked(text, { ...marked.defaults, ...options });
}

export const withNotes = makeDecorator({
  /*name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,*/
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    /* Import all html documents */
    const req = require.context('./', true, /\.hbs$/);
    var text = '';
    try {
      text = require(`../../src/components/${context.kind.replace(
        'Components|',
        ''
      )}/README.md`);
      // do stuff
    } catch (ex) {}

    //const htmlData = importAll(req);

    let keys = req.keys();

    //keys.forEach(function(element, i) {

    const inline = context && !context.kind.indexOf(' ') == 0 ? true : false;

    console.log('context', parameters, context);

    context.parameters.options.panelPosition = 'bottom';

    addParameters({ options: { panelPosition: 'bottom' } });

    /* context.parameters.info = {
      inline: inline,
      text: text,
    }; */

    //var filename = context.parameters.fileName;
    //filename = filename ? filename.substr(0, filename.lastIndexOf('/')) : undefined;

    var kind = context.kind;
    kind = kind.replace('Components|', 'components/');
    //foldername = filename ? filename.substr(0, filename.lastIndexOf('/')) : undefined;

    text = text.includes('<!-- NO PROPS -->') ? text : text + '<!-- PROPS -->';
    text = text.replace('<!-- NO PROPS -->', '');

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
