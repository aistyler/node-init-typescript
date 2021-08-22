// gatsby-config.js
//require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const { siteConfig, siteMetadata } = require("./src/site-config/site-config");

const plugins_static_pages = require("./static-content/gc-plugins-static-pages");
const plugins_common = require("./static-content/gc-plugins-common");
const plugins_theme = require("./static-content/gc-plugins-theme");

const flags = {
  DEV_SSR: false,  
};

module.exports = {
  siteMetadata,
  plugins: [
    // manifest
    {
      // web app manifest (part of the PWA specification)
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: `minimal-ui`, // `stand-alone`
        icons: [
          {
            src: "/img/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        // localization
        ...siteConfig.locales[0], // default
        localize: siteConfig.locales.slice(1), // others
      },
    },

    // static pages plugins
    ...plugins_static_pages,

    // common plugins
    ...plugins_common,

    // theme plugins
    ...plugins_theme,
  ],
  flags,
};
