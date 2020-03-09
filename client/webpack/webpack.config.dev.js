const path = require('path');
const port = 3000;
const publicPath = `http://localhost:${port}/dist/`;

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom'],
    admin: './src/containers/Admin/index.jsx',
    dashboard: './src/containers/Dashboard/index.jsx',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
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
          { loader: require.resolve('style-loader') },
          { loader: require.resolve('css-loader') },
          { loader: require.resolve('sass-loader') },
        ],
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
  devServer: {
    port,
    publicPath,
    contentBase: ['public', 'dist'],
    historyApiFallback: {
      rewrites: [
        { from: /^(\/.*)*$/, to: 'dashboard.html' },
        { from: /^\/admin(\/.*)*$/, to: 'admin.html' },
      ],
    },
  },
};
