import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

// load i18n
import * as i18n from "./i18n";

interface Props {
  pageContext: any;
}

const Context: React.FC<Props> = ({ children, pageContext }) => {
  const { setLanguage, i18nInstance } = i18n;
  const { locale } = pageContext;

  if (locale !== i18nInstance.language) setLanguage(locale);

/*  
  useEffect(() => {
    const updateI18N = async (): Promise<void> => {
      await loadLanguages(locale, "");
      if (locale !== i18nInstance.language) await i18nInstance.changeLanguage(locale);
    };
    updateI18N();
  }, [locale, i18nInstance, loadLanguages]);
*/
  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default Context;
