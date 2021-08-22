// theme plugins for gatsby-config.js
const {
  siteConfig: { defaultLangCode, enabledLocales, localeConfigPath },
} = require("../src/site-config/site-config");

module.exports = [
  `gatsby-plugin-sass`,
  // support .module.css
  `gatsby-plugin-dts-css-modules`,
  {
    // See https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/
    resolve: `gatsby-theme-my-i18n`,
    options: {
      defaultLang: defaultLangCode,
      locales: enabledLocales,
      prefixDefault: false,
      configPath: require.resolve(localeConfigPath),
    },
  },
];
