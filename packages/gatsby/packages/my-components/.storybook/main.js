const { customPathAlias } = require("../config/gn-webpack-config");
const devMode = process.env.NODE_ENV !== "production";

const stories = {
  "views": [
    "../src/page-views/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/component-views/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "all": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
};

const find_rule = (config, test) => {
  return config.module.rules.find((r) => r && r.test && r.test.toString() === test);
}

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

    //
    // support .module.css
    const cssRule = find_rule(config, `/\\.css$/`);
    // update css-loader option to support .module.css
    cssRule.use.forEach((mod) => {
      if (mod && mod.loader && mod.loader.match(/[\/\\]css-loader/g)) {
        mod.options = {
          ...mod.options,
          modules: {
            auto: true, // enable .module.css
            namedExport: true,
            exportLocalsConvention: function (name) {
              return name.replace(/-/g, "_");
            },
          }
        }
      }
    });
    /*
    const cssModuleRule = {
      ...cssRule,
      test: /\.module\.css$/,
      use: cssRule.use.map(r => {
        if (r && r.loader && r.loader.match(/[\/\\]css-loader/g)) {
          return {
            ...r,
            // see https://github.com/webpack-contrib/css-loader
            options: {
              ...r.options,
              modules: {
                
              },
            },
          };
        }
        return r;
      }),
      exclude: [],
    };
    // exclude .module.css from css rule
    cssRule.exclude = /\.module\.css$/;
    config.module.rules.push(cssModuleRule);
    */

    //
    // .scss loader
    let scssRule = find_rule(config, `/\\.scss$/`);
    if (!scssRule) {
      scssRule = {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          ...cssRule.use,
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      };
      // add new scss rule
      config.module.rules.push(scssRule);
      config.resolve.extensions.push(".scss");
    }
    //
    // .module.scss loader
    const scssModuleRule = {
      test: /\.module\.scss$/,
      use: [
        ...cssRule.use,
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    };
    config.module.rules.push(scssModuleRule);

    //
    // resolve from gatsby webpack config
    config.resolve = {
      ...config.resolve,
      ...customPathAlias.resolve
    };

    //console.log(">>>>>>>>>>>>>>>>>> RULES");
    //console.log(config.module.rules);
    return config;
  },
}
