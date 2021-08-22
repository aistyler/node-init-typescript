const { customPathAlias } = require("../static-content/gn-webpack-config");

const stories = {
  "views": [
    "../src/page-views/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/views/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "all": [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
};

module.exports = {
  "stories": stories[process.env.SB_STORIES || "all"],  
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-apollo-client",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/|(gatsby-theme).*\/)/];
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      [require.resolve("babel-plugin-remove-graphql-queries"), {
        stage: config.mode === `development` ? "develop-html" : "build-html",
        staticQueryDir: "page-data/sq/d",
      }]
    );
    // scss loader
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ];
    config.resolve.extensions = [
      ...config.resolve.extensions,
      ".scss"
    ];
    // resolve from gatsby webpack config
    config.resolve = {
      ...config.resolve,
      ...customPathAlias.resolve
    };
    return config;
  },
}
