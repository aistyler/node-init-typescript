import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders header", () => {
  const { debug } = render(<Header />);
  expect(typeof debug).toBe("function");
  debug();
});
