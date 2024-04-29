//*  момент на котором стоит акцентировать внимание это то что порядок при котором лоудеры возвращаются в массиве имеет значение и по-хорошему выносить Вот так Вот отдельный лоудеры в переменные, чтобы потом мы чётко могли видеть последовательность этих лолдеров в массиве.

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
       isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), //? auto: /\.module\./ регулярка вместо функции для модульных файлов со стилями
            localIdentName: isDev
             ? '[path][name]__[local]--[hash:base64:5]'
             : '[hash:base64:8]'
          }
        }
      },
       
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

// если не используем typescript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    cssLoaders
  ]
} 