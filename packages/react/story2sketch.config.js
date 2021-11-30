module.exports = {
  output: 'stories.asketch.jsonframe.json',
  url: 'http://localhost:9000/iframe.html',
  concurrency: 1,
  symbolGutter: 200,
  viewports: {
    narrow: {
      width: 320,
      height: 1200,
      symbolPrefix: 'Mobile/',
    },
    standard: {
      width: 1200,
      height: 1200,
      symbolPrefix: 'Desktop/',
    },
  },
  pageTitle: 'WFP UI',
  stories: [
    {
      kind: 'Footer',
      stories: [
        {
          name: 'Internal',
        },
      ],
    },
    {
      kind: 'MainNavigation',
      stories: [
        {
          name: 'default',
        },
      ],
    },
    {
      kind: 'Table',
      stories: [
        {
          name: 'default',
        },
      ],
    },
  ],
};
