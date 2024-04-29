
import  webpack, { ResolveOptions } from 'webpack';


export function biuldResolvers(): ResolveOptions {

  return{
    extensions: ['.tsx', '.ts', '.js'],
  }
}