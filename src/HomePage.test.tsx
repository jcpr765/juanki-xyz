import React from "react";
import HomePage from "../pages";

import { render, screen } from "@testing-library/react";

test("loads and displays main message", () => {
  render(<HomePage />);

  const div = screen.getByTestId("welcome");

  expect(div).toBeInTheDocument;
  expect(div.textContent).toEqual("Welcome to juanki.xyz");
});
