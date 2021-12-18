/** @format */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders Card without crashing", function () {
  render(<Card />);
});

it("matches Card snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
