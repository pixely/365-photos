import webpack from 'webpack';
import path from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const sassLoaders = [
  'style',
  'css-loader?sourceMap',
  'postcss-loader?sourceMap',
  'sass-loader?sourceMap',
];

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/js/index'),
  ],
  target: 'web',
  output: {
    path: `${__dirname}/dist`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new StyleLintPlugin({ configFile: '.stylelintrc' }),
    new HtmlWebpackPlugin({
      title: 'Development App',
      template: 'src/index.ejs',
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loader: sassLoaders.join('!') },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },
};
