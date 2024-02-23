const path = require('path');

module.exports = {
  entry: './apps/data_visualization/static/data_visualization/js/main.js',
  output: {
    path: path.resolve(__dirname, 'apps/data_visualization/static/data_visualization/dist'),
    filename: 'bundle.js' // The name of the bundled files
  },
  mode: 'production',
  devtool: 'source-map', // Add this line for source mapping
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
