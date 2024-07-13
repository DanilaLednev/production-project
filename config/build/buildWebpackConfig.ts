import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugins';
import { biuldResolvers } from './buildResolvers';
import { BuildPaths } from './types/config';

export function buildWebpackConfig(options: {
  mode: 'production' | 'development';
  apiUrl: string;
  port: number;
  paths: BuildPaths;
  isDev: boolean;
  project: 'storybook' | 'frontend' | 'jest';
}): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
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
