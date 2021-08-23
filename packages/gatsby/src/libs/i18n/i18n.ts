// i18n.ts using react-i18next

import i18next, { Resource, ResourceLanguage, i18n as I18N } from "i18next";
import { initReactI18next } from "react-i18next";

import { i18nextOptions, enabledLocales } from "@/src/i18n/i18next-config";

const useStaticLoading = true;

const resources: Resource = !useStaticLoading
  ? {}
  : enabledLocales.reduce((acc, locale) => {
      acc[locale] = {} as ResourceLanguage;
      i18nextOptions.ns.forEach((ns) => {
        // eslint-disable-next-line import/no-dynamic-require,global-require
        const data = require(`@/src/i18n/${locale}/${ns}.json`);
        acc[locale][ns] = data;
      });
      return acc;
    }, {} as Resource);

i18next.use(initReactI18next).init({
  resources,
  ...i18nextOptions,
});

const changeLanguage = (locale: string): void => {
  if (i18next.language !== locale) i18next.changeLanguage(locale);
};

const loadLanguages = async (locale: string): Promise<void> => {
  if (resources[locale]) return changeLanguage(locale);

  resources[locale] = {};
  i18nextOptions.ns.forEach((ns) => {
    // eslint-disable-next-line import/no-dynamic-require,global-require
    const data = require(`@/src/i18n/${locale}/${ns}.json`);
    resources[locale][ns] = data;
  });
  await i18next.loadLanguages(locale);
};

export { changeLanguage, loadLanguages, i18next };
