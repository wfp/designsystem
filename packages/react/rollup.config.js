('use strict');

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import stripBanner from 'rollup-plugin-strip-banner';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';
import typescript from '@rollup/plugin-typescript';

const baseConfig = {
  input: './src/index.ts',

  external: [
    ...Object.keys(packageJson.peerDependencies),
    ...Object.keys(packageJson.dependencies),
    'prop-types',
  ],
  plugins: [
    nodeResolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      sourceMap: true,
      compilerOptions: {
        declaration: true,
      },
      exclude: ['**/__tests__', '**/*.test.ts', '**/*.stories.tsx'],
    }),
    babel({
      babelrc: false,
      exclude: ['node_modules/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['extends browserslist-config-carbon'],
            },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        'dev-expression',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
      ],
      babelHelpers: 'bundled',
    }),
    stripBanner(),
  ],
};

const umdExternalDependencies = Object.keys(
  packageJson.peerDependencies
).filter((dependency) => dependency !== 'carbon-components');

const umdBundleConfig = {
  input: baseConfig.input,
  treeshake: {
    propertyReadSideEffects: false,
    moduleSideEffects: 'no-external',
  },
  external: [...umdExternalDependencies, 'prop-types'],
  output: {
    file: 'es/index.js',
    format: 'es',
    exports: 'named',
    sourcemap: true,
  },
  /*{
      name: 'WfpUiReact',
      format: 'umd',
      globals: {
        classnames: 'classNames',
        'prop-types': 'PropTypes',
        react: 'React',
        'react-dom': 'ReactDOM',
        //'@wfp/icons': 'WfpIcons',
      },
    },*/
};

module.exports = [
  // TODO: update configuration to correctly support tree-shaking for React
  // components. See:
  // https://github.com/carbon-design-system/carbon/issues/5442
  // Generates the following bundles:
  // ESM:       es/index.js
  // CommonJS: lib/index.js
  {
    ...baseConfig,
    output: [
      /*{
        format: 'esm',
        file: 'es/index.js',
      },*/
      {
        format: 'cjs',
        file: 'lib/index.js',
      },
    ],
  },

  // Generate the development UMD bundle:
  // UMD: umd/carbon-components-react.js
  {
    ...umdBundleConfig,
    plugins: [
      ...baseConfig.plugins,
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    output: {
      ...umdBundleConfig.output,
      format: 'esm',
      file: 'es/index.js',
    },
  },
  {
    ...umdBundleConfig,
    plugins: [
      ...baseConfig.plugins,
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    output: {
      ...umdBundleConfig.output,
      file: 'umd/index.js',
    },
  },

  // Generate the production UMD bundle:
  // UMD: umd/carbon-components-react.min.js
  {
    ...umdBundleConfig,
    plugins: [
      ...baseConfig.plugins,
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
    output: {
      ...umdBundleConfig.output,
      file: 'umd/index.min.js',
    },
  },
];
