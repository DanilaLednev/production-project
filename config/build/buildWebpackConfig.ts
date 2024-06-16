import webpack from 'webpack';

import { BuildOptions, BuildPaths } from './types/config';
import { buildPlugin } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { biuldResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

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
