const path = require('path');

module.exports = {
  entry: './apps/data_visualization/static/data_visualization/js/webgl.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // The folder where Webpack will place the bundled files
    filename: 'bundle.js' // The name of the bundled files
  },
  mode: 'production',
  // Add your loaders, plugins, etc. here
};
