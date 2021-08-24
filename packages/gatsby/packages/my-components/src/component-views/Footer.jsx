/* eslint-disable react/display-name */
import React from "react";

import { LocaleList } from "../components";

import * as s from "./footer.module.scss";

export default ({ location, siteMetadata, pure = false }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className={`col footer-col`}>
          <footer className={`${s.pageFooter}`}>
            <div className="empty-container"/>
            <div className={`${s.noticeContainer}`}>
              <h4>{siteMetadata.copyright}</h4>
              <h4>
                Based on <a href="https://github.com/aistyler">AIStyler</a>.
              </h4>
            </div>
            {!pure &&
              <div className={`${s.localeListContainer}`}>
                <LocaleList location={location} />
              </div>
            }
          </footer>
        </div>
      </div>
    </div>
  );
};
