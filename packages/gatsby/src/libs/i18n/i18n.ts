// i18n.ts using react-i18next

import i18next, { Resource, ResourceLanguage, i18n as I18N } from "i18next";
import { initReactI18next } from "react-i18next";

import { i18nextOptions, enabledLocales } from "@/src/i18n/i18next-config";

const useStaicLoading = true;

const i18nInstance = i18next.createInstance();
const resources: Resource = !useStaicLoading
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

i18nInstance.use(initReactI18next).init({
  resources,
  ...i18nextOptions,
});

const setLanguage = (locale: string): void => {
  i18nInstance.language = locale;
};

const loadLanguages = async (locale: string): Promise<void> => {
  if (resources[locale]) return setLanguage(locale);

  resources[locale] = {};
  i18nextOptions.ns.forEach((ns) => {
    // eslint-disable-next-line import/no-dynamic-require,global-require
    const data = require(`@/src/i18n/${locale}/${ns}.json`);
    resources[locale][ns] = data;
  });
  await i18nInstance.loadLanguages(locale);
};

export { setLanguage, loadLanguages, i18nInstance };
