import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugin } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { biuldResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugin(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: biuldResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
