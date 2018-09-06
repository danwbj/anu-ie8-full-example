const _ = require('lodash');
const path = require('path');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const webpack = require('webpack');
const pkgJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// ie 8 不支持hot-loader 这里全部注释掉
module.exports = (type) => {
  const isDev = type === 'dev';
  const isDist = type === 'dist';

  const cssLoaders = [
    {
      loader: require.resolve('css-loader'),
      options: { minimize: isDist }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        plugins: [require('autoprefixer'), require('postcss-discard-comments')]
      }
    }
  ];

  const lessLoaders = [
    {
      loader: require.resolve('less-loader'),
      options: {
        javascriptEnabled: true
      }
    }
  ];
  const miniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../'
    }
  };

  return {
    entry: _.compact([
      //   isDev && 'react-hot-loader/patch',
      //   isDev && `webpack-hot-middleware/client?http://127.0.0.1:${config.port}`,
      //   isDev && 'webpack/hot/only-dev-server',
      './src/index',
      './src/styles/normalize.css',
      './src/styles/index.less'
    ]),
    output: {
      publicPath: '',
      filename: `bundle/[name].js`,
      chunkFilename: `bundle/chunk.[name].js`,
      path: path.join(config.webpack.path.pub)
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.scss', '.less', '.css', '.json'],
      alias: {
        react: 'anujs/dist/ReactIE.js',
        'react-dom': 'anujs/dist/ReactIE.js',
        'prop-types': 'anujs/lib/ReactPropTypes.js',
        'create-react-class': 'anujs/lib/createClass.js',
        rematch: 'anujs/dist/Rematch.js',
        router: 'anujs/dist/Router.js',
        redux: 'anujs/lib/ReduxIE.js'
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015-loose', 'react'],
                plugins: [
                  'transform-class-properties',
                  [
                    'transform-es2015-classes',
                    {
                      loose: true
                    }
                  ]
                ]
              }
            },
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [miniCssLoader, ...cssLoaders]
        },
        {
          test: /\.less$/,
          use: [miniCssLoader, ...cssLoaders, ...lessLoaders]
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100,
                name: 'asset/[name].[ext]'
              }
            }
          ]
        }
      ]
    },
    mode: type === 'dev' ? 'development' : 'production',
    plugins: _.compact([
      //   isDev && new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: pkgJson.title,
        template: './src/templates/index.ejs',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: `bundle/[name].css`,
        chunkFilename: `bundle/chunk.[name].css`
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new es3ifyPlugin()
    ])
  };
};
