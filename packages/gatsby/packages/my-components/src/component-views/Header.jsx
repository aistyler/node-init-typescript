/* eslint-disable react/display-name */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "../components";

let s = require("./header.module.scss");
s = s.default || s;

export default ({ siteTitle }) => (
  <Container fluid className="px-0"><Row><Col>
    <header className={s.pageHeader}>
      <div className={s.headerContainer}>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  </Col></Row></Container>
);
