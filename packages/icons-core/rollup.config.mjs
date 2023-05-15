import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
const config = [
  {
    input: 'build/compiled/index.js',
    output: {
      file: 'build/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['axios', 'os', 'url'],
    plugins: [typescript()],
  },
  {
    input: 'build/compiled/index.js',
    plugins: [dts()],
    output: {
      file: `dist/bundle.d.ts`,
      format: 'es',
    },
  },
];
export default config;
