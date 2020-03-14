const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react'],
    admin: './src/containers/Admin/index.jsx',
    guests: './src/containers/Dashboard/index.jsx',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: process.env.PUBLIC_PATH || '',
    filename: `[name].js`,
  },
  resolve: { extensions: ['.ts', '.jsx', '.js'] },
  module: {
    rules: [
      {
        test: [/\.tsx?$/, /\.jsx?$/],
        loader: 'ts-loader',
        exclude: [/dist/, /node_modules/],
      },
      {
        test: [/\.scss$/],
        exclude: [/dist/, /node_modules/],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: require.resolve('css-loader') },
          { loader: require.resolve('sass-loader') },
        ],
      },
      {
        test: [/node_modules\/miragejs\//],
        use: 'null-loader',
      },
      {
        exclude: [/\.ts$/, /\.jsx$/, /\.scss$/, /\.js$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // Lower for splitting on smaller modules
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: '[id].css',
    }),
  ],
};
