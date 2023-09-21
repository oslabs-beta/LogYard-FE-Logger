const path = require('path');
const { NODE_ENV, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${NODE_ENV === 'production' ? '.min' : ''}.cjs`;
module.exports = {
  mode: NODE_ENV || 'development',
  // externals: [
  //   // Use a regular expression to match all modules in node_modules
  //   /^node_modules\/.*/,
  // ],
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    libraryTarget: 'umd',
  },
};