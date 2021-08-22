// profile pages for gatsby-node.js

const path = require("path");

const sourceInstanceName = "profile";

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Get a full list of profile data
  const data = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "${sourceInstanceName}" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
      ) {
        nodes {
          id
          childMdx {
            id
            frontmatter {
              layout
            }
            slug
          }
          relativePath
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panicOnBuild(data.errors);
    return;
  }

  //
  // create pages
  const { nodes } = data.data.allFile; //.filter(({ node }) => /^posts\//.test(node.relativePath));

  const pageTemplate = {
    profile: path.resolve("static-content/page-templates/profile/profile-mdx.tsx"),
  };

  nodes.forEach(({ childMdx: node, relativePath }, index) => {
    const { layout = "profile" } = node.frontmatter;
    const component = pageTemplate[layout];
    const pagePath = relativePath.split(".")[0];
    // find profile.ko or profile.en
    const slugFilter = `${node.slug.split(".")[0]}.*`;
    createPage({
      path: `/profile/${pagePath !== "profile" ? pagePath : ""}`,
      component,
      context: { slugFilter },
    });
  });
};

module.exports = {
  createPages,
};
