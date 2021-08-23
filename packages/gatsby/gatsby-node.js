// gatsby-node.js
const mm = require("micromatch");

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

//const { onCreateNode: onCreateNodePosts, createPages: createPagesPosts } = require("./gatsby/gn-post-pages");
//const { createPages: createPagesProfile } = require("./gatsby/gn-profile-pages");
const { createPages: createPagesProfile } = require("./config/gn-profile-mdx-pages");
const customWebpackConfig = require("./config/gn-webpack-config");

exports.createPages = async (ctx) => {
  //
  // Create pages
  //

  // profile pages
  await createPagesProfile(ctx);
};

const ignorePatterns = [
  // story files
  `**/*.stories.(jsx|tsx)`,
];

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  // remove ignored files
  if (mm.isMatch(page.componentPath, ignorePatterns)) {
    console.log("ignore file deleted:", JSON.stringify(page.path));
    deletePage(page);
  }
};

exports.onCreateWebpackConfig = (ctx) => {
  //
  // Customize webpack config
  //
  customWebpackConfig(ctx);
};
