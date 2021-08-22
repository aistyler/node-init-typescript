/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// Import all js dependencies.
import "jquery/dist/jquery.min";
// import bootstrap
import "bootstrap/dist/js/bootstrap.bundle";

// import styles
import "./src/styles/style.scss";

// wrapRootElement
export { wrapRootElement } from "./src/libs/wrap-root-element";
// wrapPageElement
export { wrapPageElement } from "./src/libs/wrap-page-element";
