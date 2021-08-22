import React from "react";
//import { Link } from "gatsby";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import { Link } from "@/components";

import "./navibar.scss";

const exactMatch = (locationPath, path) => locationPath === path;
const startMatch = (locationPath, path) => locationPath.startsWith(path);
const items = [
  { name: "navibar.home", path: "/", index: "", match: exactMatch },
  { name: "navibar.articles", path: "/articles/", index: "", match: exactMatch },
  { name: "navibar.posts", path: "/post-pages/", index: "1/", match: startMatch },
  // { name: "Categories", path: "/categories/", index: "", match: startMatch },
  // { name: "Tags", path: "/tags/", index: "", match: startMatch },
  { name: "navibar.profile", path: "/profile/", index: "", match: startMatch },
];

const View = ({ location, isLoggedIn, t }) => (
  <Navbar variant="dark" expand="lg" id="site-navbar">
    {/* <Container> */}

    <Link to="/" className="link-no-style">
      <Navbar.Brand as="span">PK</Navbar.Brand>
    </Link>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {items.map((item) => (
        <Nav
          className="mr-auto"
          activeKey={location && item.match(location.pathname, item.path)}
          key={item.path}
        >
          <Link to={item.path + item.index} className="link-no-style">
            <Nav.Link as="span" eventKey={item.path}>
              {t(item.name)}
            </Nav.Link>
          </Link>
        </Nav>
      ))}

    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
);

export default withTranslation("common")(View);
