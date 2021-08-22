import React, { useContext } from "react";
import { PageProps } from "gatsby";

import { Layout, Login } from "@/components";
import { AuthContext } from "@/libs/auth/context";
import { LocaleContext, useLocalization, localizedPath } from "gatsby-theme-my-i18n";

import { siteMetadata } from "@/site-config/site-config";

interface Props extends PageProps {}

const Page: React.FC<Props> = ({ location }) => {
  const { isAuthenticated, login } = useContext(AuthContext);
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

  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle="Login">
      <Login isAuthenticated={isAuthenticated} login={login} redirectPath={path} isPopup={false} />
    </Layout>
  );
};

export default Page;
