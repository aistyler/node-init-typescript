// site-config.js

//
// manifest by each language
//
const manifestEn = require("./i18n/en/manifest.json");
const manifestKo = require("./i18n/ko/manifest.json");

const siteConfig = {
  backgroundColor: `#20232a`,
  themeColor: `#20232a`,
  postsPerPage: 5,

  // localization
  defaultLangCode: `ko`,
  defaultLang: `ko-KR`,
  enabledLocales: `ko en`,
  localeConfigPath: `${__dirname}/i18n/locale-config.json`,
  locales: [manifestKo, manifestEn],
};

// site metadata for gatsby
const siteMetadata = {
  title: "NodeInit Gatsby",
  url: "http://localhost:8000",
  pathPrefix: "",
  author: `@peterhs.kang`,
  twitter: `peterhskang`,
  copyright: `Copyright © 2020.`,
};

module.exports = {
  siteConfig,
  siteMetadata,
};
