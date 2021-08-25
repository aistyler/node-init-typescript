/* eslint-disable react/display-name */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LocaleList } from "../components";

let s = require("./footer.module.scss");
s = s.default || s;

export default ({ location, siteMetadata, pure = false }) => {
  return (
    <Container fluid className={`px-0 ${s.layoutFooter}`}>
      <Row>
        <Col className={`footer-col`}>
          <footer className={`${s.pageFooter}`}>
            <div className="empty-container"/>
            <div className={`${s.noticeContainer}`}>
              <h4>{siteMetadata.copyright}</h4>
              <h4>
                Based on <a href="https://github.com/aistyler">AIStyler</a>
              </h4>
            </div>
            {!pure && <LocaleList location={location} />}
          </footer>
        </Col>
      </Row>
    </Container>
  );
};
