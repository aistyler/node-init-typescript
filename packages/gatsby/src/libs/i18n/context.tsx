import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

// load i18n
import { loadLanguages, i18n } from "./i18n";

interface Props {
  pageContext: any;
}

const Context: React.FC<Props> = ({ children, pageContext }) => {
  const { locale } = pageContext;

  useEffect(() => {
    const updateI18N = async (): Promise<void> => {
      await loadLanguages(locale, "");
      if (locale !== i18n.language) await i18n.changeLanguage(locale);
    };
    updateI18N();
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default Context;
