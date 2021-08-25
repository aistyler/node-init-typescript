import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import { Layout, Login } from "@my-components";

import { siteMetadata } from "~/site-config";

interface Props extends WithTranslation {
  location: Location;
  redirectPath: string;
  isAuthenticated: () => boolean;
  loginFunc: (identifier: string, password: string) => any;
}

const View: React.FC<Props> = ({ redirectPath, isAuthenticated, loginFunc, location, t }) => {
  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle="Login">
      <Container>
        <Row>
          <Col>
            <Login
              isAuthenticated={isAuthenticated}
              login={loginFunc}
              redirectPath={redirectPath}
              isPopup={false}
              t={t}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default withTranslation(["common", "page-login"])(View);
