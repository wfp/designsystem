const path = require('path');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const { i18n } = require('./next-i18next.config');

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    //config.resolve.alias['react'] = path.resolve('./node_modules/react');
    return config;
  },
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  experimental: { scrollRestoration: true, images: { layoutRaw: true } },
});
