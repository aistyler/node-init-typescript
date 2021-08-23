import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";

import { Layout, Login } from "@/components";

import { siteMetadata } from "@/src/site-config";

interface Props extends WithTranslation {
  location: Location;
  redirectPath: string;
  isAuthenticated: () => boolean;
  loginFunc: (identifier: string, password: string) => any;
}

const View: React.FC<Props> = ({ redirectPath, isAuthenticated, loginFunc, location, t }) => {
  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle="Login">
      <Login
        isAuthenticated={isAuthenticated}
        login={loginFunc}
        redirectPath={redirectPath}
        isPopup={false}
        t={t}
      />
    </Layout>
  );
};

export default withTranslation(["common", "page-login"])(View);
