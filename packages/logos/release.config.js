module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/changelog',
    '@semantic-release/git',
    [
      'semantic-release-ado',
      {
        varName: 'nextRelease',
        setOnlyOnRelease: false,
      },
    ],
  ],

  release: {
    branches: ['master', 'next', 'feat/*', { name: 'alpha', prerelease: true }],
  },
};
