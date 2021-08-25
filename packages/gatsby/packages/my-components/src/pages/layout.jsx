import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { withTranslation } from "react-i18next";

const Layout = ({ t }) => {
  return (
    <Container >
      <Container className="text-center">
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
    </Container>
  );
};

export default withTranslation(["common"])(Layout);
