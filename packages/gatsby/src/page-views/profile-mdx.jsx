/* eslint-disable react/display-name */
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col, Container } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "@my-components";
import { siteMetadata } from "~/site-config";

export default ({ location, profileImageSharp, mdx }) => (
  <Layout siteMetadata={siteMetadata} location={location} title={mdx ? mdx.frontmatter.title : ""}>
    <Container>
      <Row>
        <Col>
          <h3>Image using image-sharp</h3>
        </Col>
        <Col>
          <GatsbyImage image={profileImageSharp} alt="profile" className="rounded-circle" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Content from markdown-remark</h3>
          {mdx ? (
            <MDXRenderer>{mdx.body}</MDXRenderer>
          ) : (
            <div>This page hasn&apos;t been translated yet</div>
          )}
        </Col>
      </Row>
    </Container>
  </Layout>
);
