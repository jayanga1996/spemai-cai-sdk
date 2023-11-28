// rollup.config.js
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/my-react-library.js',
    format: 'cjs', // CommonJS format for Node compatibility
    exports: 'named',
  },
  plugins: [
    resolve(), // resolve plugin
    commonjs(), // commonjs plugin
    babel({
      babelHelpers: 'bundled', // specify the type of babel helpers
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom'], // Marking React and React-DOM as external dependencies
};
