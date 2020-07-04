import React from 'react';
import Table from './Table';
import ReactDOMServer from 'react-dom/server';

export default {
  title: 'Component/Component',
  component: Table,
  /*parameters: {
    storySource: {
      source: 'custom source',
    },
  },*/
};

export const withText = ({ args }) => (
  <button text="hello" {...args}>
    Hello Button
  </button>
);
withText.args = { label: 'hello' };

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
