import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const config: Configuration = {
  mode: 'production',
  optimization: {
    minimize: true,
  },
};

export default merge(commonConfig, config);
