import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const ele = screen.getByText(/Header/i);
  expect(ele).toBeInTheDocument();
});
