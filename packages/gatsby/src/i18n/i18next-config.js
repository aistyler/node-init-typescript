const {
  siteConfig: { defaultLangCode, enabledLocales: _enabledLocales },
} = require("../site-config");

const defaultNS = `common`;
const fallbackLng = `en`;

const i18nextOptions = {
  lng: defaultLangCode,
  defaultNS,
  ns: [defaultNS, "page-index", "page-login"],
  fallbackLng,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  missingKeyHandler: (lng, ns, key, fallbackValue) =>
    // eslint-disable-next-line no-console
    console.log(`*** Missing Key: ${lng}:${ns}.${key} => ${fallbackValue}`),
};

const enabledLocales = _enabledLocales.split(" ");
module.exports = {
  defaultNS,
  i18nextOptions,
  enabledLocales,
  defaultLangCode,
};
