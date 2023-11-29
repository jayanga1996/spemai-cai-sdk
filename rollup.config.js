// rollup.config.js
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss  = require('rollup-plugin-postcss');
const image  = require('@rollup/plugin-image');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const nodePolyfills = require('rollup-plugin-node-polyfills');
const json = require( '@rollup/plugin-json');

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
    postcss({ // Add postcss plugin
      extract: true,
      modules: true, // Enable CSS modules (if needed)
      autoModules: true, // Automatically generate class names (if using CSS modules)
      minimize: true, // Minify the CSS
    }),
    image(),
    url(),   // Handle other file types like SVGs
    svgr(),  // Handle SVG imports as React components
    nodePolyfills(),
    json(),
    
  ],
  external: ['react', 'react-dom' ,'axios'], // Marking React and React-DOM as external dependencies
};
