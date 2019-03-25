import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';
import { addParameters, configure, addDecorator } from '@storybook/react';

function renderMarkdown(text, options) {
  return marked(text, { ...marked.defaults, ...options });
}

export const withNotes = makeDecorator({
  name: 'withNotesbb',
  parameterName: 'notesbb',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    /* Import all html documents */
    const req = require.context('./', true, /\.hbs$/);

    var text = '';

    try {
      text = require(`../../src/components/${context.kind}/README.md`);
      // do stuff
    } catch (ex) {}

    //const htmlData = importAll(req);

    let keys = req.keys();

    //keys.forEach(function(element, i) {

    const inline = context && !context.kind.indexOf(' ') == 0 ? true : false;

    console.log('context');
    context.parameters.notes = 'ssss';

    context.parameters.info = {
      inline: inline,
      text: text,
    };

    const storyOptions = parameters || options;

    /*parameters({
      info: {
        inline: true,
      }
    });*/

    /* const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;
    
    if (!text && !markdown) {
      throw new Error('You must set of one of `text` or `markdown` on the `notes` parameter');
    } */

    return getStory(context);
  },
});

export default withNotes;
