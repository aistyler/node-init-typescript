// static pages plugins for gatsby-config.js

module.exports = [
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/../src/pages`,
      ignore: {
        // default value: template-*, __tests__/*, *.test.jsx?, *.spec.jsx?, *.d.tsx?,
        // *.json, *.yaml, _*, .*
        patterns: [
          // story files
          `**/*.stories.(jsx|tsx)`,
        ],
      },
    },
  },
  // static pages
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "profile", // node.sourceInstanceName
      path: `${__dirname}/../static-content/page-data/profile`,
    },
  },
  // Images to be optimised
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/../static-content/images`,
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
