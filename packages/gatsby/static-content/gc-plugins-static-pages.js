// static pages plugins for gatsby-config.js

module.exports = [
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/../src/pages`,
      ignore: [
        // ignore story files
        `*.stories.(js|ts)?(x)`,
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/../src/pages`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "profile", // node.sourceInstanceName
      path: `${__dirname}/page-data/profile`,
    },
  },
  // Images to be optimised
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/images`,
    },
  },
  // mdx
  `gatsby-remark-images`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
      ],
    },
  },
];
