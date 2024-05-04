
import  webpack from 'webpack';
import  HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config';

export function buildPlugin({paths, isDev}: BuildOptions ): webpack.WebpackPluginInstance[] {

  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


  return  [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new  MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}