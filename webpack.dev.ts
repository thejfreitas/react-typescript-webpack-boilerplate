import { Configuration } from "webpack";
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import 'webpack-dev-server';

const config: Configuration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
};

export default merge(commonConfig, config);
