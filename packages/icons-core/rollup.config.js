import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'esm',
  },
  plugins: [babel({ babelHelpers: 'bundled' })],
};

export default config;
