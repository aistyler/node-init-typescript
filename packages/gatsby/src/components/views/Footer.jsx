/* eslint-disable react/display-name */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LocaleList } from "@/components";

import "./footer.scss";

export default ({ location, siteMetadata }) => {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col className="footer-col">
          <footer className="page-footer">
            <div className="empty-container"/>
            <div className="notice-container">
              <h4>{siteMetadata.copyright}</h4>
              <h4>
                Based on <a href="https://github.com/aistyler">AIStyler</a>.
              </h4>
            </div>
            <div className="locale-list-container">
              <LocaleList location={location} />
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};
