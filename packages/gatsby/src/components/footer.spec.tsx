import React from "react";
import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer", () => {
  it(`renders empty site Metadata`, () => {
    const location = {} as Location;
    const siteMetadata = {};

    render(<Footer location={location} siteMetadata={siteMetadata} />);

    const ele = screen.getByText("AIStyler");
    expect(ele).toBeInTheDocument();
  });
});
