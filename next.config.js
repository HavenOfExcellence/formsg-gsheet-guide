const webpack = require("webpack");

module.exports = {
  basePath: "/formsg-gsheet-guide",
  assetPrefix: "/formsg-gsheet-guide/",
  // webpack: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.ASSET_PREFIX": JSON.stringify('formsg-gsheet-guide'),
  //     })
  //   );

  //   return config;
  // },
};
