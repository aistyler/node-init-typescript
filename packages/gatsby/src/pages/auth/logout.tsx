import React, { useContext } from "react";
import { PageProps, navigate } from "gatsby";

import { LocaleContext, useLocalization, localizedPath } from "gatsby-theme-my-i18n";
import { Layout } from "@/components";
import { AuthContext } from "@/libs/auth/context";
import { isBrowser } from "@/libs/utils";
import { siteMetadata } from "@/site-config/site-config";

interface Props extends PageProps {}

const Page: React.FC<Props> = ({ location }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (isAuthenticated()) logout();

  // redirect to '/'
  // localized path
  const locale = useContext<string>(LocaleContext);
  const { defaultLang, prefixDefault } = useLocalization();
  const path = localizedPath({
    defaultLang,
    prefixDefault,
    locale,
    path: "/",
  });
  console.log(">>>>>>>>>", path, locale);
  // eslint-disable-next-line no-unused-expressions
  isBrowser() && navigate(path, { replace: true });

  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle="Logging out...">
      <p> Logging out... </p>
    </Layout>
  );
};

export default Page;
