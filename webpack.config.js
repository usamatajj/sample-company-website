/* eslint-disable */
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: 'development',
  /** "entry"
   * the entry point
   */
  entry: './src/index.tsx',
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.join(__dirname, 'public'),
    /** "filename"
     * the name of the output file
     */
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: 'web',
  devServer: {
    historyApiFallback: true,
    /** "port"
     * port of dev server
     */
    host: 'localhost',
    port: '9500',
    /** "static"
     * This property tells Webpack what static file it should serve
     */
    static: path.resolve(__dirname, 'public'),
    /** "open"
     * opens the browser after server is successfully started
     */
    open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true,
    compress: true,
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */

    rules: [
      {
        test: /\.(ts|js)x?$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        }, //loader which we are going to use
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  /**
   * "Plugins"
   */
  plugins: [
    new Dotenv({ path: './.env', safe: true }),
    new HtmlWebpackPlugin({
      favicon: false,
      showErrors: true,
      title: 'Index HTML File Loader',
      hash: true,
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
};
