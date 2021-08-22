// i18n.ts using react-i18next

import i18next, { Resource, i18n as I18N } from "i18next";
import { initReactI18next } from "react-i18next";

import { i18nextOptions } from "@/site-config/i18n/i18next-config";

const i18n = i18next.createInstance();
const resources: Resource = {};

i18n.use(initReactI18next).init({
  resources,
  ...i18nextOptions,
});

const loadLanguages = async (locale: string, ns: ""): Promise<void> => {
  if (resources[locale]) return;

  resources[locale] = {};
  i18nextOptions.ns.forEach((name) => {
    // eslint-disable-next-line import/no-dynamic-require,global-require
    const data = require(`@/site-config/i18n/${locale}/${name}.json`);
    resources[locale][name] = data;
  });
  await i18n.loadLanguages(locale);
};

export { loadLanguages, i18n };
