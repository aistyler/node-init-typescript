import React, { useContext } from "react";
import { navigate } from "gatsby";
import { LocaleContext, useLocalization, localizedPath } from "gatsby-theme-my-i18n";

import View from "@/component-views/LocaleList";

interface Props {
  location: Location;
}

const getLangCodeFromUrl = (langConfig: any[], location: Location): string => {
  const [, langCode] = location.pathname.split("/");
  if (langCode.length !== 2 || langConfig.findIndex((e) => e.code === langCode) === -1) return "";
  return langCode;
};

const LocaleList: React.FC<Props> = ({ location }) => {
  const locale = useContext<string>(LocaleContext);
  const { config, defaultLang, prefixDefault } = useLocalization();
  const urlLangCode = getLangCodeFromUrl(config, location);

  //console.log(">>>>>>>>>>>>>> LocaleList:", locale, urlLangCode);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    if (e.target.value === locale) return;
    // refresh the current page
    const purePath = urlLangCode ? location.pathname.substr(3) : location.pathname;
    const path = localizedPath({
      defaultLang,
      prefixDefault,
      locale: e.target.value,
      path: purePath,
    });
    //console.log(">>>>>>>>>>>>>> localizedPath:", path, purePath);

    // N.B.
    // reload the current page with the selected locale
    // The locale in the context will be changed.
    navigate(path);
  }

  return <View items={config} defaultValue={urlLangCode || defaultLang} onChange={onChange} />;
};

export { LocaleList };
