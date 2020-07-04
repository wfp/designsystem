import React from 'react';
import Table from './Table';
import ReactDOMServer from 'react-dom/server';

export default {
  title: 'Table/Button',
  component: Table,
  /*parameters: {
    storySource: {
      source: 'custom source',
    },
  },*/
};

export const withText = ({ story }) => <button>Hello Button{story}</button>;

export const withEmoji = () => {
  //console.log(ReactDOMServer.renderToString(<Table />));
  return (
    <button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  );
};
