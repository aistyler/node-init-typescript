import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { withTranslation, WithTranslation } from "react-i18next";

import { Layout, Link } from "../components";
import { siteMetadata } from "~/site-config";

interface Props extends WithTranslation {
  location: Location;
  data?: any;
}

const View: React.FC<Props> = ({ data, location, t, tReady }) => {
  return (
    <Layout siteMetadata={siteMetadata} location={location} pageTitle={data ? data.title : ""}>
      <Container className="text-center">
        {data && (
          <Row className="justify-content-center">
            <Col>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </Col>
          </Row>
        )}
        <Row className="justify-content-center">
          <Col>
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
      </Container>
    </Layout>
  );
};

export default withTranslation(["common", "page-index"])(View);
