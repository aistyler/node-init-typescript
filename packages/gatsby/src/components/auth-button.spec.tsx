import React from "react";
import { render, screen } from "@testing-library/react";

import { AuthButton } from "./AuthButton";

const _mock_t = (k: string) => k;

describe("AuthButton", () => {
  it(`renders login`, () => {
    render(<AuthButton t={_mock_t} />);

    const ele = screen.getByText("auth-button.login");
    expect(ele).toHaveAttribute(`href`, `/auth/login`);
  });

  it(`renders logout`, () => {
    render(<AuthButton user={{ id: "id", username: "name" }} t={_mock_t} />);

    const ele = screen.getByText("auth-button.logout");
    expect(ele).toHaveAttribute(`href`, `/auth/logout`);
  });
});
