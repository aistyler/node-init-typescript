import React, { useContext } from "react";
import { PageProps } from "gatsby";

import View from "~/page-views/login";

import { AuthContext } from "~/libs/auth/context";
import { LocaleContext, useLocalization } from "gatsby-theme-my-i18n";

interface Props extends PageProps {}

const Page: React.FC<Props> = ({ location }) => {
  const { isAuthenticated, login } = useContext(AuthContext);
  // localized path
  const locale = useContext<string>(LocaleContext);
  const { defaultLang, prefixDefault, localizedPath } = useLocalization();
  const path = localizedPath({
    defaultLang,
    prefixDefault,
    locale,
    path: "/",
  });

  return (
    <View
      redirectPath={path}
      isAuthenticated={isAuthenticated}
      loginFunc={login}
      location={location}
    />
  );
};

export default Page;
