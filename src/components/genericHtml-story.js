import React from 'react';
import { storiesOf } from '@storybook/react';

import HtmlComponent from '../documentation/HtmlComponent';

import readme from '../documentation/HTML-README.md';
import handlebars from 'handlebars/dist/handlebars.min.js';

function importAll(r) {
  return r.keys().map(r);
}

/* Import all html documents */
const req = require.context('./', true, /\.hbs$/);
//const reqConfig = require.context('./', true, /\.config.js$/);

const htmlData = importAll(req);

let keys = req.keys();

keys.forEach(function(element, i) {
  var config = {};

  //let configKeys = reqConfig.keys();

  var split = element.split('/');

  const additionalName = split[split.length - 1]
    .replace('.hbs', '')
    .replace(split[split.length - 2] + '-', ' ');

  storiesOf('Components|' + split[split.length - 2], module)
    .addDecorator(story => {
      var template = handlebars.compile(htmlData[i]);

      //.replace('.hbs', '.config.js')

      //console.log('config', config, element.replace('.hbs', '.config.js'), i);

      var result = template(config);
      //result = "";
      //htmlData[i]

      return <HtmlComponent html={result}>{story()}</HtmlComponent>;
    })
    .add('html ' + additionalName, () => null, {
      info: {
        text: readme,
        source: false,
        propTables: false,
      },
    });
});
