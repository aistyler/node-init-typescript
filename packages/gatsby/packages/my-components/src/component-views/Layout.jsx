/* eslint-disable react/display-name */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Header, Footer, Meta } from "../components";

let s = require("./layout.module.scss");
s = s.default || s;

export default ({ pageTitle, siteMetadata, location, children }) => (
  <>
    <Container fluid className={`px-0 ${s.layoutMain}`}>
      {/* Header */}
      <Row className="justify-content-center">
        <Col>
          <Header siteTitle={siteMetadata.title} />
          <Meta siteMetadata={siteMetadata} pageTitle={pageTitle} />
        </Col>
      </Row>

      {/* Navibar */}
      {/*<Navibar location={location} /> */}

      {/* Content */}
      <Row>
        <Col>
          <Container>
            <main>{children}</main>
          </Container>
        </Col>
      </Row>
    </Container>

    {/* Footer */}
    <Footer location={location} siteMetadata={siteMetadata} />
  </>
);
