// gatsby-node.js

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

//const { onCreateNode: onCreateNodePosts, createPages: createPagesPosts } = require("./gatsby/gn-post-pages");
//const { createPages: createPagesProfile } = require("./gatsby/gn-profile-pages");
const { createPages: createPagesProfile } = require("./static-content/gn-profile-mdx-pages");
const customWebpackConfig = require("./static-content/gn-webpack-config");

exports.createPages = async (ctx) => {
  //
  // Create pages
  //

  // profile pages
  await createPagesProfile(ctx);
};

exports.onCreateWebpackConfig = (ctx) => {
  //
  // Customize webpack config
  //
  customWebpackConfig(ctx);
};
