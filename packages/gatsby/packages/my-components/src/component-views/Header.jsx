/* eslint-disable react/display-name */
import React from "react";

import { Link } from "@/components";

import "./header.scss";

export default ({ siteTitle }) => (
  <header className="page-header">
    <div className="header-container">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);
