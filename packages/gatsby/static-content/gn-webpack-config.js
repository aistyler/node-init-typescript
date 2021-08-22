// webpack config for gatsby-node.js

const path = require("path");

//
// custom webpack config
//
// See https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/

const { webpack: aliases } = require("../pathconfig.json");

const customPathAlias = {
  resolve: {
    roots: [path.resolve(__dirname, "../")],
    alias: Object.keys(aliases).reduce((acc, key) => {
      acc[key] = path.resolve(__dirname, aliases[key]);
      return acc;
    }, {}),
  }
}

module.exports = ({ actions }) =>
  actions.setWebpackConfig({
    resolve: {
      ...customPathAlias.resolve,
    },
  }
);

module.exports.customPathAlias = customPathAlias;
