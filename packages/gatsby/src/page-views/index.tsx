import React from "react";
import { ApolloError } from "@apollo/client";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { withTranslation, WithTranslation } from "react-i18next";

import { Layout, Link, AuthButton } from "@/components";
import { siteMetadata } from "@/src/site-config";

interface Props extends WithTranslation {
  location: Location;
  loading?: boolean;
  error?: ApolloError;
  data?: any;
  user?: Gql.UsersPermissionsMe;
}

const View: React.FC<Props> = ({ loading, error, data, location, user, t, tReady }) => {
  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle={data ? data.title : ""}>
      <Container className="text-center">
        <Row>
          <Col>
            <Link to="/profile">{t("page-index:profile")}</Link>
          </Col>
          <Col>
            <AuthButton user={user} t={t} />
          </Col>
        </Row>

        {loading && (
          <Row>
            <Col>
              <p>{t("pageLoading")}</p>
            </Col>
          </Row>
        )}
        {error && (
          <Row>
            <Col>
              <p>{t("offlineMode")}</p>
              <p> Error: {error.message} </p>
            </Col>
          </Row>
        )}
        {data && (
          <Row className="justify-content-center my-3">
            <Col>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </Col>

            <Col md="6">
              <ListGroup>
                <ListGroup.Item action href="https://react-bootstrap.github.io/" target="_blank">
                  react-bootstrap
                </ListGroup.Item>
                <ListGroup.Item action href="https://react-icons.netlify.com" target="_blank">
                  react-icons
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
                  target="_blank"
                >
                  gatsby-plugin-sass
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default withTranslation(["common", "page-index"])(View);
